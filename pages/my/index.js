import "../../styles/routes/My/MyIndex.scss";

export async function getServerSideProps(context) {
  console.log(context.req.session.user === undefined);

  if (context.req.session.user === undefined) {
    return {
      props: { user: null },
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: "/my/home",
    },
  };
}

export default function MyIndex() {
  return (
    <main className="MyIndex">
      <div className="MyIndex__container">
        <h1>Surge</h1>
        <h2> You have to login to see your data!</h2>
        <a href="#login" className="route--active">
          Login
        </a>
      </div>
    </main>
  );
}
