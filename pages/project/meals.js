import styles from '../../styles/meal.module.css'
//import meals from './meals-data';
import Head from 'next/head';
import { useState } from 'react'

export default function meals() {
   const [input, setInput] = useState('')
   const [meals, setMeal] = useState([])

   const handleInput = (e) => {
        setInput(e.target.value)
   }


   console.log(input)

   const handleSubmit = (e) => {
      e.preventDefault()
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then(res => res.json())
      .catch(error => console.error('Error',error))
      .then(res => {
        console.log(res);
        setMeal(res.meals);
      })
   }

  return (
    <div>
 <Head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 <title>Meals</title>
 </Head>
 <div className={styles.container}>
 <h1 className={styles.title__main}>Meal Finder</h1>
 <div className={styles['flex-box']}>
 <form id="submit" className={styles.flex_box}>
 <input type="text" value={input} placeholder="Search for meals or keywords" className={styles.input} onChange={handleInput}/>
 <button className={styles.btn__search} type="submit" onClick={handleSubmit}>
 {/* <FontAwesomeIcon icon={faSearch} /> */}
 <i className="fas fa-search"></i>
 </button>
 </form>
 <button className={styles.btn__random} id="random">
 {/* <FontAwesomeIcon icon={faRandom} /> */}
 <i className='fas fa-random'></i>
 </button>
 </div>
 <div id="result_heading" className={styles.title__search}><h1>Search Results for ' {input} ' :</h1></div>
 <div id="meals" className={styles.gallery}>
 {meals.map((meals) => (
 <Meal key={meals.idMeal} title={meals.strMeal} image={meals.strMealThumb}/>
 ))}
 </div>
 </div>
 </div>
  )
}


function Meal({id, image, title}) {
  return (
  
  <div className={styles['gallery-card']}>
  <img className={styles['gallery-card__img']} src={image} alt={title} />
  <div className={styles['gallery-card__details']} data_mealid={id}> 
  <h2>{title}</h2>
  </div>
  </div>
  
  )
 }
