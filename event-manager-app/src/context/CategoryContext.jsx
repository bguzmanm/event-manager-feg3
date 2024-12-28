import { createContext, useState } from "react";

export const CategoryContext = createContext();

export default function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([
    "Trabajo",
    "Personal",
    "Estudios",
    "Ocio",
  ]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <CategoryContext.Provider value={{categories, addCategory}}>
      {children}
    </CategoryContext.Provider>
  );
}
