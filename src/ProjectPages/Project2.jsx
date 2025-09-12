import '../styles/ProjectStyles/Project2.css'
import { Link } from 'react-router-dom';
import B1 from '../assets/Bureau/B1-1.jpg';
import B2 from '../assets/Bureau/B1-2.jpg';
import B3 from '../assets/Bureau/B2-1.jpg';
import B4 from '../assets/Bureau/B2-2.jpg';
import B5 from '../assets/Bureau/B3-1.jpg';
import B6 from '../assets/Bureau/B3-2.jpg';


export default function Project2() {

    const proj1Data = [
        {id:1, img:B1},
        {id:2, img:B2},
    ];

    const proj2Data = [
        {id:1, img:B3},
        {id:2, img:B4},
    ];

    const proj3Data = [
        {id:1, img:B5},
        {id:2, img:B6},
    ];
    return(
        <section className='proj2_main'>

            <div className='proj2_cont'>
                <Link to="/Work">
                <h1 className='proj2_title'>Rénovation d'un bureau d'une société, situé à Cocody</h1>
                </Link> 
                <div className='proj2_box'>
                    {proj1Data.map((pro1) =>(
                        <div className='proj2_box_img' key={pro1.id}>
                            <img src={pro1.img} alt="Project2" className='proj2_img'/>
                        </div>
                    ))}
                </div>
                <div className='proj2_box'>
                    {proj2Data.map((pro2) =>(
                        <div className='proj2_box_img' key={pro2.id}>
                            <img src={pro2.img} alt="Project2" className='proj2_img'/>
                        </div>
                    ))}
                </div>
                <div className='proj2_box'>
                    {proj3Data.map((pro3) =>(
                        <div className='proj2_box_img' key={pro3.id}>
                            <img src={pro3.img} alt="Project2" className='proj2_img'/>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}