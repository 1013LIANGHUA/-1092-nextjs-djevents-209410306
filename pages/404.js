import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';
export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h2>sorry, there is nothing here</h2>
        <Link href='/'>Go Back Home</Link>
      </div>
    </Layout>
  );
}
