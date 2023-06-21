import { useState, useEffect } from 'react'
import AuthorInfo from './AuthorInfo'
import Time from './Time'
import Startup from './Startup'
import Weather from './Weather'
//import Settings from './Settings'
 
import { initializeApp } from "firebase/app";
import { getDatabase , ref , push , onValue , } from "firebase/database";

export default function App() {

const appSettings = {
  apiKey: "AIzaSyD56A6g1ubPjSq73O-420wQH9bLXPq9Ogg",
  authDomain: "umo-dashboard.firebaseapp.com",
  databaseURL: "https://umo-dashboard-default-rtdb.firebaseio.com",
  projectId: "umo-dashboard",
  storageBucket: "umo-dashboard.appspot.com",
  messagingSenderId: "136578348997",
  appId: "1:136578348997:web:4774f29350a8881052bdac",
  measurementId: "G-DVP2HJZG6D"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const userDataInDB = ref(database, "userData")


const [onStart, setOnStart] = useState(true)


useEffect(()=>{
  fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(res => res.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.querySelector("#author-info").textContent =  `${data.user.name}`
    document.querySelector("#location").textContent =  `${data.user.location == null ? " " : data.user.location}`
  })
},[]) 

let username;  
function verifyAndGo(){
  username = document.querySelector('#username').value
  const errorMes = document.querySelector('#error-message')
  
  if(username && username.length > 3 && username.length < 20){
    setOnStart(false)
    //push(userDataInDB, { name: username , city: "Accra"})
  }else{
    errorMes.textContent = "*You should provide a proper name :("    
  }
  
  // {<AuthorInfo  onStart={onStart}/>}
  
  return (
    <div id='main-container'>
    {onStart && <Startup VNG={verifyAndGo}/>}
    {!onStart && <Time />}
    {!onStart && <Weather />}
    {!onStart && <Settings name={username}/>}
    </div>
      )
    }
  }