import styles from "./styles.module.css"

const SideBar = ()=>{
    return(
        <div className={styles.container}>
          <div className={styles.wrap}>
         <h4 className={styles.text}>Create Patients</h4>
         </div>
         <div className={styles.wrap}>
            <h4 className={styles.text}>Search for Patients</h4>
         </div>
        </div>
    )
}

export default SideBar;