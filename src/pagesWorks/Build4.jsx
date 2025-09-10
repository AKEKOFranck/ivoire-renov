import '../styles/pagesWorksStyles/Build4.css';
import { Link } from 'react-router-dom';

import pic1 from '../assets/Autres/O1-1.jpg';
import pic2 from '../assets/Autres/O1-2.jpg';

import pic3 from '../assets/Autres/O2-1.jpg';
import pic4 from '../assets/Autres/O2-2.jpg';

import pic5 from '../assets/Autres/O3-1.jpg';
import pic6 from '../assets/Autres/O3-2.jpg';

import pic7 from '../assets/Autres/O4-1.jpg';
import pic8 from '../assets/Autres/O4-2.jpg';

import pic9 from '../assets/MaisonGolf/VILL1-1.jpg';
import pic10 from '../assets/MaisonGolf/VILL1-2.jpg';





export default function Build4() {
    const picData1 = [
        {id:1, image:pic1},
        {id:2, image:pic2},
    ];

      const picData2 = [
        {id:1, image:pic3},
        {id:2, image:pic4},
    ];

     const picData3 = [
        {id:1, image:pic5},
        {id:2, image:pic6},
    ];

     const picData4 = [
        {id:1, image:pic7},
        {id:2, image:pic8},
    ];

     const picData5 = [
        {id:1, image:pic9},
        {id:2, image:pic10},
    ];

    return(
        <section className='box_main'>
             <div className='box_info'>
                <Link to="/Work">
                <p className='box_title'> Rénovations et Aménagements intérieurs </p>
                </Link>    
            </div>
            <div className='box_cont'>
                {picData1.map((pic1) =>(
                    <div className='box_box' key={pic1.id}>
                        <img className='img_box' src={pic1.image} alt='photo'></img>
                    </div>
                ))}
            </div>
            <div className='box_cont' >
                 {picData2.map((pic2) =>(
                    <div className='box_box' key={pic2.id}>
                        <img className='img_box' src={pic2.image} alt='photo'></img>
                    </div>
                ))}
            </div>
            <div className='box_cont' >
                 {picData3.map((pic3) =>(
                    <div className='box_box' key={pic3.id}>
                        <img className='img_box' src={pic3.image} alt='photo'></img>
                    </div>
                ))}
            </div>
             <div className='box_cont' >
                 {picData4.map((pic4) =>(
                    <div className='box_box' key={pic4.id}>
                        <img className='img_box' src={pic4.image} alt='photo'></img>
                    </div>
                ))}
            </div>
             <div className='box_cont' >
                 {picData5.map((pic5) =>(
                    <div className='box_box' key={pic5.id}>
                        <img className='img_box' src={pic5.image} alt='photo'></img>
                    </div>
                ))}
            </div>
        </section>
    )
}
