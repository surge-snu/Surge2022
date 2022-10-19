import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Gallery.scss";

export async function getServerSideProps(context) {
	let images = require.context("../public/Gallery");
  return {
    props: {
			currentPath: context.req.url,
			images: images.keys().map((item, index) => item.replace("./", "")),
    },
	};
}

export default function Gallery(props) {
	console.log(props.images);
  return (
    <div className="GalleryPage__container">
      <div className="GalleryPage__container">
				<p className="GalleryPage__heading">
					MEET THE{" "}
					<span className="GalleryPage__heading--green">
						TEAM
						<br /> BEHIND
					</span>{" "}
					THE MAGIC
				</p>
				<div className="GalleryPage__grid">
					{props.images.map((image, index) => (
						<div className="GalleryPage__imageContainer">
							<img
								key={image}
								className="GalleryPage__image"
								src={`/Gallery/${image}`}
								alt="Gallery"
								loading="lazy"
							/>
							<p>
								{image.split(".")[0]}
							</p>
						</div>
					))}
				</div>
			</div>
    </div>
  );
}

Gallery.getLayout = function getLayout(page) {
  return (
    <div className="GalleryPage">
      <Header currentPath="gallery" />
      {page}
      <Footer />
    </div>
  );
};
