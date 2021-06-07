import styles from '../../styles/meal.module.css'
import meals from './meals-data';
import Head from 'next/head';

export default function meal() {
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
 <input type="text" id="search" placeholder="Search for meals or keywords" className={styles.input}/>
 <button className={styles.btn__search} type="submit">
 {/* <FontAwesomeIcon icon={faSearch} /> */}
 <i className="fas fa-search"></i>
 </button>
 </form>
 <button className={styles.btn__random} id="random">
 {/* <FontAwesomeIcon icon={faRandom} /> */}
 <i className='fas fa-random'></i>
 </button>
 </div>
 <div id="result_heading" className={styles.title__search}><h1>Search Results for ' beef ' :</h1></div>
 <div id="meals" className={styles.gallery}>
 {meals.map((meals) => (
 <Meal key={meals.id} title={meals.h3} image={meals.image}/>
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
