import { useNavigate } from "react-router-dom";
import "./models.scss";
// Redirecionar para Models/?
const Models = () => {
  // useNavigate retorna métodos para redirecionar o usuário p outra página

  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (target.dataset.id) {
      navigate(
        `/models/${target.dataset.id}?name=${target.dataset.name}&image=${target.dataset.image}`
      );
    }
  };
  return (
    <section id="models-section">
      <h2>Models</h2>

      <div className="models">
        <div
          className="model-item"
          data-id="1"
          data-name="718"
          data-image="718.webp"
          onClick={handleClick}
        >
          <h3>718</h3>
        </div>
        <div
          className="model-item"
          data-id="2"
          data-name="Cayenne"
          data-image="Cayenne.webp"
          onClick={handleClick}
        >
          <h3>Cayenne</h3>
        </div>
        <div
          className="model-item"
          data-id="3"
          data-name="E-Performance"
          data-image="E-Performance.webp"
          onClick={handleClick}
        >
          <h3>E-Performance</h3>
        </div>
        <div
          className="model-item"
          data-id="4"
          data-name="Macan"
          data-image="Macan.webp"
          onClick={handleClick}
        >
          <h3>Macan</h3>
        </div>
        <div
          className="model-item"
          data-id="5"
          data-name="Panamera"
          data-image="Panamera.webp"
          onClick={handleClick}
        >
          <h3>Panamera</h3>
        </div>
        <div
          className="model-item"
          data-id="6"
          data-name="Taycan"
          data-image="Taycan.webp"
          onClick={handleClick}
        >
          <h3>Taycan</h3>
        </div>
      </div>
    </section>
  );
};

export default Models;
