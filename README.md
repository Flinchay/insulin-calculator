# 💉 Insulin Calculator

A simple, privacy-focused web application for calculating insulin dosages based on blood sugar levels and carbohydrate intake.

## 🚀 Live Demo

👉 [Visit the Insulin Calculator](https://flinchay.github.io/insulin-calculator/)

## Features

- **Easy-to-Use Interface**: Simple form for entering blood sugar levels and carbohydrate amounts
- **Unit Flexibility**: Toggle between mg/dL and mmol/L for blood sugar measurements
- **Dark Mode Support**: Toggle between light and dark themes
- **Privacy-Focused**: All calculations performed locally in your browser
- **Responsive Design**: Works on desktop and mobile devices
- **Contact Form**: Built-in contact form for user inquiries
- **Educational Resources**: Includes important medical disclaimers and information

## 🧪 How to Use the Calculator

This tool calculates an estimated insulin dose based on:

### 🔢 Input Fields

1. **Blood Sugar Level**  
   * Enter your current blood glucose level.  
   * Toggle between **mg/dL** and **mmol/L**.  
   * Normal range is shown as a reference (3.9–7.2 mmol/L).
2. **Carbohydrates (g)**  
   * Input the number of carbs (in grams) you plan to eat.
3. **Insulin Sensitivity**  
   * This is how much 1 unit of insulin lowers your blood sugar.  
   * Example: If 1 unit lowers blood sugar by 2.8 mmol/L, enter `2.8`.
4. **Carb Ratio (grams per unit)**  
   * This is how many grams of carbs 1 unit of insulin covers.  
   * Example: If 1 unit covers 15g of carbs, enter `15`.

## 🧮 What the Calculator Does

When you click **Calculate Insulin Dose**, the app computes:
* **Correction Dose** – to bring your blood sugar to target range.
* **Meal Dose** – based on your carb intake and ratio.
These values are combined to suggest a **total insulin dose**.

## Important Notice

⚠️ **Always consult with a healthcare provider before making changes to your insulin dosage.**

This calculator is for informational purposes only and should not replace professional medical advice. Individual insulin requirements may vary based on:
- Current health status
- Activity level
- Time of day
- Other medications

## Setup

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/flinchay/insulin-calculator.git
   ```

2. Open `index.html` in your web browser

### EmailJS Setup (for Contact Form)

1. Sign up for a free [EmailJS](https://www.emailjs.com/) account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Replace the following placeholders in `index.html`:
   - `service_jjkxuyl` with your EmailJS service ID
   - `template_1qblcok` with your EmailJS template ID

## Privacy

This application:
- Performs all calculations locally in your browser
- Does not collect or store any personal data
- Uses local storage only for theme preference and unit settings
- Does not use cookies for tracking
- Does not use third-party analytics services

For more information, see the [Privacy Policy](index.html#privacy-policy).

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla)
- [SweetAlert2](https://sweetalert2.github.io/) for popups
- [EmailJS](https://www.emailjs.com/) for contact form

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, please use the contact form in the application or open an issue in the GitHub repository. 
