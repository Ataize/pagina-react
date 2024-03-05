import "./model.scss";
import { useParams, useSearchParams } from "react-router-dom";

const Model = () => {
  const params = useParams();
  const [query] = useSearchParams();
  const modelName = query.get("name");
  const modelImage = query.get("image");
  return (
    // Esse && faz a função de um if
    <section id="model">
      <h2>
        {modelName && modelName} {params.modelId && `ID ${params.modelId}`}
      </h2>

      <img
        src={require(`../../assets/images/${modelImage && modelImage}`)}
        alt={modelName! && modelName}
      />
    </section>
  );
};
export default Model;
