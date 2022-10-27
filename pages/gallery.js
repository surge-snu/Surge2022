import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Gallery.scss";

export async function getServerSideProps(context) {
  return {
    props: {
      currentPath: context.req.url,
    },
  };
}

export default function Gallery() {
  return (
    <div className="GalleryPage__container">
      <h3>Pictures coming soon!</h3>
    </div>
  );
}

Gallery.getLayout = function getLayout(page) {
  return (
    <div className="GalleryPage">
      <Header currentPath={page.props.currentPath} />
      {page}
      <Footer />
    </div>
  );
};
