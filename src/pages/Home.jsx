import '../styles/Home.css';
import { Link } from 'react-router-dom';


export default function Home() {
   
    return(
        
        <section className='home_main'>
            <div className='home_cont'>
               <Link to=''>
                <h2 className='home_title'>
                    Réinventons votre quotidien
                </h2>
                </Link>
            </div>
            <div className='home_cont'>
                <Link to='/Work'>
                    <p className='home_box'>
                        Découvrez nos réalisations
                    </p>
                </Link>
                 <Link to='/About'>
                     <p className='home_box'>
                        Apprenez-en plus sur nous
                     </p>
                </Link>
                 <Link to='/Info'>
                     <p className='home_box'>
                       Contactez nous
                     </p>
                </Link>
            </div>
        </section>
    )
}