import styles from '/styles/Orbs.module.scss';

export default function Orbs() {
  const files = {};

  return (
    <>
      <main className={styles.Orbs}>
        <div className={styles['Orbs-wrapper']}>
          <div className={styles['Orbs-blob']}>
            <div className={styles['Orbs-blob-green']} />
            <div className={styles['Orbs-blob-yellow']} />
            <div className={styles['Orbs-blob-red']} />
          </div>
          <div className={styles['Orbs-spinner']}>
            <div className={styles['Orbs-spinner-child']} />
          </div>
        </div>
        <div className={`${styles['Orbs-wrapper']} dark`}>
          <div className={styles['Orbs-blob']}>
            <div className={styles['Orbs-blob-green']} />
            <div className={styles['Orbs-blob-yellow']} />
            <div className={styles['Orbs-blob-red']} />
          </div>
          <div className={styles['Orbs-spinner']}>
            <div className={styles['Orbs-spinner-child']} />
          </div>
        </div>
      </main>
    </>
  );
};
