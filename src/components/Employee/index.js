import React from 'react';

function Employee(props) {
    return(
        <div className="col-3">
        <div className="card-header">
            Card Header here
        <div className="img-container">
          <img alt={props.name} src="https://i.pinimg.com/564x/f0/3a/34/f03a349219e07c262f961a9afefb9a66.jpg" height="200" width="200"/>
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
          </ul>
        </div>
        </div>

        </div>
  
    );
}

export default Employee;