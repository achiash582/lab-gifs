import GifCard from "./GifCard";
import useImages from "../hooks/useImages";

const GifGrid = ({ category }) => {
  const { images, loading } = useImages({ category });

  return (
    <div>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {images.map((image) => (
          <GifCard key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;