import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Contact.scss";

export default function Contact() {
	const core = [...Array(6).keys()].fill(
		{
			"image": "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"name": "Santhosh",
			"position": "Web Development Lead",
			"phone": "1234567890",
			"email": "test"
		}, 0, 6);
	
	const poc = [...Array(9).keys()].fill(
		{
			"image": "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
			"name": "Santhosh",
			"position": "Web Development Lead",
			"phone": "1234567890",
			"email": "test",
		}, 0, 9);
			
	
	const [showCore, setShowCore] = React.useState(true);
	
	return (
		<div className="ContactPage__container">
			<div className="ContactPage__container--top">
				<h1 className="ContactPage__title">
					GET IN <span>TOUCH</span> WITH US
          <br /> FOR <span>MORE</span> INFORMATION
				</h1>
				<p className="ContactPage__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
			<div className="ContactPage__tabs">
				<button className={`ContactPage__tab ${showCore ? "ContactPage__tab--active" : ""}`}
					onClick={() => setShowCore(true)}>
					CORE
				</button>
				<button className={`ContactPage__tab ${showCore ? "" : "ContactPage__tab--active"}`}
					onClick={() => setShowCore(false)}>
					POC
				</button>
			</div>
			<div className="ContactPage__contacts">
				{(showCore ? core : poc).map((item) => (
					<div className="ContactPage__card" key={item['name']}>
						<div className="ContactPage__card--top">
							<img src={item['image']} />
							<div className="ContactPage__cardDetails">
								<h3 className="ContactPage__cardDetails--name">{item['name']}</h3>
								<p className="ContactPage__cardDetails--position">{item['position']}</p>
							</div>
						</div>
						<div className="ContactPage__card--bottom">
							<div className="ContactPage__cardButton ContactPage__cardButton--green">
								<a
									href={`tel:${item["phone"]}`}
									className="ContactPage__cardButton ContactPage__cardButton--green"
								>
									<p>{item['phone']}</p>
								</a>
								{/* <p>Place a call</p>
								<img
									src="/Img/arrow-right black.svg"
									width={20}
									height={20}
								/> */}
							</div>
							<a
                href={`mailto:${item["email"]}`}
                className="ContactPage__cardButton"
              >
								<p>Mail</p>
								<img
									src="/Img/arrow-right.svg"
									width={20}
									height={20}
								/>
							</a>
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
      <Header currentPath="contact" />
      {page}
      <Footer />
    </div>
  );
};
