import React from 'react'

export default function Startup(props){
    return(
        <div id='userInfoOnStart'>
            <label for='username' id='name-question'>How would you like me address you?</label><br/>
            <div>
                <input autoComplete='off' id='username' placeholder='Your name here' />
                <button onClick={props.VNG}><i class="fa-solid fa-check"></i></button>
            </div>
            <span id='error-message'></span>
        </div> 
        
    )
}