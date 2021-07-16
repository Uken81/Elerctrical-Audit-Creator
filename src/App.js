import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Forms from './Forms';

function App() {
  // let [keys, setKeys] = useState();
  const [keysArray, setKeysArray] = useState([]);
  const [formValuesArray, setformValuesArray] = useState([]);

  useEffect(() => {
    function createKeysArray() {
      let keys;
      keys = Array.from(document.getElementsByClassName('input-field'));
      console.log("keys: " + keys[0].dataset.tags);
      keys.forEach((entry) => {
        keysArray.push(entry.dataset.tags);
        console.log(entry.id);
        console.log(keysArray);
      });
    };
    createKeysArray();

    console.log(keysArray);
  }, [keysArray]);

 
  const createFormValuesArray = () => {
    let formValues = Array.from(document.getElementsByClassName('input-field'));
    console.log(formValues);
    formValues.forEach((function (entry) {
      setformValuesArray(formValuesArray.push(entry.value));
      

    }));
    console.log(formValuesArray);
    
    // return formValuesArray;
  };

  const handleClick = ()=> {
    console.log('hihihih');
    createFormValuesArray();
  }

  function log() {
    // createKeys();
    // createKeysArray();
  }




  return (
    <div className="App">
      <Forms />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
