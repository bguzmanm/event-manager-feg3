import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

export default function CategoryList() {
  const { categories } = useContext(CategoryContext);

  return (
    <div>
      <h3>Categorías</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}
