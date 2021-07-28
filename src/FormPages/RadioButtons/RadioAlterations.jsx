const RadioAlterations = (props) => {
    const selectedOption = props.selectedOption;
    let handleOptionChange = props.handleOptionChange;

    return (
        <fieldset>
            <span>Evidence of alterations or additions:</span>
            <label htmlFor="alterations-additions-yes">Yes: </label>
            <input
                type="radio"
                className="input-field"
                id="alterations-additions-yes"
                name="is-altered"
                value="YES"
                checked={selectedOption === 'YES'}
                onChange={handleOptionChange}
                data-tags="Evidence of alterations or additions"
                data-section="b"
            />
            <label htmlFor="alterations-additions-no">No: </label>
            <input
                type="radio"
                className="input-field"
                id="alterations-additions-no"
                name="is-altered"
                value="NO"
                checked={selectedOption === 'NO'}
                onChange={handleOptionChange}
                data-tags="Evidence of alterations or additions"
                data-section="b"
            />
            <label htmlFor="alterations-additions-na">NA: </label>
            <input
                type="radio"
                className="input-field"
                id="alterations-additions-na"
                name="is-altered"
                value="NA"
                checked={selectedOption === 'NA'}
                onChange={handleOptionChange}
                data-tags="Evidence of alterations or additions"
                data-section="b"
            />
            <br /><br />
            <p
                type='text'
                className="input-field"
                id='radio-answer'
                data-tags="Evidence of alterations or additions"
                data-section="b"
                data-value={selectedOption}               
                />
            <label htmlFor="alteration-age">Estimated age (years): </label>
            <input type="number" className="input-field" id="alteration-age" name="alteration-age" min="1" data-tags="estimated age (years) " data-section="b" /><br /><br />
        </fieldset>
    )
}

export default RadioAlterations;