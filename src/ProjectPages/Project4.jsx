import '../styles/ProjectStyles/Project4.css'
import { Link } from 'react-router-dom';
import O1 from '../assets/Autres/O1-1.jpg';
import O2 from '../assets/Autres/O1-2.jpg';
import O3 from '../assets/Autres/O2-1.jpg';
import O4 from '../assets/Autres/O2-2.jpg';
import O5 from '../assets/Autres/O3-1.jpg';
import O6 from '../assets/Autres/O3-2.jpg';
import O7 from '../assets/Autres/O4-1.jpg';
import O8 from '../assets/Autres/O4-2.jpg';
import O9 from '../assets/MaisonGolf/VILL1-1.jpg';
import O10 from '../assets/MaisonGolf/VILL1-2.jpg';



export default function Project4() {

    const proj1Data = [
        {id:4, img:O1, title: "Rénovation et aménagement séjour d’une villa"},
        {id:5, img:O2},
    ];

    const proj2Data = [
        {id:4, img:O3, title: " rénovation d’un magasin 8 Eme tranche"},
        {id:5, img:O4},
    ];

    const proj3Data = [
        {id:4, img:O5, title: "Décoration plafond et peinture d’un restaurant à la 7eme tranche"},
        {id:5, img:O6},
    ];

    const proj4Data = [
        {id:4, img:O7, title: "Projet construction magasin Angré"},
        {id:5, img:O8},
    ];

    const proj5Data = [
        {id:4, img:O9, title: "rénovation vielle villa Riviera golf"},
        {id:5, img:O10},
    ];
    return(
        <section className='proj4_main'>

            <div className='proj4_cont'>
                <Link to="/Work">
                <h1 className='proj4_title'>Rénovations et Aménagements intérieurs</h1>
                </Link> 
                <div className='proj4_box'>
                    {proj1Data.map((pro1) =>(
                        <div className='proj4_box_img' key={pro1.id}>
                            <img src={pro1.img} alt="Project4" className='proj4_img'/>
                            <div className='proj4_box_title'>{pro1.title}</div>
                        </div>
                    ))}
                </div>
                <div className='proj4_box'>
                    {proj2Data.map((pro2) =>(
                        <div className='proj4_box_img' key={pro2.id}>
                            <img src={pro2.img} alt="Project4" className='proj4_img'/>
                            <div className='proj4_box_title'>{pro2.title}</div>
                        </div>
                    ))}
                </div>
                <div className='proj4_box'>
                    {proj3Data.map((pro3) =>(
                        <div className='proj4_box_img' key={pro3.id}>
                            <img src={pro3.img} alt="Project4" className='proj4_img'/>
                            <div className='proj4_box_title'>{pro3.title}</div>
                        </div>
                    ))}
                </div>
                 <div className='proj4_box'>
                    {proj4Data.map((pro4) =>(
                        <div className='proj4_box_img' key={pro4.id}>
                            <img src={pro4.img} alt="Project4" className='proj4_img'/>
                            <div className='proj4_box_title'>{pro4.title}</div>
                        </div>
                    ))}
                </div>
                 <div className='proj4_box'>
                    {proj5Data.map((pro5) =>(
                        <div className='proj4_box_img' key={pro5.id}>
                            <img src={pro5.img} alt="Project4" className='proj4_img'/>
                            <div className='proj4_box_title'>{pro5.title}</div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}