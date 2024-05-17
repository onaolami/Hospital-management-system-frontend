import styles from "./styles.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <img className={styles.Images} src="/Images/Group.png" alt="" />
        <div className={styles.wrapper}>
          <input className={styles.Input} placeholder="Username" />
          <input className={styles.Input} placeholder="Password" />
          <button className={styles.btn}>Login</button>
        </div>
      </div>
      <div className={styles.imgContain}>
        <img className={styles.Images2} src="/Images/medicine.png" alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
