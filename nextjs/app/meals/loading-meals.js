import styles from './loading-meals.module.css';

const MealsLoadingPage = () => {
  return (
    <p className={styles.loading}>Fetching meals.</p>
  );
};

export default MealsLoadingPage;
