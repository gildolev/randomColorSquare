import Initials from './Initials';
import Days from './Days'
import Menu from './Menu/Menu';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';
import MenuItem from './MenuItem/MenuItem';
function App() {

  return (
    <div >
      <Menu style={{display:'flex'}}>
        <MenuItem label="HomePage" link='/' />
        <MenuItem label="Contact" link='/About Us' />
        <MenuItem label="Prices" link='Contact' />
      </Menu>
      <RandomColorSquare />

    </div>

  );
}





export default App;
