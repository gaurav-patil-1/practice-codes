import "./App.css";
import DogImages from "./components/HOC_Pattern/Example1/DogImages";
import ClassComponent from "./components/HooksPattern/ClassComponent";
// import HooksPattern from "./components/HooksPattern/HooksPattern";
// import InputComponent from "./components/CustomHook/InputComponent";
// import CustomHook2 from "./components/CustomHook2/CustomHook2";
// import DogImages1 from "./components/HOC_Pattern/Example2/DogImages1";
// import DogImages3 from "./components/HOC_Pattern/Example3/DogImages3";
import DogImages4 from "./components/HOC_Pattern/Example4/DogImages4";

function App() {
  return (
    <div>
      <p>Hello World</p>
      <ClassComponent />
      {/* <HooksPattern /> */}
      {/* <CustomHook2 /> */}
      {/* <InputComponent /> */}
      <h1>Browse Dog Images</h1>
      {/* <DogImages /> */}
      {/* <DogImages1 name="Gaurav" /> */}
      {/* <DogImages3 /> */}
      <DogImages4 />
    </div>
  );
}

export default App;
