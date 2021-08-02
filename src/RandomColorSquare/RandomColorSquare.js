import { useState } from 'react'
import './RandomColorSquare.css';

function RandomColorSquare() {
    const randomColor = () => {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        return `#${color}`;
    }
    const [backGroundColor, setBackgroundColor] = useState('red')
    return (
        <div className='square'
            onClick={() => { setBackgroundColor(randomColor) }}
            style={{ background: backGroundColor }}>

        </div>
    )
}

export default RandomColorSquare
