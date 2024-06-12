import styles from "./page.module.css";

export default function FlexBoxPage() {

  const testText = <h1>Hola mundo</h1>;

  return (
    <main>
      {testText}
      <section className={styles.flexContainer}>
        <div className={`${styles.column} ${styles.box} ${styles.box1}`}>Column 1</div>
        <div className={`${styles.column} ${styles.box} ${styles.box2}`}>Column 2</div>
        <div className={`${styles.column} ${styles.box} ${styles.box3}`}>Column 3</div>
        <div className={`${styles.column} ${styles.box} ${styles.box1}`}>Column 1</div>
        <div className={`${styles.column} ${styles.box} ${styles.box2}`}>Column 2</div>
        <div className={`${styles.column} ${styles.box} ${styles.box3}`}>Column 3</div>
        <div className={`${styles.column} ${styles.box} ${styles.box1}`}>Column 1</div>
        <div className={`${styles.column} ${styles.box} ${styles.box2}`}>Column 2</div>
        <div className={`${styles.column} ${styles.box} ${styles.box3}`}>Column 3</div>
      </section>
    </main>
  )
}