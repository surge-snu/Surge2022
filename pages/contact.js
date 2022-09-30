import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Contact.scss";

export default function Contact() {
	const contact = [
		{
			"image": "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"name": "Santhosh",
			"position": "Web Development Lead",
		},
		{
			"image": "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"name": "Santhosh",
			"position": "Web Development Lead",
		},
		{
			"image": "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"name": "Santhosh",
			"position": "Web Development Lead",
		},
		{
			"image": "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"name": "Santhosh",
			"position": "Web Development Lead",
		}
	];
	return (
		<div className="ContactPage__container">
			<div className="ContactPage__container--top">
				<h1 className="ContactPage__title">
					GET IN <span>TOUCH</span> WITH US<br /> FOR <span>MORE</span> INFORMATION
				</h1>
				<p className="ContactPage__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
			<div className="ContactPage__tabs">
				<div className="ContactPage__tab ContactPage__tab--active">
					CORE
				</div>
				<div className="ContactPage__tab ContactPage__tab--inactive">
					POC
				</div>
			</div>
			<div className="ContactPage__contacts">
				{contact.map((item, index) => (
					<div className="ContactPage__card" key={index}>
						<div className="ContactPage__card--top">
							<img src={item['image']} />
							<div className="ContactPage__cardDetails">
								<h3 className="ContactPage__cardDetails--name">{item['name']}</h3>
								<p className="ContactPage__cardDetails--position">{item['position']}</p>
							</div>
						</div>
						<div className="ContactPage__card--bottom">
							<div className="ContactPage__cardButton ContactPage__cardButton--green">
								<p>Place a call</p>
								<img
									src="/Img/arrow-right black.svg"
									width={20}
									height={20}
								/>
							</div>
							<div className="ContactPage__cardButton">
								<p>Mail</p>
								<img
									src="/Img/arrow-right.svg"
									width={20}
									height={20}
								/>
							</div>
						</div>
					</div>
				))}
			</div>

		</div>
	);
}

Contact.getLayout = function getLayout(page) {
  return (
    <div className="ContactPage">
      <Header currentPath={page.props.currentPath} />
      {page}
      <Footer />
    </div>
  );
};