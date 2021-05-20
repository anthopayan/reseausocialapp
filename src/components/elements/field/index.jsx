import React from "react";


const Field = (props) => {
    return <div className="form-group">
        <label htmlFor={props.name}></label>
        <input type="text" value={props.value} onChange={props.onChange} id={props.name} name={props.name} placeholder={props.placeholder}/>
    </div>
}

export default Field;