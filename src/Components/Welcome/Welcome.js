/* eslint-disable */
import React from "react";
import classes from "./Welcome.module.css";
import {Card} from 'antd';


const Welcome = () => {
  return (
  <div className={classes.main}>
    <div className={classes.container}>
       <h1>Create Posts</h1>
       <p>A wonderful way to improve your gibberish is to find fake words and pronounce them so they easily roll off your tongue. All those nonsense words coming out of your mouth are now your own gibberish language.</p>
    </div>
    <div className={classes.article}>
      <div className={classes.card}>

      <Card title="Create" hoverable="true" >A wonderful way to improve your gibberish is to find fake words</Card>
      </div>
      <div className={classes.card}>
      <Card title="Post" hoverable="true" >A wonderful way to improve your gibberish is to find fake words</Card>
      </div>
      <div className={classes.card}>
      <Card title="Share" hoverable="true" >A wonderful way to improve your gibberish is to find fake words</Card> 
       </div>

    </div>
  </div>
  )
};
export default Welcome;
