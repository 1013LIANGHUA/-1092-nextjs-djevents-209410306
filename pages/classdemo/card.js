import cards from '../../components/data/data';
import styles from '../../styles/Cards.module.scss';
export default function CardsPage() {
   console.log('cards', cards);
  return (
    <div>
      <section className={styles.card_container}>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <img src={cards[0].image} alt='' className={styles.card__image} />
            <h2 className={styles.card__title}>{cards[0].title} </h2>
            <p className={styles.card__description}>{cards[0].description}</p>
          </div>
          <button className={styles.card__btn}>View Recipe</button>
        </div>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <img src={cards[1].image} alt='' className={styles.card__image} />
            <h2 className={styles.card__title}>{cards[1].title}</h2>
            <p className={styles.card__description}>{cards[1].description}</p>
          </div>
          <button className={styles.card__btn}>View Recipe</button>
        </div>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <img src={cards[2].image} alt='' className={styles.card__image} />
            <h2 className={styles.card__title}>{cards[2].title}</h2>
            <p className={styles.card__description}>{cards[2].description}</p>
          </div>
          <button className={styles.card__btn}>View Recipe</button>
        </div>
      </section>
    </div>
  );
}
