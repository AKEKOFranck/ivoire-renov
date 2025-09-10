import '../styles/pagesWorksStyles/Build1.css';
import { Link } from 'react-router-dom';
import pic1 from '../assets/Maison2Plateau/VILLA1-1.jpg';
import pic2 from '../assets/Maison2Plateau/VILLA1-2.jpg';
import pic3 from '../assets/Maison2Plateau/VILLA2-1.jpg';
import pic4 from '../assets/Maison2Plateau/VILLA2-2.jpg';
import pic5 from '../assets/Maison2Plateau/VILLA3-1.jpg';
import pic6 from '../assets/Maison2Plateau/VILLA3-2.jpg';



export default function Build1() {
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
    ]
    return(
        <section className='box_main'>
           
            <div className='box_info'>
                <Link to="/Work">
                <p className='box_title'> Rénovation d'une villa , situé au 2 plateaux </p>
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