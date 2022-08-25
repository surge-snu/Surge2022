import Head from "next/head";
import EventCard from '../Components/EventCard/EventCard';
import Header from '../Components/Header/Header';
import '../styles/routes/Events.scss';

export default function Events() {
	
	return (
		<>
			<Head>
        <title>Surge 2022</title>
        <meta name="description" content="Awesome website for Surge" />
        <link rel="icon" href="/Img/Sports icon.png" />
      </Head>
			<div className="EventsPage">
				<Header />
				<div class="Events">
					<div className="Events__top">
						<h1 className="Events__top--title">LOREM <span>IPSUM</span>
							<br />DOLOR SIT AMET</h1>
						<p className="Events__top--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
					</div>
					<div className="Events__mid">
						<div className="Events__mid--searchbox">
							<input type="text"
								className="Events__mid--input"
								placeholder="Try Searching Football" />
						</div>
					</div>
					<div className="Events__bottom">
						<div className="Events__bottom--title">
							<h3>Upcoming Events</h3>
						</div>
						<div className="Events__bottom--cards">
							{
								[...Array(10).keys()].map(i => (
									<EventCard />
								))
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}