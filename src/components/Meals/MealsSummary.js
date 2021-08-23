import React from "react";

import classes from "./MealsSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food !</h2>
      <p>Choose your favorite meal</p>
      <p>Meals cooke just-in-time</p>
    </section>
  );
};

export default MealSummary;
