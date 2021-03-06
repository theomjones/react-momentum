import React from "react";
import ReactDOM from "react-dom";
import ReadProgress from "../../dist/index.js";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const App = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", padding: "100px 0" }}>
    <ReadProgress height={3} duration={300}>
      <div style={{ fontFamily: "Roboto, Helvetica, sans-serif" }}>
        <h1>Momentum</h1>
        <a>Github</a>
        {arr.map(i => (
          <p
            key={i}
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.2
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et
            odio pellentesque diam volutpat commodo sed egestas. Ante in nibh
            mauris cursus mattis molestie a. Convallis posuere morbi leo urna
            molestie at elementum eu facilisis. Sed faucibus turpis in eu mi.
            Elementum sagittis vitae et leo duis ut diam quam nulla. Mauris a
            diam maecenas sed. A diam sollicitudin tempor id eu. Vitae congue eu
            consequat ac. Consectetur adipiscing elit duis tristique
            sollicitudin nibh sit amet commodo. Nibh sit amet commodo nulla
            facilisi nullam. Volutpat commodo sed egestas egestas. Eros donec ac
            odio tempor orci dapibus ultrices in. Arcu dictum varius duis at.
            Turpis cursus in hac habitasse platea. At tellus at urna condimentum
            mattis. Ac ut consequat semper viverra.
          </p>
        ))}
      </div>
    </ReadProgress>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
