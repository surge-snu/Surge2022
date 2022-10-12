import "./blogs.scss";

export default function Blogs() {
  const articles = [
    {
      title: "The Chess Brain: Do Chess Grandmasters Go Crazy?",
      link: "https://chesspulse.com/the-chess-brain-do-chess-grandmasters-go-crazy/",
      image: "https://chesspulse.com/wp-content/uploads/2020/11/24.jpg",
    },
  ];

  return (
    <div className="Blogs">
      <div className="Blogs__title">
        <h1>Blogs</h1>
        <h3>More than just a 3-day fest</h3>
      </div>
      <div className="Blogs__container">
        {articles.map((article, i) => (
          <a
            className="Blogs__blogCard"
            href={article.link}
            target="_blank"
            key={i}
          >
            <img
              alt={article.title}
              src={article.image}
              className="Blogs__blogCard__image"
              fit="cover"
              width={400}
              height={200}
            />
            <p>{article.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
