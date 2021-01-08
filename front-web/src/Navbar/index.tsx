import './styles.css';
import {ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar(){    
    return (
        <nav className="main-navbar">
            
            <Link to ="/" className="logo-area"> 
            <Logo/>
            <span className="logo-text">
            DS Delivery 
            </span>
            </Link>
        </nav>
    )    
}

export default Navbar;