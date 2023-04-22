import React from "react";

function RecipeList({list, setRecipes}) {
  let i = 0;
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const deleteRecipe = (n,key)=>{

    try{
      const index = list.findIndex(l=>l.name == n);
      list.splice(index,1);
      setRecipes([...list]);
      document.getElementById(key).remove();
    }catch(e){
    }
  }

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredientes</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
            list ?
        list.map(e=>{
          let key = Math.random();i++;
          return(
            <tr key={key}>
              <td className={i%2 == 0?"": "backg" } id={key}>{e.name}</td>
              <td className={i%2 == 0?"": "backg" }>{e.cuisine}</td>
              <td className={i%2 == 0?"": "backg" }><img src={e.photo} /> </td>
              <td className={i%2 == 0?"": "backg" }>{e.ingredients}</td>
              <td className={i%2 == 0?"": "backg" }>{e.preparation}</td>
              <td className={i%2 == 0?"": "backg" }><button name="delete" onClick={()=>deleteRecipe(e.name,key)}>Delete</button>
                </td>
            </tr>  
          )    
        }) : null 
        }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
