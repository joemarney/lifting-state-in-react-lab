import Ingredient from "./Ingredient";

const BurgerStack = (props) => {
  return (
    <ul>
      <p>{props.stack.length <= 0 ? "No Ingredients" : null}</p>
      {props.stack.map((ingredient, index) => {
        return (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            <Ingredient ingredient={ingredient} />
            <button onClick={() => props.removeFromBurger(index)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
