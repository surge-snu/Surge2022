import "./Footer.scss";

export default function Footer() {
	return (
		<div className="FooterWrapper" id="contact">
			<div className="FooterWrapper__container">
				<div className="FooterWrapper__left">
					<p className="FooterWrapper__left--logo"> Surge</p>
					<p className="FooterWrapper__left--copyrightUnderLogo">
						© 2022 Surge. Alll Rights Reserved
					</p>
				</div>

				<div className="FooterWrapper__right">
					<ul className="FooterWrapper__right--Service">
						<li className="FooterWrapper__right--rowHeading">Pages</li>
						<li>
							<a className="FooterWrapper__right--rowItem" href="/#">
								Home
							</a>
						</li>
						<li>
							<a className="FooterWrapper__right--rowItem" href="/team">
								Team
							</a>
						</li>
						<li>
							<a className="FooterWrapper__right--rowItem" href="/gallery">
								Gallery
							</a>
						</li>
						<li>
							<a className="FooterWrapper__right--rowItem" href="/events">
								Events
							</a>
						</li>
					</ul>
					<ul className="FooterWrapper__right--Service">
						<li className="FooterWrapper__right--rowHeading">Services</li>
						<li>
							<a className="FooterWrapper__right--rowItem" href="/#">
								Content
							</a>
						</li>
						<li>
							<a className="FooterWrapper__right--rowItem" href="/#">
								Content
							</a>
						</li>
						<li>
							<a className="FooterWrapper__right--rowItem" href="/#">
								Content
							</a>
						</li>
						<li>
							<a className="FooterWrapper__right--rowItem" href="/#">
								Content
							</a>
						</li>
					</ul>
					<ul className="FooterWrapper__right--Service">
						<li className="FooterWrapper__right--rowHeading">Contacts</li>
						<li className="FooterWrapper__right--RowIcon">
							<img loading="lazy" className="FooterWrapper__right--rowImage" src="/Img/mail.svg" />
							<a className="FooterWrapper__right--rowItem" href="mailto:">
								snusurge@gmai.com
							</a>
						</li>
						<li className="FooterWrapper__right--RowIcon">
							<img loading="lazy" className="FooterWrapper__right--rowImage" src="/Img/phone.svg" />
							<a className="FooterWrapper__right--rowItem" href="tel:">
								9999999999
							</a>
						</li>
						<li className="FooterWrapper__right--RowIcon">
							<img loading="lazy" className="FooterWrapper__right--rowImage" src="/Img/map.svg" />
							<a
								className="FooterWrapper__right--rowItem"
								href="https://www.linkedin.com/snu.xplore/"
							>
								Delhi, Noida
							</a>
						</li>
					</ul>

					<ul className="FooterWrapper__right--Service">
						<li className="FooterWrapper__right--rowHeading">Social Media</li>
						<li className="FooterWrapper__right--RowIcon">
							<img loading="lazy"
								className="FooterWrapper__right--RowIcon"
								src="/Img/instagram.svg"
							/>
							<a className="FooterWrapper__right--rowItem" href="#">
								Instagram
							</a>
						</li>
						<li className="FooterWrapper__right--RowIcon">
							<img loading="lazy"
								className="FooterWrapper__right--RowIcon"
								src="/Img/linkedin.svg"
							/>
							<a className="FooterWrapper__right--rowItem" href="#">
								LinkedIn
							</a>
						</li>
						<li className="FooterWrapper__right--RowIcon">
							<img loading="lazy"
								className="FooterWrapper__right--RowIcon"
								src="/Img/facebook.svg"
							/>
							<a
								className="FooterWrapper__right--rowItem"
								href="https://www.linkedin.com/snu.xplore/"
							>
								Facebook
							</a>
						</li>
					</ul>
				</div>
			</div>
			<p className="FooterWrapper__left--Copyright">surgesnu copyright @2022</p>
		</div>
	);
}
