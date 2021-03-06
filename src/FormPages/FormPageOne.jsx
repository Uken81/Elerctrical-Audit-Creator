import React, { useEffect } from 'react';
import RadioAlterations from './RadioButtons/RadioAlterations';
import RadioStatus from './RadioButtons/RadioStatus';


const FormPageOne = (props) => {
    const displayForm = props.displayForm;

    const selectedOption = props.selectedOption;
    const handleOptionChange = props.handleOptionChange;
    useEffect(() => {
        const hideForm = () => {
            let form = document.getElementById('customerForm');
            let submitButton = document.getElementById('submitButton');
            displayForm ? form.style.display = '' : form.style.display = 'none';
            displayForm ? submitButton.style.display = '' : submitButton.style.display = 'none';
        }
        hideForm();
    }, [displayForm]);

    return (
        <div className="page1">
            <form id="customerForm" >
                <label htmlFor="referenceNUmber"><strong>Reference No: </strong></label>
                <input type="tel" className="input-field" id="referenceNumber" name="referenceNumber" data-tags="Reference No" data-section="a" /><br /><br />
                <span>A. CUSTOMER DETAILS</span>
                <fieldset>
                    <legend>Customer Information</legend>
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="input-field" id="name" name="name" data-tags="Customer" data-section="a" /><br /><br />
                    <RadioStatus
                        selectedOption={selectedOption}
                        handleOptionChange={handleOptionChange}
                    />
                    <label htmlFor="address">Address:</label>
                    <input type="text" className="input-field" id="address" name="address" data-tags="Address" data-section="a" /><br /><br />
                    <label htmlFor="home-phone">Home Phone:</label>
                    <input type="tel" className="input-field" id="hphone" name="hphone" data-tags="Home Phone" data-section="a" /><br /><br />
                    <label htmlFor="mobile-phone">Mobile:</label>
                    <input type="tel" className="input-field" id="mphone" name="mphone" data-tags="Mobile Phone" data-section="a" /><br /><br />
                </fieldset>
                <span>B. ADDRESS OF THE INSTALLATION TO BE AUDITED</span>
                <fieldset>
                    <legend>Address To Audit</legend>
                    <label htmlFor="install-address">Address:</label>
                    <input type="text" className="input-field" id="install-address" name="install-address" data-tags="Audit Address" data-section="b" /><br /><br />
                    <label htmlFor="age-of-installation">Estimated age of the electrical installation (years):</label>
                    <input type="number" className="input-field" id="age-of-installation" name="age-of-installation" min="1" data-tags="Estimated age of the electrical installation (years)" data-section="b" /><br /><br />
                    <RadioAlterations
                        selectedOption={selectedOption}
                        handleOptionChange={handleOptionChange}
                    />
                    <label htmlFor="previous-audit">Date of previous Audit: (if any): </label>
                    <input type="date" className="input-field" id="previous-audit" name="previous-audit" data-tags="Date of previous Audit (if any) " data-section="b" /><br /><br />
                </fieldset>
                {/* <fieldset>
                <span>C. PURPOSE OF THE REPORT</span><br /><br />
                <label htmlFor="purpose">Purpose for which this report is requested:</label><br />
                <textarea cols="35" rows="5" className="input-field" id="purpose"
                    name="purpose-of-report"></textarea><br /><br />
                <span>D. EXTENT OF THE INSTALLATION AND LIMITATIONS OF THE INSPECTION AND TESTING</span><br /><br />
                <label htmlFor="extent">Extent of the electrical installation and agreed limitations, if any, on the inspection and testing:</label><br /> 
                <textarea cols="35" rows="8" className="input-field" id="purpose" name="purpose-of-report"></textarea>
            </fieldset>     */}

            </form>
        </div>
    );
}

export default FormPageOne;