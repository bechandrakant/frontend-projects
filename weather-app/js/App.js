const form = document.querySelector("form");
const card = document.querySelector(".card");
const time = document.querySelector(".time");
const feel = document.querySelector(".feel");
const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");

const forecast = new Forecast();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = e.target.city.value;
  form.reset();

  forecast
    .updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

  localStorage.setItem("city", city);

})

function updateUI(data) {
    const { cityDetails, weatherDetails } = data;

    // update details template
    card.innerHTML += `
      <img src="img/night.svg" alt="" class="time">
      <img src="img/icons/1.svg" alt="" class="feel">
      <h2 class="city-name">
        ${cityDetails.EnglishName}
      </h2>
      <p class="temperature">${weatherDetails.Temperature.Metric.Value}&deg; C</p>
    `;

    // update the night/day & icon images
    const iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
    feel.setAttribute("src", iconSrc);

    const timeSrc = weatherDetails.IsDayTime ? "img/day.svg" : "img/night.svg";
    time.setAttribute("src", timeSrc);

    // remove the d-none class if present
    if (card.classList.contains("d-none")) {
      card.classList.remove("d-none");
    }

}

if (localStorage.getItem("city")) {
  forecast
    .updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
