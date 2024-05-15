import styles from "./styles.module.css";

const LoginPage = () => {
  return (
    <div>
      <img src = "/Images/Group.png" alt=""/>
      <div className={styles.wrapper}>
        <input placeholder="Username" />
        <input placeholder="Password" />
      </div>

      <button>Login</button>
    </div>
  );
};

export default LoginPage;
