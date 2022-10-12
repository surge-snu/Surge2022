import "./gallery.scss";

export default function Gallery() {
  return (
    <div className="Gallery">
      <section className="Gallery__main--topbar">
        <p className="Gallery__main--topbar__title">SCENE IN THE GAME</p>
        {/* <p className="Gallery__main--topbar__content">
					Lorem Epsime rafdrw e kdsd fdosm Lorem Epsime rafdrw e kdsd fdosm{" "}
				</p> */}
      </section>
      <section className="Gallery__main--images">
        <div className="Gallery__main--images__img">
          <img alt="Image 1" loading="lazy" src="/Img/image1.png" />
        </div>
        <div className="Gallery__main--images__img">
          <img alt="Image 1" loading="lazy" src="/Img/image2.png" />
        </div>
        <div className="Gallery__main--images__img">
          <img alt="Image 1" loading="lazy" src="/Img/image3.png" />
        </div>
        <div className="Gallery__main--images__img">
          <img alt="Image 1" loading="lazy" src="/Img/image4.png" />
        </div>
      </section>
      <section className="Gallery__main--bottom">
        <div className="Gallery__main--bottom__explore">Explore Gallery</div>
        <div className="Gallery__main--bottom__arrow">
          <img alt="Image 1" loading="lazy" src="/Img/arrow.png" />
        </div>
      </section>
    </div>
  );
}
