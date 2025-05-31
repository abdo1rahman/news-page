import "./Headline.css";
import { useEffect, useState } from "react";
export default function Headline() {
  const [imageSrc, setImageSrc] = useState(
    "/assets/images/image-web-3-desktop.jpg"
  );

  const updateImageSource = () => {
    if (window.innerWidth <= 738) {
      setImageSrc("/assets/images/image-web-3-mobile.jpg");
    } else {
      setImageSrc("/assets/images/image-web-3-desktop.jpg");
    }
  };

  useEffect(() => {
    updateImageSource(); // run on mount
    window.addEventListener("resize", updateImageSource);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateImageSource);
    };
  }, []);

  return (
    <div className="headline">
      <img src={imageSrc} alt="Web 3 illustration" className="big-img" />

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
