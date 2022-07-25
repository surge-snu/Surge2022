import Image from "next/image";
import '../../styles/routes/gallery.scss'
import Image1 from '../../public/assets/images/image1.png';
import Image2 from '../../public/assets/images/image2.png';
import Image3 from '../../public/assets/images/image3.png';
import Image4 from '../../public/assets/images/image4.png';
import Arrow from '../../public/assets/images/arrow.png';

export default function Gallery() {
    return (
        <div className="Gallery">
            <section className='Gallery__main--topbar'>
                <p className='Gallery__main--topbar__title'>SCENE IN THE GAME</p>
                <p className='Gallery__main--topbar__content'>Lorem Epsime rafdrw e kdsd fdosm Lorem Epsime rafdrw e kdsd fdosm </p>
            </section>
            <section className="Gallery__main--images">
                <div className="Gallery__main--images__img">
                    <Image src={Image1}/>
                </div>
                <div className="Gallery__main--images__img">
                    <Image src={Image2}/>
                </div>
                <div className="Gallery__main--images__img">
                    <Image src={Image3}/>
                </div>
                <div className="Gallery__main--images__img">
                    <Image src={Image4}/>
                </div>
            </section>
            <section className="Gallery__main--bottom">
                <div className="Gallery__main--bottom__explore">Explore Gallery</div>
                <div className="Gallery__main--bottom__arrow">
                    <Image src={Arrow}/>
                </div>
            </section>
        </div>
    )
}


