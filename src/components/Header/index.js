import React from 'react';

function Header(props){

return <h1 className="text-center fs-1 text-success bg-dark mb-3">{props.children}</h1>
}

export default Header;