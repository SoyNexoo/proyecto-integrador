import React, { useState } from "react";
import Validation from "./validation";
import s from "./form.module.css";
export default function Form(props) {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    setErrors(Validation({ ...userData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={s.container}>
      <form className={s.form}>
        <div>
          <label className={s.label}>Email:</label>
          <input
            className={s.input}
            type="text"
            name="email"
            value={userData.email}
            placeholder="Your Email!"
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label className={s.label}>Password:</label>
          <input
            className={s.input}
            type="password"
            name="password"
            value={userData.password}
            placeholder="Your password!"
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className={s.button} type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
