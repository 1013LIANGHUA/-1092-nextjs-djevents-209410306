import styles from './Card.module.scss'

export default function Card({evt}) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.card__body}>
                <img src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" className={styles.card__image} />
                <h2 className={styles.card__title}>The Everyday Salad</h2>
                <p className={styles.card__description}>Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!</p>
                </div>
                <button className={styles.card__btn}>View Recipe</button>
            </div>

            <div className={styles.card}>
                <div className={styles.card__body}>
                <img src="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" className={styles.card__image} />
                <h2 className={styles.card__title}>Simple Risotto</h2>
                <p className={styles.card__description}>Fear Risotto no more! This simple recipe is perfect for family dinners.</p>
                </div>
                <button className={styles.card__btn}>View Recipe</button>
            </div>

            <div className={styles.card}>
                <div className={styles.card__body}>
                <img src="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" className={styles.card__image} />
                <h2 className={styles.card__title}>Baked Cod with Vegetables</h2>
                <p className={styles.card__description}>Baked Cod with Vegetables. 30 minute meal!</p>
                </div>
                <button className={styles.card__btn}>View Recipe</button>
            </div>
        </div>
    )
}
