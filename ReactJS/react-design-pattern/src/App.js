import "./App.css";
import CompoundPattern from "./components/CompoundPattern/CompoundPattern";
import DogImages from "./components/HOC_Pattern/Example1/DogImages";
import ClassComponent from "./components/HooksPattern/ClassComponent";
import HooksPattern from "./components/HooksPattern/HooksPattern";
import InputComponent from "./components/CustomHook/InputComponent";
import CustomHook2 from "./components/CustomHook2/CustomHook2";
import DogImages1 from "./components/HOC_Pattern/Example2/DogImages1";
import DogImages3 from "./components/HOC_Pattern/Example3/DogImages3";
import DogImages4 from "./components/HOC_Pattern/Example4/DogImages4";
import Title1 from "./components/RenderPropsPattren/Example1/Title1";
import Title2 from "./components/RenderPropsPattren/Example2/Title2";
import ImageList from "./components/CompoundPattern/Example1/Images";
import RadioButton from "./components/CompoundPattern/RadioButton/RadioButton";
import PaymentMethod from "./components/CompoundPattern/RadioButton2/PaymentMethod";
import ImageList2 from "./components/CompoundPattern/Example2/Images2";
import TeamSelection from "./components/CompoundPattern/RadioButton3/TeamSelection";
function App() {
  return (
    <div>
      <p>Hello World</p>
      {/* <ClassComponent /> */}
      {/* <HooksPattern /> */}
      {/* <CustomHook2 /> */}
      {/* <InputComponent /> */}
      {/* <h1>Browse Dog Images</h1> */}
      {/* <DogImages /> */}
      {/* <DogImages1 name="Gaurav" /> */}
      {/* <DogImages3 /> */}
      {/* <DogImages4 /> */}
      {/* <Title1
        render={() => {
          return <h1>I'm a render Prop</h1>;
        }}
      />
      <Title1
        render={() => {
          return <h1>Hello World</h1>;
        }}
      />
      <Title1
        render={() => {
          return <h1>Catchpoint India</h1>;
        }}
      />
      <Title2
        renderFirstComponent={() => <h1>✨ First render prop! ✨</h1>}
        renderSecondComponent={() => <h2>🔥 Second render prop! 🔥</h2>}
        renderThirdComponent={() => <h3>🚀 Third render prop! 🚀</h3>}
      /> */}
      {/* <CompoundPattern /> */}
      {/* <ImageList /> */}
      {/* <RadioButton /> */}
      {/* <PaymentMethod /> */}
      {/* <ImageList2 /> */}
      <TeamSelection />
    </div>
  );
}

export default App;
