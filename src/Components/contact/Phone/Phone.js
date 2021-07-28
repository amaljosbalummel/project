/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const Phone = (props) => {
  const [phone, setPhone] = useState([{ phone:''}]);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [phoneAdd, setPhoneAdd] = useState(0);
  const [confirmPhone, setConfirmPhone] = useState(false);
 
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
    setPhone([...phone, { phone:''}]);
    setPhoneAdd((pre) => pre + 1);
  };
  //to remove a phone input field on clicking minus button
  const removePhoneHandler = (index) => {
    const value = [...phone];
    value.splice(index, 1);
    setPhone(value);
    setPhoneAdd((prev) => prev - 1);
  };

  const submitPhone = () => {
    setConfirmPhone(true);
  };

  useEffect(() => {
    if (confirmPhone && phoneIsValid) {
      const forwardPhone = { phone, phoneIsValid, phoneTouched };
      props.onEnterPhone(forwardPhone);
    }
  }, [confirmPhone, phoneIsValid,phoneTouched]);

  return (
    <>
      {phone.map((phone, index) => (
        <Form.Item key={index} label="phone">
          <Input
            type="text"
            name="phone"
            value={phone.phone}
            onChange={(event) => phoneChangeHandler(index, event)}
            onBlur={(event) => phoneBlur(event)}
          />
          {phoneAdd < 2 && !confirmPhone && (
            <Button
              onClick={addPhoneHandler}
              type="primary"
              style={{ marginTop: "1%" }}
            >
              <PlusOutlined />
            </Button>
          )}
          {phoneAdd > 0 && !confirmPhone && (
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
      <Button
        type="primary"
        style={{ marginLeft: "17%" }}
        onClick={submitPhone}
      >
        OK
      </Button>
    </>
  );
};
export default Phone;
