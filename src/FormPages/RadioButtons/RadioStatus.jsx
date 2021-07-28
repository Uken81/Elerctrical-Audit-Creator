const RadioStatus = (props) => {
    const selectedOption = props.selectedOption;
    let handleOptionChange = props.handleOptionChange;

    return (
        <div>
            <span>Status: </span>
            <label htmlFor="status-owner">Owner: </label>
            <input
                type="radio"
                className="input-field"
                id="status-owner"
                name="owner"
                value="Owner"
                checked={selectedOption === 'Owner'}
                onChange={handleOptionChange}
                data-tags="status"
                data-section="a"
            />
            <label htmlFor="status-occupier">Occupier: </label>
            <input
                type="radio"
                className="input-field"
                id="status-occupier"
                name="occupier"
                value="occupier"
                checked={selectedOption === 'occupier'}
                onChange={handleOptionChange}
                data-tags="status"
                data-section="a"
            />
            <label htmlFor="status-purchaser">Purchaser: </label>
            <input
                type="radio"
                className="input-field"
                id="status-purchaser"
                name="is-altered"
                value="purchaser"
                checked={selectedOption === 'purchaser'}
                onChange={handleOptionChange}
                data-tags="status"
                data-section="a"
            />
            <br /><br />
            <p
                type='text'
                className="input-field"
                id='radio-answer'
                data-tags="status"
                data-section="a"
                data-value={selectedOption}               
                />
        </div>
    )
}

export default RadioStatus;