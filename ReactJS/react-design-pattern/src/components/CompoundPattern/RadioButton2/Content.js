import React from "react";

const Content = (props) => {
  const paymentMethod =
    props.payment === "option1"
      ? "Credit Card"
      : props.payment === "option2"
      ? "Debit Card"
      : "Cash On Delivery";
  return <h3>Your Selected Payment Method : {paymentMethod}</h3>;
};

export default Content;
