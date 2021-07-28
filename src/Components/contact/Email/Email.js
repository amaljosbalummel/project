/* eslint-disable */
import React,{useState,useEffect} from'react';
import {Form,Input} from'antd';

const Email=(props)=>{
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
 
  const emailChangeHandler = (event) => {
        setEmail(event.target.value);
   };
     
   const emailBlur = (event) => {
        setEmailTouched(true);
        const email = event.target.value;
        if (!email.includes("@")) {
          setEmailIsValid(false);
        }else{
            setEmailIsValid(true);
        }
    };
  
    useEffect(()=>{
      if(emailIsValid){
         const forwardingEmail={email,emailIsValid,emailTouched};
         props.onEnterEmail(forwardingEmail);
      }
    },[emailIsValid,emailTouched])

    return(
        <Form.Item label="email" >
        <Input
          type="email"
          value={email}
          name="email"
          onChange={emailChangeHandler}
          onBlur={emailBlur}
        />

        {!emailIsValid && emailTouched && (
          <p style={{ color: "red" }}>Enter a valid email</p>
        )}
      </Form.Item>
    )
}
export default Email;