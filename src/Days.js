import React from 'react'


function Days(props) {
    const Days=['S','m','t','w','s','f','s']
    const day=Days[Number(props.day)+1]
    return (
        <div>
            <h1>{day}</h1>
        </div>
    )
}



export default Days

