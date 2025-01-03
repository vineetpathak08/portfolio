const apiKey = "f8aed18fd84e28166ecf7317a4b13d64";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); 
const weatherIcon = document.querySelector(".weather-icon");
searchBtn.addEventListener('click' , ()=>{
    checkWeather(searchBox.value);
   searchBox.textContent="";
})
searchBox.addEventListener('keypress' , (e)=>{
    if (e.key=="Enter"){
        checkWeather(searchBox.value);
   searchBox.textContent="";
}
})
checkWeather(city);
 async function checkWeather(city){
  const response = await fetch(apiUrl+ city+`&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name ;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed+ " km/h";
   
  if (data.weather[0].main =="Clouds"){
    weatherIcon.src = "images/cloudy.png"
  }
  else if (data.weather[0].main =="Clear"){
    weatherIcon.src = "images/clear.png";
 }
 else if (data.weather[0].main =="Rain"){
    weatherIcon.src = "images/rain.png";
 }
 else if (data.weather[0].main =="Drizzle"){
    weatherIcon.src = "images/drizzle.png";
 }
 else if (data.weather[0].main =="Mist"){
    weatherIcon.src = "images/mist.png";
 }
}
