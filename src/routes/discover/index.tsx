import "./discover.scss";
import image1 from "../../assets/images/discover-1.avif";
import image2 from "../../assets/images/discover-2.avif";
import image3 from "../../assets/images/discover-3.avif";
import image4 from "../../assets/images/discover-4.avif";

const Discover = () => {
  return (
    <section id="discover">
      <h2>Descubra</h2>
      <div className="discover-container">
        <div className="discover-item">
          <img src={image1} alt="Imagem Porch" />
          <h3>Porsh Exclusive Manufacktur</h3>
        </div>
        <div className="discover-item">
          <img src={image2} alt="Imagem Porch" />
          <h3>Porshe Finder</h3>
        </div>
        <div className="discover-item">
          <img src={image3} alt="Imagem Porch" />
          <h3>Porsh E-performance</h3>
        </div>
        <div className="discover-item">
          <img src={image4} alt="Imagem Porch" />
          <h3>Porsh Lifestyle</h3>
        </div>
      </div>
    </section>
  );
};
export default Discover;
