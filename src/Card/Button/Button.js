
import './Button.css';
export default function Button(props) {
  console.log(props)
    return <button className='Button'>{props.text}</button>;
  }