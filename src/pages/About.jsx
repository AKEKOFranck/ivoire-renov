import '../styles/About.css';
import pic1 from '../assets/F4.png';
import picWorld from '../assets/worldF.png';
import { FaUserTie } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




export default  function About() {
    return(
        <section className='about_main'>
            <div className='about_container'>
                <div className='about_cont' id='about_text'>
                    <h4 className='about_text'> <p className='about_title'>Notre Histoire</p>

                        Créée à Abidjan, l'agence Ivoire Rénov a été fondée sur une conviction simple : l'architecture doit être un dialogue harmonieux entre le modernisme et l'héritage culturel ivoirien.

Spécialiste de la rénovation, de la réhabilitation et de la construction neuve, notre entreprise s'est bâtie une solide réputation en redonnant leur lustre d'antan à des villas, des immeubles et des espaces commerciaux, tout en les équipant des standards contemporains de confort, de durabilité et d'efficacité énergétique.

Notre histoire est marquée par des réalisations qui honorent l'identité unique de chaque projet. Nous maîtrisons l'art de travailler avec les contraintes existantes pour en faire des atouts, transformant l'ancien en une valeur ajoutée unique.

Aujourd'hui, Ivoire Rénov est synonyme d'expertise, de créativité et de savoir-faire local, contribuant activement à façonner le visage architectural d'Abidjan pour le 21ème siècle.



                    </h4>
                </div>
                 <div className='about_cont' id='about_boss'>
                    <FaUserTie className='about_icon' />

                     <h4 className='about_text_boss'>
                        Diplômée en architecture de [Nom de l'Université/École], Madame X a toujours porté un regard passionné sur le paysage urbain d'Abidjan. Forte d'une expérience de [Nombre] années dans le domaine, elle a constaté le potentiel immense de valorisation du bâti existant, souvent négligé au profit de constructions neuves sans identité.

C'est de ce constat qu'est née sa vision : créer une agence spécialisée dans la rénovation de qualité, alliant respect du patrimoine, innovation technique et design contemporain. En [Année de création], elle donne ainsi vie à Ivoire Rénov.

Son approche est hands-on et minutieuse. Madame X supervise personnellement chaque étape clé, de l'esquisse conceptuelle à la livraison finale, veillant à ce que chaque projet raconte une histoire et réponde aux besoins précis de ses occupants.

Plus qu'une chef d'entreprise, Madame X est une passeuse de culture qui croit en une architecture ancrée dans son territoire, généreuse et durable. Son leadership inspire au quotidien toute l'équipe d'Ivoire Rénov pour dessiner le visage d'une Abidjan modernisée et authentique.
                     </h4>
                </div>
                 <div className='about_cont' id='about_place'>
                    <div className='about_place_info'>
                        <img className='about_img' src={pic1} alt='siègePhoto'></img>
                        <h5 className='about_place_text'>
                            <a href='https://maps.app.goo.gl/DV9hbfiNAbjb6f9k8'  className='about_place_text'> 
                            <FaArrowRight />
                               Notre siège à Abidjan Cocody 
                             <FaArrowLeft />
                             </a>
                        </h5>
                    </div>
                    <div className='about_place_info'>
                         <img className='about_img' src={picWorld} alt='siègePhoto'></img>
                        <h5 className='about_place_text'>
                               Rencontrez nous dans toute la Côte d'Ivoire
                        </h5>
                    </div>
                </div>
                
            </div>
        </section>
    )
}