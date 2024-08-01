
const IngredientList = (props) => {
    return (
    <ul>
      {props.ingredients.map((ingredient) => {
        return (
          <>
           <li style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={()=>props.addToBurger(ingredient)} type='submit'>+</button>
            </li>
          </>
        )
      })}
    </ul>);
  };
  
  export default IngredientList;
  