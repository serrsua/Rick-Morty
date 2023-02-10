import React from "react";
import styles from "./Form.module.css";
import { validate } from "./validation";

const Form = ({login}) => {
  
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(validate(userData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Logueate para ingresar</h1>
        <label className={styles.formLabel}>Username:</label>
        <input
          placeholder="example@example.com"
          className={styles.formInput}
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <span className={styles.danger}>{errors.username}</span>

        <label className={styles.formLabel}>Password:</label>
        <input
          placeholder="example123"
          className={styles.formInput}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <span className={styles.danger}>{errors.password}</span>

        <button className={styles.formButton}>Login</button>
      </form>
    </div>
  );
};

export default Form;
