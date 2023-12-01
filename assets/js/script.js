// Variables for the search button and input text
let submitEl = document.querySelector("#submit");
let foodText = document.querySelector(".foodText");
let amountEl = document.querySelector("#amount");
let measureEl = document.getElementById("foodType");
let weightEl = document.querySelector(".weight");
let heightEl = document.querySelector(".height");
let ageEl = document.getElementById("age");
let genderEl = document.getElementById("gender");
let activityEl = document.getElementById("activity");
let foodResultsEl = document.getElementById("foodResults");
let tdeeResultsEl = document.getElementById("tdeeResults");
let activityTextEl = document.querySelector(".activityText");
let durationEl = document.getElementById("duration");
let activityResultsEl = document.getElementById("activityResults");
let alertEl = document.getElementById("alert");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Run if ready
$(document).ready(function () {
  // Event Handler for the food Search Button
  $(".foodForm .submit").on("click", foodSearch);

  // Event Handler for Enter key in the input field
  $(".foodForm" + " #submit").on("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      foodSearch();
    }
  });
  // Event Handler for the TDEE Search Button
  $(".tdeeForm .submit").on("click", tdeeSearch);

  // Event Handler for Enter key in the input field
  $(".tdeeForm" + " #submit").on("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      tdeeSearch();
    }
  });
  // Event Handler for the Activity Search Button
  $(".activityForm .submit").on("click", activitySearch);

  // Event Handler for Enter key in the input field
  $(".activityForm" + " #submit").on("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      activitySearch();
    }
  });
  // Function to call functions for fetch, storage and adding the new item
  function foodSearch() {
    event.preventDefault();
    let food = foodText.value;
    let amount = amountEl.value;
    let measure = measureEl.value;

    if (!foodText || !amount || !measureEl) {
      alertEl.textContent = "Please fill all mandatory fields!";
      modal.style.display = "block";
      //   foodResultsEl.removeChild(foodResultsEl.firstChild);
    }
    if (isNaN(amount)) {
      alertEl.textContent = "Please enter a number!";
      modal.style.display = "block";
    } else {
      getFoodInfo(food, amount, measure);
      $(".foodText").val("");
      $("#amount").val("");
      $("#foodType").val("Choose an option");
    }
  }
  // Event Handler for saved food searches
  $(".foodForm .btn").on("click", function () {
    getFoodHistory();
  });
  function tdeeSearch() {
    event.preventDefault();
    let weight = weightEl.value;
    let height = heightEl.value;
    let age = ageEl.value;
    let gender = genderEl.value;
    let activityLevel = activityEl.value;

    if (!weight || !height || !age || !gender || !activityLevel) {
      alertEl.textContent = "Please fill all mandatory fields!";
      modal.style.display = "block";
      //   tdeeResultsEl.removeChild(foodResultsEl.firstChild);
    } else if (isNaN(weight) || isNaN(height) || isNaN(age)) {
      alertEl.textContent = "Please enter a number!";
      modal.style.display = "block";
    } else {
      getTDEE(weight, height, age, gender, activityLevel);
      $(".weight").val("");
      $(".height").val("");
      $("#age").val("");
      $("#gender").val("Gender");
      $("#activity").val("Choose an activity level");
    }
  }

  function activitySearch() {
    event.preventDefault();
    let activityText = activityTextEl.value;
    let duration = durationEl.value;

    if (!activityText || !duration) {
      alertEl.textContent = "Please fill all mandatory fields!";
      modal.style.display = "block";
    } else if (isNaN(duration)) {
      alertEl.textContent = "Please enter a number!";
      modal.style.display = "block";
    } else {
      getActivityInfo(activityText, duration);
      $(".activityText").val("");
      $("#duration").val("");
    }
  }
  function getFoodInfo(food, amount, measure) {}
  function saveFoodInfo(food, amount, measure) {}
  // Fetch data for TDEE search
  function getTDEE(weight, height, age, gender, activityLevel) {}
  // Fetch data for activity search
  function getActivityInfo(activityText, duration) {}

  // Display the search result for Nutrients Info
  function displayFoodResult(data, food, amount, measure) {}
  // Display the search result for TDEE
  function displayTDEEResult(
    data,
    weight,
    height,
    age,
    gender,
    activityLevel
  ) {}
  // Display the search result for Activity
  function displayActivityResult(data, activityText, duration) {}
  // Display saved searches for food
  function getFoodHistory() {}

  //Function to handle model window
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
