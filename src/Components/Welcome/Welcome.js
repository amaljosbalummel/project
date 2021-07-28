/* eslint-disable */
import React from "react";
import classes from "./Welcome.module.css";
import Cards from'./Cards';
import image from "../assets/_Social_media_strategy_jpg_nLvbqTk4.jpg";
const Welcome = () => {
  return (
    <main>
      <div className={classes.fill}>
        <img src={image} alt="phone"></img>
        <div className={classes.text}>
          <h1>CREATE POSTS</h1>
        </div>
      </div>
      <div>
        <div className={classes.cards}>
          <Cards/>
        </div>
      </div>
    </main>
  );
};
export default Welcome;
