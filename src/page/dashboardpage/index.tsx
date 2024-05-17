import Header from "../../Components/Header";
import PatientList from "../../Components/PatientList";
import SideBar from "../../Components/Sidebar";
import styles from "./styles.module.css";

const DashBoardPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrap}>
      <SideBar />
      <PatientList />
      </div>
    </div>
  );
};

export default DashBoardPage;
