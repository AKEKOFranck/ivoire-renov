import '../styles/Work.css';
import pic1 from '../assets/Maison2Plateau/VILLA1-2.jpg';
import pic2 from '../assets/Bureau/B1-2.jpg';
import pic3 from '../assets/VillaBasse/PE1-2.jpg';

import pic4 from '../assets/Autres/O1-2.jpg';
import pic5 from '../assets/Autres/O2-2.jpg';
import pic6 from '../assets/Autres/O3-2.jpg';

import pic7 from '../assets/Autres/O4-2.jpg';
import pic8 from '../assets/MaisonGolf/VILL1-2.jpg';


import { Link } from 'react-router-dom';

export default function Work() {

    const infoData1 = [
        {id:1, image:pic1,  details: <Link  className='work_link'  to='/Project1'> Découvrez </Link>},
        {id:2, image:pic2,  details: <Link  className='work_link' to='/Project2'> Découvrez </Link>},
    ];

     const infoData2 = [
        {id:1, image:pic3,  details: <Link  className='work_link' to='/Project3'> Découvrez </Link>},
        {id:2, image:pic4,  details: <Link  className='work_link' to='/Project4'> Découvrez </Link>},
    ];

     const infoData3 = [
        {id:1, image:pic5,  details: <Link  className='work_link' to='/Project4'> Découvrez </Link>},
        {id:2, image:pic6,  details: <Link  className='work_link' to='/Project4'> Découvrez </Link>},
    ];

     const infoData4 = [
        {id:1, image:pic7,  details: <Link  className='work_link' to='/Project4'> Découvrez </Link>},
        {id:2, image:pic8,  details: <Link  className='work_link' to='/Project4'> Découvrez </Link>},
    ];


   return(
      <section className='work_main'>
        <div className='work_cont'>
            <div className='work_container'>
                {infoData1.map((d1) =>(
                    <div className='work_box' key={d1.id}>
                        <img className='work_img'  src={d1.image} alt='poste'></img>
                        <button className='work_bt' type='button'>{d1.details}</button>
                    </div>
                ))}
            </div>

            <div className='work_container'>
                  {infoData2.map((d2) =>(
                    <div className='work_box' key={d2.id}>
                        <img className='work_img'  src={d2.image} alt='poste'></img>
                        <button className='work_bt' type='button'>{d2.details}</button>
                    </div>
                ))}
            </div>

            <div className='work_container' id='work3_container2'>
                 {infoData3.map((d3) =>(
                    <div className='work_box' key={d3.id}>
                        <img className='work_img'  src={d3.image} alt='poste'></img>
                        <button className='work_bt' type='button'>{d3.details}</button>
                    </div>
                ))}
            </div>

             <div className='work_container' id='work3_container2'>
                 {infoData4.map((d4) =>(
                    <div className='work_box' key={d4.id}>
                        <img className='work_img'  src={d4.image} alt='poste'></img>
                        <button className='work_bt' type='button'>{d4.details}</button>
                    </div>
                ))}
            </div>

            

           
        </div>
      </section>
   )
}