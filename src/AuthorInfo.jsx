import React from 'react'

export default function AuthorInfo(props){
const display = {
                  display : props.onStart ? "none" : "block"  
                    }
                    
    return(
        <div style={display} id='author'>
            <h6 id='author-info'></h6>
            <h6 id='location'></h6>
        </div>
    )
}