import {useEffect} from 'react'

export default function Weather(){
    const date = new Date()
    let day = date.getUTCDate()
    let month = date.getMonth() + 1
    const options = { weekday: 'long' };
    const dayOfWeek = date.toLocaleDateString('en-US', options);

if (month < 10) {
    month = `0${month}`;
  }
if (day < 10) {
    day = `0${day}`
  }

    const fullDate = `${dayOfWeek}, ${day}/${month}` 

useEffect(()=>{    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=accra&appid=cbf88a66c2a7081f6f99028ccc0550ce&units=metric')
    .then(res => res.json())
    .then(data => {
        document.querySelector('#weather-container').innerHTML = 
        `<div>
            <span id="date-el">${fullDate}</span>
            <div id="weather-facts">        
                <span id="temperature">${data.main.temp}°C</span>        
                <img id="icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon"/>
            </div>
            <span id="description">${data.weather[0].description}</span>        
            <span id="city-name"> · ${data.name}</span>        
       </div>`
    }) 
},[])

return(
    <div id="weather-container"></div>
    )
}