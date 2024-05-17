import Iconify from "../Iconify";
import styles from "./styles.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <div className={styles.flex}>
          <img className={styles.Image} src="/Images/Group.png" alt="" />
          <div className={styles.flex2}>
            <p>Hi,Receptionist</p>
            <Iconify />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
