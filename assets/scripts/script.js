const heatCondition = (heatDegree) => {
  if (heatDegree > 28) {
    return "hot";
  } else if (heatDegree <= 28 && heatDegree >= 15) {
    return "normal";
  } else if (heatDegree < 15 && heatDegree >= 5) {
    return "cold";
  } else if (heatDegree < 5) {
    return "snow";
  }
};

const getAdvice = (heatCondition, weatherCondition) => {
  switch (weatherCondition) {
    case "sunny":
      if (heatCondition === "hot") {
        return "<p>It's hot and sunny!</p> <p><strong> Recommendation:</strong> Wear a t-shirt, shorts, and sunglasses.<p>";
      } else if (heatCondition === "normal") {
        return "<p>A beautiful, sunny day.</p><p><strong> Recommendation:</strong>  A light shirt and pants/jeans are perfect.<p>";
      } else if (heatCondition === "cold" || heatCondition === "snow") {
        return "<p>It's cool but sunny.</p><p><strong> Recommendation:</strong> A sweater or light jacket would be wise.<p>";
      } else {
        return "<p class='error'>Invalid temperature value</p>";
      }
      break;

    case "rainy":
      if (heatCondition === "hot" || heatCondition === "normal") {
        return "<p>Rainy but warm.</p><p><strong> Recommendation:</strong> A waterproof jacket and an umbrella are a good idea.<p>";
      } else if (heatCondition === "cold" || heatCondition === "snow") {
        return "<p>It's cold and rainy.</p><p><strong> Recommendation:</strong> Wear a warm, waterproof coat and boots.<p>";
      } else {
        return "<p class='error'>Invalid temperature value</p>";
      }
      break;

    case "cloudy":
      if (heatCondition === "hot") {
        return "<p>Warm but cloudy skies.</p><p><strong> Recommendation:</strong> A t-shirt should be fine, no need for sunglasses.<p>";
      } else if (heatCondition === "normal" || heatCondition === "cold") {
        return "<p>It's mild and cloudy.</p><p><strong> Recommendation:</strong>  A long-sleeve shirt or a light sweater is a good choice.<p>";
      } else if (heatCondition === "snow") {
        return "<p>Cold and cloudy.</p><p><strong> Recommendation:</strong> Definitely wear a warm jacket.<p>";
      } else {
        return "<p class='error'>Invalid temperature value</p>";
      }
      break;

    case "windy":
      if (heatCondition === "hot" || heatCondition === "normal") {
        return "<p>It's mild and windy.</p><p><strong> Recommendation:</strong> A windbreaker or a light jacket will keep you comfortable.<p>";
      } else if (heatCondition === "cold" || heatCondition === "snow") {
        return "<p>Cold and windy.</p><p><strong> Recommendation:</strong>  Wear a warm jacket and maybe a scarf.<p>";
      } else {
        return "<p class='error'>Invalid temperature value</p>";
      }
      break;

    case "snowy":
      if (
        heatCondition === "hot" ||
        heatCondition === "normal" ||
        heatCondition === "cold" ||
        heatCondition === "snow"
      ) {
        return "<p>It's snowing!</p><p><strong> Recommendation:</strong> Wear a heavy winter coat, gloves, and a hat.<p>";
      } else {
        return "<p class='error'>Invalid temperature value</p>";
      }
      break;

    default:
      return "<p class='error'>Please select a valid weather condition</p>";
  }
};

const heatDegreeElement = document.getElementById("heat-degree");
const weatherConditionElement = document.getElementById("weather-condition");
const getSubmitButton = document.getElementById("get-advice-btn");
const adviceBodyElement = document.getElementById("advice-body");

getSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const heatDegree = heatDegreeElement.value;
  const weatherCondition = weatherConditionElement.value;

  if (heatDegree === "" || isNaN(heatDegree)) {
    adviceBodyElement.innerHTML =
      "<p class='error'>Please enter a valid temperature</p>";
    return;
  }

  const condition = heatCondition(Number(heatDegree));
  adviceBodyElement.innerHTML = getAdvice(condition, weatherCondition);
});
