import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onNewCategory = (newCategory) => {
    const existe = categories.some(
      (c) => c.toLowerCase() === newCategory.toLowerCase()
    );
    if (existe) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>App de gifs</h1>
      <AddCategory onNewCategory={onNewCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;