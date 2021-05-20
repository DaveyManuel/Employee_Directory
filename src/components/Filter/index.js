import React from 'react';

function Filter(props) {

    return (
        <div className="row">
            <div className="col">
            <select className="form-select" onChange={(e)=>props.handleSortBy(e)} value={props.dropdown}>
                    <option defaultValue>Sort By:</option>
                    <option value="age" >Age</option>
                    <option value="first" >First Name</option>
                    <option value="last" >Last Name</option>
                </select>
            </div>
            <div className="col">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search First or Last Name" aria-label="Example text with button addon" aria-describedby="button-addon1" value={props.search} onChange={props.handleInputChange} />
                </div>
            </div>
        </div>
    )
}

export default Filter;