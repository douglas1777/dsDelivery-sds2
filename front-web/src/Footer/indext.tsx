import './styles.css';
import {ReactComponent as YouTubeIcon } from './youtube.svg';
import  {ReactComponent as LinkedinIcon} from './linkedin.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';


function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCnJs_PqxwX9gZ5IumalavUw" target="_new">
                <YouTubeIcon/>
                </a>
                <a href="https://www.linkedin.com/in/douglas-santana-costa-274a4017a/" target="_new">
                <LinkedinIcon/>
                </a>
                <a href="https://www.instagram.com/douglas_costa1777/?hl=pt-br" target="_new">
                <InstagramIcon/>
                </a>

            </div>
        </footer>
    )
}

export default Footer;
