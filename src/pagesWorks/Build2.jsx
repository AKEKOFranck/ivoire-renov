import '../styles/pagesWorksStyles/Build2.css'
import { Link } from 'react-router-dom';
import pic1 from '../assets/Bureau/B1-2.jpg';
import pic2 from '../assets/Bureau/B1-1.jpg';
import pic3 from '../assets/Bureau/B2-1.jpg';
import pic4 from '../assets/Bureau/B2-2.jpg';
import pic5 from '../assets/Bureau/B3-1.jpg';
import pic6 from '../assets/Bureau/B3-2.jpg';




export default function Build2() {
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
    return(
        <section className='box_main'>
           
            <div className='box_info'>
                <Link to="/Work">
                <p className='box_title'>  Rénovation d'un bureau d'une société, situé à Cocody </p>
                </Link>    
            </div>
            <div className='box_cont'>
                {picData1.map((pic1) =>(
                    <div className='box_box' key={pic1.id}>
                        <img className='img_box' src={pic1.image} alt='photo'></img>
                    </div>
                ))}
            </div>
            <div className='box_cont'>
                 {picData2.map((pic2) =>(
                    <div className='box_box' key={pic2.id}>
                        <img className='img_box' src={pic2.image} alt='photo'></img>
                    </div>
                ))}
            </div>
            <div className='box_cont'>
                 {picData3.map((pic3) =>(
                    <div className='box_box' key={pic3.id}>
                        <img className='img_box' src={pic3.image} alt='photo'></img>
                    </div>
                ))}
            </div>
        </section>
    )
}