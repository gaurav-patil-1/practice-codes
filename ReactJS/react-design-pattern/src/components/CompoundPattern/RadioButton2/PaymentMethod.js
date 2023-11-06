import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import Method from "./Method";
import Content from "./Content";

const PaymentMethod = () => {
  const [payment, setPayment] = useState("option1");
  const onPaymentChange = (method) => {
    setPayment(method);
  };
  return (
    <PaymentForm>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        <Method name="option1" payment={payment} switch={onPaymentChange}>
          Credit Card
        </Method>
        <Method name="option2" payment={payment} switch={onPaymentChange}>
          Debit Card
        </Method>
        <Method name="option3" payment={payment} switch={onPaymentChange}>
          Cash On Delivery
        </Method>
      </ul>
      <Content payment={payment} />
    </PaymentForm>
  );
};

export default PaymentMethod;
