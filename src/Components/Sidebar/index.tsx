import Button from "../Button";
import styles from "./styles.module.css"

const SideBar = ()=>{
    return(
        <div className={styles.container}>
          <div className={styles.wrap}>
         <Button size="LARGE" variant="DEFAULT">Create Patients</Button>
         </div>
         <div className={styles.wrap}>
          <Button size = "LARGE" variant="DEFAULT">Search for Patients</Button>
         </div>
        </div>
    )
}

export default SideBar;