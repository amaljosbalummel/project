/* eslint-disable react-hooks/exhaustive-deps */
import "antd/dist/antd.css";
import classes from "./Contact.module.css";
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { Form, Input, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const regEx = /\d/;
const { TextArea } = Input;

const Contact = () => {

  //states for checking the conditions and storing the data 
  const [formIsValid, setFormIsValid] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [age, setAge] = useState("");
  const [ageIsValid, setAgeIsValid] = useState(false);
  const [ageTouched, setAgeTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [phone, setPhone] = useState([{ phone: "" }]);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [phoneAdd, setPhoneAdd] = useState(0);
  const [address, setAddress] = useState("");
  const [addressIsValid, setAddressIsValid] = useState(false);
  const [addressTouched, setAddressTouched] = useState(false);
  const [modal, setModal] = useState(false);

  //whenever the user types in the input this function trggers
  const nameChangeHandler = (event) => {
    setName(event.target.value);
    setNameIsValid(true);
  };
 //whenever the user takes the focus out from the input field validation occurs
  const nameBlur = (event) => {
    setNameTouched(true);
    const name = event.target.value;
    const test = regEx.test(name);
    if (name.trim() === "" || test) {
      setNameIsValid(false);
    }
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    setAgeIsValid(true);
  };
  const ageBlur = (event) => {
    setAgeTouched(true);
    const age = Number(event.target.value);
    if (age < 1 || age === "") {
      setAgeIsValid(false);
    }
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setEmailIsValid(true);
  };
  const emailBlur = (event) => {
    setEmailTouched(true);
    const email = event.target.value;
    if (!email.includes("@")) {
      setEmailIsValid(false);
    }
  };

  // for adding the phone number into an array dynamically
  const phoneChangeHandler = (index, event) => {
    const value = [...phone];
    value[index][event.target.name] = event.target.value;
    setPhone(value);
    setPhoneIsValid(true);
  };

  const phoneBlur = (event) => {
    setPhoneTouched(true);
    const phone = event.target.value;
    const starts = phone.charAt(0);
    if (phone.trim().length !== 10 || starts === "0") {
      setPhoneIsValid(false);
    }
  };
//to add a phone input field on clicking the plus button
  const addPhoneHandler = () => {
    setPhone([...phone, { phone: "" }]);
    setPhoneAdd((pre) => pre + 1);
  };
  //to remove a phone input field on clicking minus button
  const removePhoneHandler = (index) => {
    const value = [...phone];
    value.splice(index, 1);
    setPhone(value);
    setPhoneAdd((prev) => prev - 1);
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
    setAddressIsValid(true);
  };
  const addressBlur = (event) => {
    setAddressTouched(true);
    const addrs = event.target.value;
    if (addrs === "") {
      setAddressIsValid(false);
    }
  };

  //on submitting
  const onFinish = (event) => {
   //setting the input fields as touched if they directly press the submit button without entering the fields
   //and to show error fields
    setNameTouched(true);
    setFormTouched(true);
    setAgeTouched(true);
    setEmailTouched(true);
    setPhoneTouched(true);
    setAddressTouched(true);

    const regex = /\d/;
    const test = regex.test(name);
    const ageInNum = Number(age);
    const emailInclude = email.includes("@");

    if (name.trim() === "" || test) {
      setNameIsValid(false);
      setFormIsValid(false);
      return;
    }
    setNameIsValid(true);

    if (ageInNum < 1) {
      setAgeIsValid(false);
      setFormIsValid(false);
      return;
    }
    setAgeIsValid(true);

    if (email.trim() === "" || !emailInclude) {
      setEmailIsValid(false);
      setFormIsValid(false);
    }
    setEmailIsValid(true);

    for (let num in phone) {
      if (phone[num].phone.length !== 10 || phone[num].phone.trim() === "") {
        setPhoneIsValid(false);
        setFormIsValid(false);
        return;
      } else {
        setPhoneIsValid(true);
      }
    }

    if (address.length === 0 || address === "") {
      setAddressIsValid(false);
      setFormIsValid(false);
    }
    setAddressIsValid(true);
    setFormIsValid(true);
   //
    
  };
  // on only submitting the form when everything is correct
  useEffect(() => {
    if (formIsValid) {
      const data = {
        person: name,
        persAge: age,
        email: email,
        phone: phone,
        address: address,
      };
      setName("");
    setAge("");
    setEmail("");
    setPhone([{ phone: "" }]);
    setAddress("");
    setModal(true);
      console.log(data);
      setFormIsValid(false);
      setFormTouched(false);
      setPhoneAdd(0);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [formIsValid]);

  return (
    <React.Fragment>
      <div className={classes.title}>
        <h1>CONTACT</h1>
      </div>
      <React.StrictMode>
        {/* to show the modal on successfull submission */}
        {modal && (
          <Modal visible={modal} footer={null} title="success" onCancel={()=>setModal(false)} >
            <p style={{ color: "green" }}>Form Submitted Successfully</p>
          </Modal>
        )}
      </React.StrictMode>

      <div className={classes.form}>
        <Form
          onFinish={onFinish}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
        >
          <Form.Item label="Name" name="name">
            <Input
              type="text"
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlur}
            />

            {!nameIsValid && nameTouched && (
              <p style={{ color: "red" }}>Enter a valid name</p>
            )}
          </Form.Item>
          <Form.Item label="age" name="age">
            <Input
              type="number"
              value={age}
              onChange={ageChangeHandler}
              onBlur={ageBlur}
            />

            {!ageIsValid && ageTouched && (
              <p style={{ color: "red" }}>Enter a valid age</p>
            )}
          </Form.Item>
          <Form.Item label="email" name="email">
            <Input
              type="email"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlur}
            />

            {!emailIsValid && emailTouched && (
              <p style={{ color: "red" }}>Enter a valid email</p>
            )}
          </Form.Item>

          {phone.map((phone, index) => (
            <Form.Item key={index} label="phone">
              <Input
                type="text"
                name="phone"
                value={phone.phone}
                onChange={(event) => phoneChangeHandler(index, event)}
                onBlur={(event) => phoneBlur(event)}
              />
              {phoneAdd < 2 && (
                <Button
                  onClick={addPhoneHandler}
                  type="primary"
                  style={{ marginTop: "1%" }}
                >
                  <PlusOutlined />
                </Button>
              )}
              {phoneAdd > 0 && (
                <Button
                  onClick={() => removePhoneHandler(index)}
                  style={{ marginLeft: "2%" }}
                >
                  <MinusOutlined />
                </Button>
              )}

              {!phoneIsValid && phoneTouched && (
                <p style={{ color: "red" }}>Enter a valid phone number</p>
              )}
            </Form.Item>
          ))}

          <Form.Item label="address" name="address">
            <TextArea
              rows={2}
              value={address}
              onChange={addressChangeHandler}
              onBlur={addressBlur}
            ></TextArea>
            {!addressIsValid && addressTouched && (
              <p style={{ color: "red" }}>Enter a valid address</p>
            )}
          </Form.Item>
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
    </React.Fragment>
  );
};
export default Contact;
