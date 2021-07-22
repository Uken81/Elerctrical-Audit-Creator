import { useEffect, useState } from 'react';

const Output = (props) => {
    const entries = props.entries;
    // let [filterA, setFilterA] = useState();
    // let [filterB, setFilterB] = useState();
    const [sectionA, setSectionA] = useState([]);
    const [sectionB, setSectionB] = useState([]);

    // const sectionA = props.sectionA;

    function test() {
        console.log();
    }

    useEffect(()=> {
    
        const createSection = () => {
                  let filterA = entries.filter(entry => entry[1].section === 'a');
                  let filterB = entries.filter(entry => entry[1].section === 'b');
                  console.log('filterA: ' +  filterA);
                  console.log('filterB: ' +  filterB);
                  setSectionA(()=> filterA);
                  setSectionB(()=> filterB)
          }
        createSection();
        console.log('createSections');
        },[entries]);

    return (
        <div>
             <h1>ELECTRICAL INSTALLATION AUDIT – REPORT</h1>
            <div className="section-a">
                <h2>A. CUSTOMER DETAILS</h2>
                {sectionA && sectionA.map((element, key) => {
                    return (
                        <div key={`a-${key}`}>
                            <p className={element[1].section} ><strong>{element[1].title}:</strong> {element[1].value}</p>
                        </div>
                    )
                })}
                <div className="section-b">
                <h2>B. ADDRESS OF THE INSTALLATION TO BE AUDITED</h2>
                {sectionB && sectionB.map((element, key) => {

                    return (
                        <div key={`b-${key}`}>
                            <p className={element[1].section} key={key}><strong>{element[1].title}:</strong> {element[1].value}</p>
                        </div>
                    )
                })}
            </div>
            </div>
            <button onClick={test}>test</button>
        </div>
    )
};

export default Output;