import '../styles/Footer.css';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";



export default function Footer() {
    return(
        <footer>
            <h4>
                IvoireRenov@gmail.com
           
                <a href="tel:+225 0789763083"> 
                    <FaPhone className='info_icons' />
                     Notre service client
                   
                </a>
            
                    <a href='https://maps.app.goo.gl/DV9hbfiNAbjb6f9k8'>
                    <FaMapLocationDot  className='info_icons' />
                    Notre localisation
                    </a>
            </h4>
        </footer>
    )
}