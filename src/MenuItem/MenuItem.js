import React from 'react'
import './MenuItem.css';
function MenuItem(props) {
    return (
        <li>
            <a href={props.link} >{props.label}</a>
        </li>
    )
}

export default MenuItem
