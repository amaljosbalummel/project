/* eslint-disable */
import React,{useState,useEffect} from'react';
import {Input,Form}from'antd';
const {TextArea} =Input;

const Address= (props)=> {
    const [address, setAddress] = useState('');
    const [addressIsValid, setAddressIsValid] = useState(false);
    const [addressTouched, setAddressTouched] = useState(false);
    
    const addressChangeHandler = (event) => {
        setAddress(event.target.value);
    };
      
    const addressBlur = (event) => {
        setAddressTouched(true);
        const addrs = event.target.value;
        if (addrs==='' || addrs.length===0) {
          setAddressIsValid(false);
        }else{
          setAddressIsValid(true);
        }
      };

    useEffect(()=> {
        if(addressIsValid){
            const forwardingAddress={address,addressTouched};
            props.onEnterAddress(forwardingAddress);
        }
    },[addressIsValid,addressTouched]);

  return (
    <Form.Item label="address"  style={{marginTop:'1%'}}>
    <TextArea
      rows={2}
      name="address"
      value={address}
      onChange={addressChangeHandler}
      onBlur={addressBlur}
    ></TextArea>
    {!addressIsValid && addressTouched && (
      <p style={{ color: "red" }}>Enter a valid address</p>
    )}
  </Form.Item>
  ) 

}
export default Address;