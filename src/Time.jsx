import React, { useEffect } from 'react'

export default function Time(props){

          
function updateTime() {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();

        if (minutes < 10) {
          minutes = `0${minutes}`;
        }      

        let amOrPm = hours >= 12 ? "PM" : "AM"
         hours = hours % 12
         hours = hours ? hours : "12"
        document.getElementById("time").textContent =  `${hours}:${minutes} ${amOrPm}`;
      }
      setInterval(updateTime, 1000);
      const theName = document.querySelector('#username').value
     
     setTimeout(() => {
      const textToUser = document.querySelector('#toUser')
      textToUser.textContent = "What are your main plans for today?"
     }, 10000);


    return(
            <div id='time-area'>
                <h3 id='toUser'>Hi, {theName}</h3>
                <h1 id='time'></h1>
            </div>
    )
}