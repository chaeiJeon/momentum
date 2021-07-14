const API_KEY="f73ce9ef36147ff7caeb19119517423e";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //fetch(url)을 하고 나서 response.json() 하고 json 형태의 데이터에서 name, weather[0].main 가져오기
    
}
function onGeoError(){
    alert("cant ok");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);