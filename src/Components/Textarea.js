import React from 'react'

const Textarea = (props) => {
    return (
                <textarea                         
                name={props.name}
                placeholder={props.placeholder}
                value={props.value} 
                onChange={props.onChange} 
                onBlur={props.onBlur} 
                cols={props.cols} 
                rows={props.rows} 
                >
                </textarea>
            )
};

export default Textarea
