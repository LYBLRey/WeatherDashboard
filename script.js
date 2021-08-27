const apiKey = "c0603ea7a74f67930699def6ca862de0";

const getCurrentData = (cityName) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

document.querySelector("#search").addEventListener("submit", (e) => {
  e.preventDefault();
  //get the input
  const cityName = document.querySelector("#searchInput").value;
  //use the input the current
  getCurrentData(cityName);
  //use the input to get forecast
});
