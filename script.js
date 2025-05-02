// Conversion factor: 1 mmol/L = 18 mg/dL
const CONVERSION_FACTOR = 18;

// Help text templates
const HELP_TEXTS = {
    bloodSugar: {
        mgdl: "Normal range: 70-130 mg/dL",
        mmol: "Normal range: 3.9-7.2 mmol/L"
    },
    sensitivity: {
        mgdl: "Example: If 1 unit lowers your blood sugar by 50 mg/dL, enter 50",
        mmol: "Example: If 1 unit lowers your blood sugar by 2.8 mmol/L, enter 2.8"
    }
};

// Function to round to a specific number of decimal places
function roundToDecimal(value, decimals = 2) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

// Theme handling
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const currentTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply the theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Handle theme toggle
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    const unitToggle = document.querySelectorAll('input[name="unit"]');
    const bloodSugarInput = document.getElementById('blood-sugar');
    const insulinSensitivityInput = document.getElementById('insulin-sensitivity');
    const bloodSugarHelp = document.getElementById('blood-sugar-help');
    const sensitivityHelp = document.getElementById('sensitivity-help');
    
    // Function to convert between units
    function convertUnits(value, fromUnit, toUnit) {
        if (fromUnit === toUnit) return value;
        if (fromUnit === 'mmol' && toUnit === 'mgdl') return value * CONVERSION_FACTOR;
        if (fromUnit === 'mgdl' && toUnit === 'mmol') return value / CONVERSION_FACTOR;
    }

    // Function to update help text
    function updateHelpTexts(unit) {
        bloodSugarHelp.textContent = HELP_TEXTS.bloodSugar[unit];
        sensitivityHelp.textContent = HELP_TEXTS.sensitivity[unit];
    }

    // Update input placeholders and values when unit changes
    unitToggle.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const currentUnit = e.target.value;
            const currentValue = bloodSugarInput.value;
            
            if (currentValue) {
                const newValue = convertUnits(
                    parseFloat(currentValue),
                    currentUnit === 'mgdl' ? 'mmol' : 'mgdl',
                    currentUnit
                );
                bloodSugarInput.value = roundToDecimal(newValue, 1);
            }

            // Update help texts
            updateHelpTexts(currentUnit);
        });
    });
});

document.getElementById('insulin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const bloodSugar = parseFloat(document.getElementById('blood-sugar').value);
    const carbs = parseFloat(document.getElementById('carbs').value);
    const insulinSensitivity = parseFloat(document.getElementById('insulin-sensitivity').value);
    const carbRatio = parseFloat(document.getElementById('carb-ratio').value);
    const currentUnit = document.querySelector('input[name="unit"]:checked').value;

    // Convert blood sugar to mg/dL for calculation if in mmol/L
    const bloodSugarMgdl = currentUnit === 'mmol' ? bloodSugar * CONVERSION_FACTOR : bloodSugar;
    const insulinSensitivityMgdl = currentUnit === 'mmol' ? insulinSensitivity * CONVERSION_FACTOR : insulinSensitivity;

    // Target blood sugar level (can be adjusted based on individual needs)
    const targetBloodSugar = 100; // in mg/dL

    // Calculate correction dose (for high blood sugar)
    const correctionDose = (bloodSugarMgdl - targetBloodSugar) / insulinSensitivityMgdl;
    
    // Calculate meal dose (for carbs)
    const mealDose = carbs / carbRatio;

    // Total insulin dose
    const totalDose = correctionDose + mealDose;

    // Format the result with detailed breakdown
    let resultHTML = `
        <h3>Recommended Insulin Dose: ${roundToDecimal(totalDose, 2)} units</h3>
        <div class="dose-breakdown">
            <p>Correction Dose: ${roundToDecimal(correctionDose, 2)} units</p>
            <p>Meal Dose: ${roundToDecimal(mealDose, 2)} units</p>
        </div>
    `;

    document.getElementById('result').innerHTML = resultHTML;
});