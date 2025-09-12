import '../styles/ProjectStyles/Project1.css'
import { Link } from 'react-router-dom';
import V1 from '../assets/Maison2Plateau/VILLA1-1.jpg';
import V2 from '../assets/Maison2Plateau/VILLA1-2.jpg';
import V3 from '../assets/Maison2Plateau/VILLA2-1.jpg';
import V4 from '../assets/Maison2Plateau/VILLA2-2.jpg';
import V5 from '../assets/Maison2Plateau/VILLA3-1.jpg';
import V6 from '../assets/Maison2Plateau/VILLA3-2.jpg';


export default function Project1() {

    const proj1Data = [
        {id:1, img:V1},
        {id:2, img:V2},
    ];

    const proj2Data = [
        {id:1, img:V3},
        {id:2, img:V4},
    ];

    const proj3Data = [
        {id:1, img:V5},
        {id:2, img:V6},
    ];
    return(
        <section className='proj1_main'>

            <div className='proj1_cont'>
                <Link to="/Work">
                <h1 className='proj1_title'>Rénovation d'une villa , situé au 2 Plateaux</h1>
                </Link> 
                <div className='proj1_box'>
                    {proj1Data.map((pro1) =>(
                        <div className='proj1_box_img' key={pro1.id}>
                            <img src={pro1.img} alt="Project1" className='proj1_img'/>
                        </div>
                    ))}
                </div>
                <div className='proj1_box'>
                    {proj2Data.map((pro2) =>(
                        <div className='proj1_box_img' key={pro2.id}>
                            <img src={pro2.img} alt="Project1" className='proj1_img'/>
                        </div>
                    ))}
                </div>
                <div className='proj1_box'>
                    {proj3Data.map((pro3) =>(
                        <div className='proj1_box_img' key={pro3.id}>
                            <img src={pro3.img} alt="Project1" className='proj1_img'/>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}