export function calculateBMI(age: number, height: number, weight: number) {
  //height = height/100

  var data = (weight / (height * height)) * 10000;
  return String(round2dp(data));
}

export function calculateIBW(gender: "Female" | "Male", height: number) {
  if (gender.toLowerCase() == "male") {
    return String(round2dp(50 + (0.91 * height - 152.4)));
  } else {
    return String(round2dp(45 + (0.91 * height - 152.4)));
  }
}

export const advice = (bmi: number) => {
  if (bmi < 18.5)
    return {
      advice: "You May be underweight; please consult your GP for advice",
      status: "blue",
    };
  else if (bmi < 24.9)
    return {
      advice:
        "Your weight is normal; maintain your current physical activity levels and calorie intake",
      status: "green",
    };
  else if (bmi < 29.9)
    return {
      advice:
        "you are overweight; maintain your current physical activity levels and calorie intake",
      status: "orange",
    };
  else
    return {
      advice:
        "you are obese; Seek advice from a weight management practitioner",
      status: "red",
    };
};

const round2dp = (n: number) => {
  var num = n * 100;
  var newnum = Math.floor(num);
  var final = newnum / 100;
  return final;
};
