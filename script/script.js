let age=document.getElementById("age");
let female=document.getElementById("f");
let male=document.getElementById("m");
let weight=document.getElementById("weight");
let height=document.getElementById("height");
let result=document.getElementById("result")

function calculateBMI() {
	let height = parseInt(document
			.getElementById("#height").value);
	let weight = parseInt(document
			.getElementById("#weight").value);
	let result = document.querySelector("#result");

	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";
	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	else {

		let bmi = (weight / ((height * height)));
		if (bmi < 18.5) result.innerHTML =
        "Your BMI falls within the underweight range";
		else if (bmi >= 18.5 && bmi < 24.9)
			result.innerHTML =
            "Your BMI falls within the normal or healthy weight range. Choosing healthy foods and doing at least exercise 3 times a week can help you maintain or achieve a healthy weight.";
        else if (bmi >= 24.9 && bmi < 30)
			result.innerHTML =
            "Your BMI falls within the overweight range. Being overweight is the precursor of obesity. Be careful to if your waist measures more than 40 inches (35 inches for women who aren't pregnant.)";
		else result.innerHTML =
			"Your BMI falls within the obese range. Obesity raises the risk of diabetes, high blood pressure, and other cardiovascular diseases. The best way to treat obesity is to eat a healthy, reduced-calorie diet and exercise regularly.";
	}
}
