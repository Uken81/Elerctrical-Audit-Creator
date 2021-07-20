import './App.css';
import { useEffect, useState } from 'react';
import Forms from './Forms';
import Output from './Output';

function App() {
  const [keysArray, setKeysArray] = useState([]);
  const [formValuesArray, setformValuesArray] = useState([]);
  const [sectionArray, setSectionArray] = useState([]);

  let [auditResults, setAuditResults] = useState({});
  let [entries, setEntries] = useState([]);
  

  const [sectionA, setSectionA] = useState([]);
  let [filter, setFilter] = useState();

  let [ready, setReady] = useState(false);

  useEffect(() => {
    function createKeysArray() {
      let keys = Array.from(document.getElementsByClassName('input-field'));
     
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
    console.log('keys: ' + keys);
    keys.forEach((function (entry) {
      setformValuesArray(formValuesArray.push(entry.value));
    }));
    console.log('createFormValuesArray');
    console.log(formValuesArray);
  };

  const createSectionArray = () => {
    let keys = Array.from(document.getElementsByClassName('input-field'));
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
    console.log('audit results: ' +  auditResults);
    console.log('ready: ' +  ready);
  };
let newObj;
  function createEntries() {
    newObj = Object.entries(auditResults);
    setEntries(()=> newObj);
    console.log('newObj: ' +  newObj);
    console.log('createEntries');
    console.log('entries: ' +  entries);   
  }

  useEffect(()=> {
    
  const createSectionA = () => {
            filter = entries.filter(entry => entry[1].section === 'a');
            console.log('filter: ' +  filter);
            setSectionA(()=> filter);
            
    }
  createSectionA();
  console.log('createSectionA');
  },[filter, entries]);
  
  const handleClick = () => {
    createFormValuesArray();
    createSectionArray();
    combineKeyValuesToObject();
    createEntries();
    // setTimeout(()=> setReady(true), 10);
    setReady(true);
    console.log("entries: " + entries);
  }

  function log() {
    console.log(typeof keysArray);
    console.log('filter: ' + filter);
    console.log('ready: ' + ready);
    // console.log('test: ' + sectionA[1][1].title)
    
  }


  return (
    <div className="App">
      <Forms />
      {/* {!ready && <Forms />} */}
      {/* {ready && <p>{sectionA[1][1].title}</p>} */}
      <button onClick={handleClick}>Submit</button>
      <button onClick={log}>Log</button>
     {ready && <Output entries={entries} sectionA={sectionA} />}
    </div>
  );
}

export default App;
