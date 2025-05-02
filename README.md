# 💉 Insulin Calculator

A simple web app that helps people with diabetes calculate their insulin dosage based on current blood sugar levels, carbohydrate intake, insulin sensitivity, and carb ratio.

> ⚠️ Always consult with a healthcare provider before making changes to your insulin dosage.

---

## 🚀 Live Demo

👉 [Visit the Insulin Calculator](https://flinchay.github.io/insulin-calculator)  


---

## 🧪 How to Use the Calculator

This tool calculates an estimated insulin dose based on:

### 🔢 Input Fields

1. **Blood Sugar Level**
   - Enter your current blood glucose level.
   - Toggle between **mg/dL** and **mmol/L**.
   - Normal range is shown as a reference (3.9–7.2 mmol/L).

2. **Carbohydrates (g)**
   - Input the number of carbs (in grams) you plan to eat.

3. **Insulin Sensitivity**
   - This is how much 1 unit of insulin lowers your blood sugar.
   - Example: If 1 unit lowers blood sugar by 2.8 mmol/L, enter `2.8`.

4. **Carb Ratio (grams per unit)**
   - This is how many grams of carbs 1 unit of insulin covers.
   - Example: If 1 unit covers 15g of carbs, enter `15`.

---

## 🧮 What the Calculator Does

When you click **Calculate Insulin Dose**, the app computes:

- **Correction Dose** – to bring your blood sugar to target range.
- **Meal Dose** – based on your carb intake and ratio.

These values are combined to suggest a **total insulin dose**.

---

## 📦 Installation (Optional for Local Use)

If you'd like to run the app locally:

```bash
git clone https://github.com/yourusername/insulin-calculator.git
cd insulin-calculator
open index.html
