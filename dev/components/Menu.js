import React  from 'react';
import '../css/menu.css';
import Sport from './Sport'
const Menu=({...props})=> {
    return(
        <div className={props.openStatus ? "open menu" : "menu" }>
                <Sport/>
        </div>
    );
}
export default Menu;