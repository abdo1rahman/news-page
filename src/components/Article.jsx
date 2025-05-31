import "./Article.css";

export default function Article({ num, imageURL, title, subtitle }) {
  return (
    <article className={imageURL ? "featured-article" : "article"}>
      {imageURL && <img src={imageURL} alt={title} className="article-image" />}
      <div>
        {num && <span className="article-number">0{num}</span>}
        <h2 className={imageURL ? "featured-title" : "article-title"}>
          {title}
        </h2>
        <p className={imageURL ? "featured-subtitle" : "article-subtitle"}>
          {subtitle}
        </p>
      </div>
    </article>
  );
}
