import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Team.scss";
import TeamGrid from "../Components/TeamGrid/TeamGrid";

export async function getServerSideProps(context) {
  return {
    props: {
      currentPath: context.req.url,
    },
  };
}

export default function Team() {
  return (
    <div className="TeamPage">
      <Header />
      <div className="TeamPage__content">
        <p className="TeamPage__content__heading">
          MEET THE{" "}
          <span className="TeamPage__content__heading__change">
            TEAM BEHIND
          </span>{" "}
          THE MAGIC
        </p>
        <p className="TeamPage__content__desc">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="TeamPage__content__scrollbar">
          <a className="TeamPage__content__scrollbar__element">All</a>
          <a className="TeamPage__content__scrollbar__element"> Content</a>
          <a className="TeamPage__content__scrollbar__element">Marketing</a>
          <a className="TeamPage__content__scrollbar__element">Design</a>

          <a className="TeamPage__content__scrollbar__element">
            PR & Sponsorship
          </a>
          <a className="TeamPage__content__scrollbar__element">
            Web Development
          </a>
        </div>
      </div>
      <TeamGrid />
    </div>
  );
}

// Team.getLayout = function getLayout(page) {
//   return (
//     <div className="TeamPage">
//       <Header currentPath={page.props.currentPath} />
//       {page}
//     </div>
//   );
// };
