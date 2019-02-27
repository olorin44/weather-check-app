"use strict";
(function() {
  const urlData =
    " http://api.openweathermap.org/data/2.5/weather?APPID=eeeb1c75b8f4906d80f9f61ff892648a&units=metric&q=";
  const dataContainer = document.getElementById("data-container");
  const getDataBtn = document.getElementById("get-data");
  const cityName = document.getElementById("city-name");

  const findCityWeather = () => {
    const cityName = document.getElementById("city-name").value;
    if (!cityName.length) cityName = "Warsaw";
    fetch(urlData + cityName)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
      })
      .then(showWeather);
  };

  getDataBtn.addEventListener("click", findCityWeather);
  cityName.addEventListener("keyup", event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      findCityWeather();
    }
  });

  //   const showWeather = resp => {
  //     dataContainer.innerHTML = "";
  //     resp.forEach(item => {
  //       let liElement = document.createElement("li");
  //       liElement.innerHTML =
  //         "city:" +
  //         item.name +
  //         "<br>" +
  //         "coords:" +
  //         item.coord +
  //         "<br>" +
  //         "dupa:" +
  //         item.main +
  //         "<br>" +
  //         "wind:" +
  //         item.wind +
  //         "<br>" +
  //         "description" +
  //         item.weather;
  //       dataContainer.appendChild(liElement);
  //     });
  //   };

  const showWeather = resp => {
    dataContainer.innerHTML = "";
    let dupa = json.parse(resp);
    dataContainer.innerHTML = dupa.main.humidity + "%";
    // dataContainer.appendChild(dupa);
  };
})();
