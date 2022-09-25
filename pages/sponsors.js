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
  return <div className="SponsorsPage__container">Sponsors</div>;
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
