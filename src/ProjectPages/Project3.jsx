import '../styles/ProjectStyles/Project3.css'
import { Link } from 'react-router-dom';
import b1 from '../assets/VillaBasse/PE1-1.jpg';
import b2 from '../assets/VillaBasse/PE1-2.jpg';
import b3 from '../assets/VillaBasse/PE2-1.jpg';
import b4 from '../assets/VillaBasse/PE2-2.jpg';




export default function Project3() {

    const proj1Data = [
        {id:1, img:b1},
        {id:2, img:b2},
    ];

    const proj3Data = [
        {id:1, img:b3},
        {id:2, img:b4},
    ];

    
    return(
        <section className='proj3_main'>

            <div className='proj3_cont'>
                <Link to="/Work">
                <h1 className='proj3_title'>Rénovation d’une petite villa basse situé Jaqueville</h1>
                </Link> 
                <div className='proj3_box'>
                    {proj1Data.map((pro1) =>(
                        <div className='proj3_box_img' key={pro1.id}>
                            <img src={pro1.img} alt="Project3" className='proj3_img'/>
                        </div>
                    ))}
                </div>
                <div className='proj3_box'>
                    {proj3Data.map((pro3) =>(
                        <div className='proj3_box_img' key={pro3.id}>
                            <img src={pro3.img} alt="Project3" className='proj3_img'/>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}