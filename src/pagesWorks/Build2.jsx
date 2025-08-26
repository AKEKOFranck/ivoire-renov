import '../styles/pagesWorksStyles/Build2.css'
import pic1 from '../assets/F1.png';


export default function Build2() {
    const picData1 = [
        {id:1, image:pic1},
        {id:2, image:pic1},
    ]

      const picData2 = [
        {id:1, image:pic1},
        {id:2, image:pic1},
    ]
    return(
        <section className='box_main'>
            <img className='box_img' src={pic1} alt='photo'></img>
            <div className='box_info'>
                <p>Nom </p>
                <p>lieu</p>
                <p>superficie</p>
                <p>Description du projet </p>
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
        </section>
    )
}