import styles from '../../styles/meal.module.css';
import meals from '../meals-data'
export default function MealsPage() {
    // console.log('meals', meals);
    return (
<div>
<section className={styles.meals_container}>
<div className={styles.meal}>

<div id="meals" className="meals">
        <div className="meal">
          <img
            src="https://www.themealdb.com/images/media/meals/1529446137.jpg"
            alt="Egg Drop Soup"
          />
          <div className="meal-info" data-mealid="52955">
            <h3>Egg Drop Soup</h3>
          </div>
        </div>

        <div className="meal">
          <img
            src="https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg"
            alt="Tuna and Egg Briks"
          />
          <div className="meal-info" data-mealid="52975">
            <h3>Tuna and Egg Briks</h3>
          </div>
        </div>

        <div className="meal">
          <img
            src="https://www.themealdb.com/images/media/meals/1550440197.jpg"
            alt="Salmon Eggs Eggs Benedict"
          />
          <div className="meal-info" data-mealid="52962">
            <h3>Salmon Eggs Eggs Benedict</h3>
          </div>
        </div>

        <div className="meal">
          <img
            src="https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg"
            alt="Roasted Eggplant With Tahini, Pine Nuts, and Lentils"
          />
          <div className="meal-info" data-mealid="52816">
            <h3>Roasted Eggplant With Tahini, Pine Nuts, and Lentils</h3>
          </div>
        </div>

        <div className="meal">
          <img
            src="https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg"
            alt="Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt"
          />
          <div className="meal-info" data-mealid="52817">
            <h3>Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt</h3>
          </div>
        </div>
      </div>
      <div id="single-meal"></div>  
      
      </div>
      </section>
      </div>
      
    );
}
