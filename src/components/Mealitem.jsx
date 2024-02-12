import React from 'react'

const Mealitem = (getMeal) => {
    console.log(getMeal.data)
  return (
    <>
    <div className="card">
        <img src={getMeal.data.strMealThumb} alt="" />
        <div className="info">
          <center style={{fontFamily:"cursive"}}>
            <h2>{getMeal.data.strMeal}</h2>
            <p>{getMeal.data.strArea}</p>
            </center>
        </div>
        <div className="recipe">
            <h2>Recipe</h2>
            <p>{getMeal.data.StrInstructions}</p>

            <img src={getMeal.data.strMealThumb} alt="" />
            <a href={getMeal.data.strSource} className='watch'>Watch Video </a>
        </div>
    </div>
    
    </>
  )
}

export default Mealitem