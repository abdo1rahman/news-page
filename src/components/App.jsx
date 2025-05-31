import "./App.css";
import Navbar from "./Navbar.jsx";
import Headline from "./Headline.jsx";
import Article from "./Article.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Headline />

        <div className="articles">
          <h2 className="new">New</h2>
          <Article
            title="Hydrogen VS Electric Cars"
            subtitle="Will hydrogen-fueled cars ever catch up to EVs?"
          />
          <hr
            style={{
              border: "0.001px solid var(--dark-gray)",
              alignSelf: "center",
              width: "95%",
              margin: "1rem",
            }}
          />

          <Article
            title="The Downsides of AI Artistry"
            subtitle="What are the possible adverse effects of on-demand AI image generation?"
          />
          <hr
            style={{
              border: "0.001px solid var(--dark-gray)",
              alignSelf: "center",
              width: "95%",
              margin: "1rem",
            }}
          />

          <Article
            title="Is VC Funding Drying Up?"
            subtitle="Private funding by VC firms is down 50% YOY. We take a look at what that means."
          />
        </div>

        <div className="featured">
          <Article
            num={1}
            imageURL="/assets/images/image-retro-pcs.jpg"
            title="Reviving Retro PCs"
            subtitle="What happens when old PCs are given modern upgrades?"
          />
          <Article
            num={2}
            imageURL="/assets/images/image-top-laptops.jpg"
            title="Top 10 Laptops of 2022"
            subtitle="Our best picks for various needs and budgets."
          />
          <Article
            num={3}
            imageURL="/assets/images/image-gaming-growth.jpg"
            title="The Growth of Gaming"
            subtitle="How the pandemic has sparked fresh opportunities."
          />
        </div>
      </div>
    </div>
  );
}
