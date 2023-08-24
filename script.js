const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1d1e96d01dmsh2680ea69f408a9bp1467d3jsn1415b65196bc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const m=document.getElementById('myModal');
const d=document.getElementById("modalclose");
const getweather = (city) => {
    cityname.innerHTML = city;
    const arr=fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            if(!(response.humidity<=100&&response.humidity>=0)){
                m.style.display="block";
            }
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp + "°C"
            feels_like.innerHTML = response.feels_like + "°C"
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp + "°C"
            max_temp.innerHTML = response.max_temp + "°C"
            wind_speed.innerHTML = (response.wind_speed * 3.6).toFixed(3) + "Kmph"
            wind_degrees.innerHTML = response.wind_degrees + "°"
        })
        .catch(err =>console.log(err));
    }
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value);
})
d.addEventListener("click", (e) => {
    m.style.display="none";
    getweather("Delhi");
})
getweather("Delhi");
const filler = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            data = document.getElementsByClassName(city);
            data[0].innerHTML = response.cloud_pct
            data[1].innerHTML = response.temp + "°C"
            data[2].innerHTML = response.feels_like + "°C"
            data[3].innerHTML = response.humidity
            data[4].innerHTML = response.min_temp + "°C"
            data[5].innerHTML = response.max_temp + "°C"
            data[6].innerHTML = (response.wind_speed * 3.6).toFixed(2) + "Kmph"
            data[7].innerHTML = response.wind_degrees + "°"
        })
        .catch(err => console.log(err));
}
let str = ["New york", "Shanghai", "Dubai", "Chennai", "London", "Melbourne"];
for (let i = 0; i < str.length; i++) {
    filler(str[i]);
}
