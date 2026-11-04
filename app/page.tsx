// app/page.tsx
import RecipeCard from "./components/recipecard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Find your next bite.</h1>
      
      {/* Responsive CSS Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
        gap: "1.5rem",
        marginTop: "1.5rem"
      }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}