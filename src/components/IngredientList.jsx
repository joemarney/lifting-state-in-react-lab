import Ingredient from "./Ingredient";

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => {
        return (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            <Ingredient ingredient={ingredient} />
            <button onClick={() => props.addToBurger(ingredient)}>+</button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
