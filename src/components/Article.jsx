import "./Article.css";

export default function Article({ num, imageURL, title, subtitle }) {
  return (
    <article className="article">
      {num && <span className="article-number">0{num}</span>}
      {imageURL && <img src={imageURL} alt={title} className="article-image" />}
      <h2 className="article-title">{title}</h2>
      <p className="article-subtitle">{subtitle}</p>
    </article>
  );
}
