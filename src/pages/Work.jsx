import '../styles/Work.css';
import pic1 from '../assets/F2.png';
import pic2 from '../assets/F1.png';
import pic3 from '../assets/F3.png';
import { Link } from 'react-router-dom';

export default function Work() {

    const infoData1 = [
        {id:1, image:pic1, name:'nom',  place:'localisation', details: <Link  className='work_link'  to='/Build1'> voir plus </Link>},
        {id:2, image:pic2, name:'nom',  place:'localisation', details: <Link  className='work_link' to='/Build2'> voir plus </Link>},
        {id:3, image:pic3, name:'nom',  place:'localisation', details: <Link   className='work_link' to='/Build3'> voir plus </Link>},
    ];

     const infoData2 = [
        {id:1, image:pic2, name:'nom',  place:'localisation', details: <Link  className='work_link' to='/Build2'> voir plus </Link>},
        {id:2, image:pic1, name:'nom',  place:'localisation', details: <Link  className='work_link' to='/Build1'> voir plus </Link>},
        {id:3, image:pic3, name:'nom',  place:'localisation', details: <Link  className='work_link' to='/Build3'> voir plus </Link>},
    ];

     const infoData3 = [
        {id:1, image:pic3, name:'nom',  place:'localisation', details: <Link  className='work_link' to='/Build3'> voir plus </Link>},
        {id:2, image:pic2, name:'nom',  place:'localisation', details: <Link  className='work_link' to='/Build2'> voir plus </Link>},
        {id:3, image:pic1, name:'nom',  place:'localisation', details: <Link  className='work_link' to='/Build1'> voir plus </Link>},
    ];

     const infoData4 = [
        {id:1, image:pic2, name:'nom',  place:'localisation', details: <Link  className='work_link' to='/Build2'> voir plus </Link>},
        {id:2, image:pic3, name:'nom',  place:'localisation', details: <Link  className='work_link' to='/Build3'> voir plus </Link>},
        {id:3, image:pic1, name:'nom',  place:'localisation', details: <Link  className='work_link' to='/Build1'> voir plus </Link>},
    ];

   return(
      <section className='work_main'>
        <div className='work_cont'>
            <div className='work_container'>
                {infoData1.map((d1) =>(
                    <div className='work_box' key={d1.id}>
                        <img className='work_img'  src={d1.image} alt='poste'></img>
                        <h5 className='work_text'>
                           <p>{d1.name}</p>
                           <p>{d1.place}</p>
                           <p>{d1.details}</p>
                        </h5>
                    </div>
                ))}
            </div>

            <div className='work_container'>
                  {infoData2.map((d2) =>(
                    <div className='work_box' key={d2.id}>
                        <img className='work_img'  src={d2.image} alt='poste'></img>
                        <h5 className='work_text'>
                           <p>{d2.name}</p>
                           <p>{d2.place}</p>
                           <p>{d2.details}</p>
                        </h5>
                    </div>
                ))}
            </div>

            <div className='work_container'>
                 {infoData3.map((d3) =>(
                    <div className='work_box' key={d3.id}>
                        <img className='work_img'  src={d3.image} alt='poste'></img>
                        <h5 className='work_text'>
                           <p>{d3.name}</p>
                           <p>{d3.place}</p>
                           <p>{d3.details}</p>
                        </h5>
                    </div>
                ))}
            </div>

            <div className='work_container'>
                 {infoData4.map((d4) =>(
                    <div className='work_box' key={d4.id}>
                        <img className='work_img'  src={d4.image} alt='poste'></img>
                        <h5 className='work_text'>
                           <p>{d4.name}</p>
                           <p>{d4.place}</p>
                           <p>{d4.details}</p>
                        </h5>
                    </div>
                ))}
            </div>

           
        </div>
      </section>
   )
}