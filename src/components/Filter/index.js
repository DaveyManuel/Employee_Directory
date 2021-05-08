import React from 'react';

function Filter(props) {

    // for dropdown grab value from list item selected
    // look up grab value from dropdown bootstrap
    // look up array method filter JS
    // look up sort array of objects JS 
    // look at Pupster activity 23
    return (
        <div className="row">
            <div className="col">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter by:
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">First Name</a></li>
                        <li><a className="dropdown-item" href="#">Last Name</a></li>
                        <li><a className="dropdown-item" href="#">Age</a></li>
                        <li><a className="dropdown-item" href="#">City</a></li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={props.handleFormSubmit}>Search</button>
                    <input type="text" className="form-control" placeholder="First or Last name" aria-label="Example text with button addon" aria-describedby="button-addon1" value={props.search} onChange={props.handleInputChange} />
                </div>
            </div>
        </div>
    )
}

export default Filter;