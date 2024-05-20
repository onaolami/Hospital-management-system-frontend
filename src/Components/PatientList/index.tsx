import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.css";
const PatientList = () => {
  return (
    <div className={styles.container}>
      <h3>Create Patients</h3>
      <div>
        <div className={styles.flex}>
          <h4>First Name:</h4>
         <Input />
        </div>
        <div className={styles.flex}>
          <h4>Last Name:</h4>
          <Input />
        </div>
        <div className={styles.flex}>
          <h4>Username:</h4>
          <Input />
        </div>
        <div className={styles.flex}>
          <h4>Password:</h4>
          <Input/>
        </div>
        <div className={styles.dropdown}>
          <h4>Select doctor:</h4>
          <select className={styles.select}>
            <option value="Select...">Select...</option>
            <option value="doctor 1">Doctor 1</option>
            <option value="doctor 2">Doctor 2</option>
            <option value="doctor 3">Doctor 3</option>
          </select>
        </div>
        <div className={styles.class}> 
        <Button size="SMALL" variant="PRIMARY">Submit</Button>
        </div>
      </div>
    </div>
  );
};
export default PatientList;
