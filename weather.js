const apiKey = "b3134f7f49c3249dc5b91eefa4077de7";
const search=document.querySelector(".search input");
const button=document.querySelector(".search button");
const img=document.querySelector(".weather img")

async function checkWeather(city){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    
}
button.addEventListener("click",()=>{
    checkWeather(search.value)
})
