/* eslint-disable */
import React,{useState, useEffect} from'react';
import {Form,Input} from'antd';

const Age=(props)=>{
  const [age, setAge] = useState('');
  const [ageIsValid, setAgeIsValid] = useState(false);
  const [ageTouched, setAgeTouched] = useState(false);

  const ageChangeHandler = (event) => {
    setAge(event.target.value);

  };
  
  const ageBlur = (event) => {
    setAgeTouched(true);
    const age = Number(event.target.value);
    if (age < 1 || age === "") {
      setAgeIsValid(false);
    }else{
        setAgeIsValid(true);
    }
  };

  useEffect(() => {
      if(ageIsValid){
        const forwardingAge={age,ageIsValid,ageTouched}
        props.onEnterAge(forwardingAge);
      }
  }, [ageIsValid,ageTouched]);

return(
    
    <Form.Item label="age" >
    <Input
      type="number"
      value={age}
      name="age"
      onChange={ageChangeHandler}
      onBlur={ageBlur}
    />

    {!ageIsValid && ageTouched && (
      <p style={{ color: "red" }}>Enter a valid age</p>
    )}
  </Form.Item>
 )
}
export default Age;