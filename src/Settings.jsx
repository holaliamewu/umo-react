import React from 'react'

export default function Settings(props){
    return(
    <div>
        <i class="fa-solid fa-user-gear"></i>
        <div id='user-menu'>
            <span id='close-btn'>x</span>
            <label id='name-l'>Name</label>
            <input placeholder={props.name}/>
        </div>
    </div>
    )
}