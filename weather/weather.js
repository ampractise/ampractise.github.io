const apikey = "&key=99579056ab394633b55235233232412";
const apiurl = "https://api.weatherapi.com/v1/current.json?aqi=yes";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  checkW(searchBox.value);
});

async function checkW(city = "sangli india") {
  if (city === "") {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "none";
    const res = await fetch(apiurl + apikey + `&q=${city}`);
    var data = await res.json();

    if (res.status === 200) {
      document
        .querySelector(".weather-icon")
        .setAttribute("src", data.current.condition.icon);
      document
        .querySelector(".weather-text")
        .innerHTML= data.current.condition.text;
      document.querySelector(".city").innerHTML = data.location.name;
      document.querySelector(".temp").innerHTML =
        data.current.temp_c + " &deg" + "c";
      document.querySelector(".humidity").innerHTML =
        data.current.humidity + " &#37";
      document.querySelector(".wind").innerHTML =
        data.current.wind_kph + " km/h";
      document.querySelector(".region").innerHTML = data.location.region +",";
      document.querySelector(".counrty").innerHTML = data.location.country;

      document.querySelector(".weather").style.display = "block";
    } else {
      document.querySelector(".error").style.display = "block";
    }
  }
}

/*
        data.current.temp_c
        data.current.humidity
        data.current.wind_kph
        data.current.condition.icon

        data.location.name
        data.location.region

        country, region

        */
