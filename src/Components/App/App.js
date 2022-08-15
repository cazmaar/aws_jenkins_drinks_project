// import logo from './logo.svg';
import { useState } from "react";
import DrinkModal from "../Modal";
import DisplayList from "../DisplayList";
import InputField from "../Input";
import "./App.css";
import HomeHeader from "../HomeHeader";

function App() {
  // React hooks used in this component
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(0)

// sets the data fetched to a state
  function handleData(fetched) {
    setData(fetched);
  }

  // sets the modee and the key for the modal to be displayed.
  function showModal(mode, key) {
    setModal(mode);
    setId(key)
  }

  return (
    <div data-testid="mainApp" className="App">
    <HomeHeader/>
      <InputField handleData={handleData} />
      <DisplayList data={data} showModal={showModal} />
      <DrinkModal modal={modal} showModal={showModal} data={data} id={id}/>
    </div>
  );
}

export default App;
