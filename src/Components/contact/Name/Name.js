/* eslint-disable */
import React,{useState,useEffect} from 'react';
import {Form,Input} from'antd';

const regEx = /\d/;
const Name= (props)=> {
    const [name, setName] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [nameTouched, setNameTouched] = useState(false);
    
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

     //whenever the user takes the focus out from the input field validation occurs
     const nameBlur = (event) => {
        setNameTouched(true);
        const nameBlurValue = event.target.value;
        const test = regEx.test(nameBlurValue);
        if (nameBlurValue.trim() === "" || test) {
          setNameIsValid(false);
        }else{
            setNameIsValid(true);
        }
     };

     useEffect(() => {
           if(nameIsValid){
            const forwardingName={name,nameTouched}
            props.onEnterName(forwardingName);
           }
     }, [nameIsValid,nameTouched]);
    

return (
    <>
      <Form.Item label="Name" >
        <Input
          type="text"
          value={name}
          name="name"
          onChange={nameChangeHandler}
          onBlur={nameBlur}
         />

         {!nameIsValid && nameTouched && (
         <p style={{ color: "red" }}>Enter a valid name</p>
         )}
      </Form.Item>
    </>
  )
}
export default Name;