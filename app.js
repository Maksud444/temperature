const api_Key =`59780ae5e74cfe3f63006d62ab2589f2`;

const loadTemperature = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayTemperature(data));
}

const displayTemperature = data =>{
    setTemperatureById('temperature',data.main.temp);
    setTemperatureById('condition',data.weather[0].main)
}

const setTemperatureById =(id, text)=>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchField = document.getElementById('input-field');
    const city = searchField.value;

document.getElementById('city').innerText = city;
    loadTemperature(city);
})


loadTemperature('dhaka')