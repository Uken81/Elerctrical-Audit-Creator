const Output = (props) => {
    const sectionA = props.sectionA;

    function test() {
        console.log(sectionA);
    }

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
            </div>
            <button onClick={test}>test</button>
        </div>
    )
};

export default Output;