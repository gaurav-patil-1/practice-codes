const Title2 = (props) => {
  return (
    <>
      {props.renderFirstComponent()}
      {props.renderSecondComponent()}
      {props.renderThirdComponent()}
    </>
  );
};

export default Title2;
