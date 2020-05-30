import React from 'react';

function Contacts(props) {
    return (
        <tr>
        <td><img src={props.picture} /></td>
        <td>{props.name}</td>
        <td>{props.popularity} <button onClick={()=>props.deleteHandler(props.id)}>Delete</button></td>
        
        </tr>
        
    )
}

export default Contacts;