// app/components/RecipeCard.tsx
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center"
    }}>
      <div style={{ fontSize: "3rem" }}>{recipe.emoji}</div>
      <h3>{recipe.title}</h3>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "8px" }}>
        <span>⏱ {recipe.minutes} min</span>
        <span>{recipe.difficulty}</span>
        <span>{recipe.cuisine}</span>
      </div>
    </div>
  );
}