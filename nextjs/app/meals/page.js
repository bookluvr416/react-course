import { Suspense } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the meals shared by our vibrant community.',
};

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Delicious Meals, created <span className={styles.highlight}>by you.</span></h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={styles.cta}><Link href="/meals/share">Share Your Favorite Recipe</Link></p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Fetching meals.</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
