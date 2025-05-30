import "./Headline.css";
export default function Headline({ imageURL }) {
  return (
    <div className="headline">
      <img src={imageURL} alt="Web 3 illustration" className="big-img" />

      <div className="headline-content">
        <h1>The Bright Future of Web 3.0?</h1>
        <div className="headline-text">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="btn-read-more">READ MORE</button>
        </div>
      </div>
    </div>
  );
}
