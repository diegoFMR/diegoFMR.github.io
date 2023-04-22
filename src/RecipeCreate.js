import React, { useState } from "react";

function RecipeCreate({list, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const onSubmit = (e)=>{
    e.preventDefault();
    setRecipes([...list, {name, cuisine,photo, ingredients, preparation}]);
    setName("");setCuisine("");setPhoto("");setIngredients("");setPreparation('');
  }

  return (
    <form name="create" onSubmit={onSubmit}>
      <table>
        <tbody>
          <tr>
   
          </tr>
        </tbody>
      </table>
      <input name="name" 
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }/> 
        <input name="cuisine"
          value={cuisine}
          onChange={(event) =>
            setCuisine(event.target.value)
          }
        />
        <input name="photo"
        value={photo}
        onChange={(event) =>
          setPhoto(event.target.value)
        }
        />
        <textarea name="ingredients"
        value={ingredients}
        onChange={(event) =>
          setIngredients(event.target.value)
        }
        />  
        <textarea name="preparation"
        value={preparation}
        onChange={(event) =>
          setPreparation(event.target.value)
        }
        />
                   
         <button type="submit" className="btn">Create</button>
    </form>
  );
}

export default RecipeCreate;
