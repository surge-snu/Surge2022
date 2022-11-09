import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Sponsors.scss";

export async function getServerSideProps(context) {
	let spons = require.context("../public/Img/Sponsors");
	let pastSpons = require.context("../public/Img/Spons");
	return {
		props: {
			currentPath: context.req.url,
			spons: spons.keys().map((item, index) => item.replace("./", "")),
			pastSpons: pastSpons.keys().map((item, index) => item.replace("./", "")),
		},
	};
}

export default function Sponsors(props) {
	return (
		<div className="SponsorsPage__container">
			<section className="SponsorsPage__section">
				<h2 className="SponsorsPage__section--header">Sponsors</h2>
				<div className="SponsorsPage__section--sponsContainer">
					{props.spons.map((item, index) => {
						return (
							<div className="SponsorsPage__section--spons" key={index}>
								<img
									src={`/Img/sponsors/${item}`}
									alt="sponsor"
									objectFit="contain"
									className="widthFill"
								/>
							</div>
						);
					})}
				</div>
				<h2 className="SponsorsPage__section--header">Past Sponsors</h2>
				<div className="SponsorsPage__section--sponsContainer">
					{props.pastSpons.map((item, index) => {
						return (
							<div className="SponsorsPage__section--spons" key={index}>
								<img
									src={`/Img/Spons/${item}`}
									alt="sponsor"
									objectFit="contain"
									className="widthFill"
								/>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}

Sponsors.getLayout = function getLayout(page) {
	return (
		<div className="SponsorsPage">
			<Header currentPath="sponsors" />
			{page}
			<Footer />
		</div>
	);
};
