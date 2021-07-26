import './App.css';
import { useEffect, useState } from 'react';
import FormPageOne from './FormPages/FormPageOne';
import OutputP1 from './OutputPages/OutputP1';


function App() {
  const [keysArray] = useState([]);
  const [formValuesArray, setformValuesArray] = useState([]);
  const [sectionArray, setSectionArray] = useState([]);

  let [auditResults, setAuditResults] = useState({});
  const [entries, setEntries] = useState([]);

  const [displayForm, setdisplayForm] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    function createKeysArray() {
      let keys = Array.from(document.getElementsByClassName('input-field'));
      keys = keys.filter(entry => entry.type !== 'radio');
      keys.forEach((entry) => {
        keysArray.push(entry.dataset.tags);
      });
    };
    createKeysArray();
    console.log('createKeysArray');
    console.log(keysArray);
  }, [keysArray]);


  const createFormValuesArray = () => {
    let keys = Array.from(document.getElementsByClassName('input-field'));
    keys = keys.filter(entry => entry.type !== 'radio');
    console.log('keys: ' + keys);
    keys.forEach((entry) => {
      if (entry.id !== 'radio-answer') {
        setformValuesArray(formValuesArray.push(entry.value));
      } if (entry.id === 'radio-answer') {
        setformValuesArray(formValuesArray.push(entry.dataset.value));
      }
     
      
    });
    console.log('createFormValuesArray');
    console.log(formValuesArray);
  };

  const createSectionArray = () => {
    let keys = Array.from(document.getElementsByClassName('input-field'));
    keys = keys.filter(entry => entry.type !== 'radio');
    keys.forEach((function (entry) {
      setSectionArray(sectionArray.push(entry.dataset.section));
    }));
    console.log('createSectionArray');
    console.log(sectionArray);
  };

  const combineKeyValuesToObject = () => {
    setAuditResults(
      auditResults = keysArray.map((entry, index) => {
        return {
          title: entry,
          value: formValuesArray[index],
          section: sectionArray[index]
        }
      }));
    console.log('audit results: ' + auditResults);

  };

  let newObj;
  function createEntries() {
    newObj = Object.entries(auditResults);
    setEntries(() => newObj);
    console.log('newObj: ' + newObj);
    console.log('createEntries');
    console.log('entries: ' + entries);
  }

  const handleClick = (event) => {
    event.preventDefault();
    createFormValuesArray();
    createSectionArray();
    combineKeyValuesToObject();
    createEntries();

    setdisplayForm(false);
    console.log("entries: " + entries);
  }

  const handleOptionChange = changeEvent => {
    setSelectedOption(changeEvent.target.value);
}

  const goBackToForm = () => {
    setdisplayForm(true);
  }

  function log() {
console.log(selectedOption);
    // console.log(typeof keysArray);
    // console.log('ready: ' + ready);
  }


  return (
    <div className="App">
      <FormPageOne 
      formValuesArray={formValuesArray} 
      displayForm={displayForm} 
      setdisplayForm={setdisplayForm} 
      selectedOption={selectedOption}
      // setselectedOption={setSelectedOption}
      handleOptionChange={handleOptionChange}
      />
      {/* {!ready && <FormPageOne formValuesArray={formValuesArray} redo={redo} />} */}
      <button id='submitButton' onClick={handleClick}>Submit</button>
      {!displayForm && <button onClick={goBackToForm}>Back</button>}
      <button onClick={log}>Log</button>
      {!displayForm && <OutputP1 entries={entries} />}
    </div>
  );
}

export default App;