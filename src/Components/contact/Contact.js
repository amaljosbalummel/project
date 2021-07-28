/* eslint-disable */
import "antd/dist/antd.css";
import classes from "./Contact.module.css";
import React, { useState, useEffect } from "react";

import { Modal } from "antd";
import { Form, Button } from "antd";

import Name from'./Name/Name';
import Age from "./Age/Age";
import Address from'./Address/Address';
import Phone from'./Phone/Phone';
import Email from "./Email/Email";


let data={nameData:'',ageData:'',emailData:'',phoneData:[],addressData:''}

const Contact = () => {
  const [form]=Form.useForm();
  //states for checking the conditions and storing the data 
  const [formIsValid, setFormIsValid] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState([{ phone: "" }]);
  const [address, setAddress] = useState("");
  const [modal, setModal] = useState(false);

  
  const addNameValueHandler= (value)=>{
    setName(value.name);
  }

  const addAgeValueHandler= (value)=>{
    setAge(value.age);
  }
  
  const addEmailValueHandler= (value)=>{
     setEmail(value.email);
  }

  const addPhoneValueHandler=(value)=> {
    setPhone(value.phone);
  }
 
   const addAddressValueHandler= (value)=>{
     setAddress(value.address);
  }

  //on submitting
  const onFinish = (event) => {
    setFormTouched(true);
    if(name && age && email){
      if(phone && address){
        setFormIsValid(true);
      } else{
        setFormIsValid(false);
      }
    }
  };
  
  function submitData(){
     data={nameData:name,ageData:age,emailData:email,phoneData:phone,addressData:address};
      setModal(true);
      console.log(data);
      setFormIsValid(false);
      setFormTouched(false);
      form.resetFields();
  }
  
  useEffect(() => {
    if (formIsValid) {
        submitData(); 
    }
  }, [formIsValid]);

  return (
    <div>
      <div className={classes.title}>
        <h1>CONTACT</h1>
      </div>
          {/* to show the modal on successfull submission */}
          {modal && (
             <Modal visible={modal} footer={null} title="success" onCancel={()=>setModal(false)} >
                <p style={{ color: "green" }}>Form Submitted Successfully</p>
             </Modal>
          )}
      <div className={classes.form}>
        <Form
          form={form}
          onFinish={onFinish}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
        >
          <>
            <Name onEnterName={addNameValueHandler} />
            <Age onEnterAge={addAgeValueHandler} />
            <Email onEnterEmail={addEmailValueHandler}/>
            <Phone onEnterPhone={addPhoneValueHandler} />
            <Address onEnterAddress={addAddressValueHandler} />
          </>
          {!formIsValid && formTouched && (
            <p style={{ color: "red",marginLeft:"35%" }}>please Enter correct credentials</p>
          )}

          <Button
            style={{ marginLeft: "45%" }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
};
export default Contact;
