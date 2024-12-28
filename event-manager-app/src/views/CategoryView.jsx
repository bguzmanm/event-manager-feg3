import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";
import CategoryProvider from "../context/CategoryContext";

export default function CategoryView() {
  return (
    <CategoryProvider>
      <div>
        <h1>Gestión de Categorías</h1>
        <CategoryForm />
        <CategoryList />
      </div>
    </CategoryProvider>
  );
}
