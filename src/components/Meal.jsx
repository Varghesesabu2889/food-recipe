import React, { useState } from 'react';
import Mealitem from './Mealitem';
import { MDBBtn } from 'mdb-react-ui-kit';

const Meal = () => {
  const [search, setSearch] = useState('');
  const [Mymeal, setMeal] = useState(null);

  const searchMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then(data => {
        setMeal(data.meals);
      });
  };

  return (
    
    <div className="main">
      <img src="https://img.freepik.com/free-vector/food-recipe-youtube-thumbnail_23-2148568465.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=ais" alt="" height={'550px'} width={"100%"}/>
      <div className="heading">
        <h1>Search your food Recipe</h1> <br /><br />
        <h3>
        To assist you in finding a suitable recipe, kindly specify your preferred cuisine or dish, 
        such as Italian, Mexican, vegetarian, or a specific meal like breakfast or dinner. This will 
        help tailor my recommendations to your tastes and preferences.
        </h3>
      </div>
      <div className="searchBox">
        <input
          type="search"
          placeholder="Search for recipe"
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          />
           &nbsp;&nbsp;
        <MDBBtn className='btn' rounded color='success' onClick={searchMeal}>
        Search
      </MDBBtn>
      <br /><br />
          <p style={{justifyItems:'center'}}>Example:chicken,fish,beef...etc</p>
       
      </div>
      <div className="container">
        {Mymeal === null ? (
          <p className="notFound">
            Discover the art of flavor with every dish
          </p>
        ) : (
          Mymeal.map((res) => <Mealitem data={res} key={res.idMeal} />)
        )}
      </div>
    </div>
  );
};

export default Meal;
