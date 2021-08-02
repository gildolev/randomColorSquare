import React from 'react'

function Initials(props) {
    const names=props.names.split(' ');
    const initial = `${names[0][0]} . ${names[1][0]}`
    return (
        <div>
            {initial}  
        </div>
    )
}



export default Initials

