import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Sponsors.scss";

export async function getServerSideProps(context) {
  return {
    props: {
      currentPath: context.req.url,
    },
  };
}

export default function Sponsors() {
  return (
    <div className="SponsorsPage__container">
      <section className="SponsorsPage__section">
        <h2 className="SponsorsPage__section--header">Past Sponsors</h2>
        <div className="SponsorsPage__section--sponsContainer">
          <div className="SponsorsPage__section--spons">
            <img src="/Img/Spons/Bingo.png" alt="sponsor" />
          </div>
          <div className="SponsorsPage__section--spons">
            <img src="/Img/Spons/CanvasLaughClub.png" alt="sponsor" />
          </div>
          <div className="SponsorsPage__section--spons">
            <img src="/Img/Spons/Cisco.png" alt="sponsor" />
          </div>
          <div className="SponsorsPage__section--spons">
            <img src="/Img/Spons/Jio.svg" alt="sponsor" />
          </div>
          <div className="SponsorsPage__section--spons">
            <img
              className="widthFill"
              src="/Img/Spons/Cognizant.svg"
              alt="sponsor"
            />
          </div>
          <div className="SponsorsPage__section--spons">
            <img src="/Img/Spons/SouledStore.png" alt="sponsor" />
          </div>
          <div className="SponsorsPage__section--spons">
            <img src="/Img/Spons/Gail.png" alt="sponsor" />
          </div>
          <div className="SponsorsPage__section--spons">
            <img src="/Img/Spons/Saavn.png" alt="sponsor" />
          </div>
          <div className="SponsorsPage__section--spons">
            <img src="/Img/Spons/CocaCola.jpg" alt="sponsor" />
          </div>
          <div className="SponsorsPage__section--spons">
            <img
              className="widthFill"
              src="/Img/Spons/Systra.svg"
              alt="sponsor"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

Sponsors.getLayout = function getLayout(page) {
  return (
    <div className="SponsorsPage">
      <Header currentPath={page.props.currentPath} />
      {page}
      <Footer />
    </div>
  );
};
