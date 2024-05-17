import styles from "./styles.module.css"
const PatientList = () => {
  return (
    <div className={styles.container}>
      <div>
      <div>
        <h4>First Name:</h4>
        <input />
      </div>
      <div>
        <h4>Last Name:</h4>
      </div>
      <div>
        <h4>Username:</h4>
        <input />
      </div>
      <div>
        <h4>Password:</h4>
        <input />
      </div>
      <div>
        <h4>Selector doctor:</h4>
        <select>
          <option value="doctor 1">doctor 1</option>
          <option value="doctor 2">doctor 2</option>
          <option value="doctor 3">doctor 3</option>
        </select>
      </div>
      <button>Submit</button>
    </div>
    </div>
    
  );
};
export default PatientList;
