import Button from './Button/Button';
import Hello from './Hello/Hello';
import './Card.css';
export default function Card() {

    return <div>
        <Hello name='gilad'/>
        <p>This is my card</p>
        <Button text='Purchase' />
        <Button text='Buy' />
    </div>;
}
