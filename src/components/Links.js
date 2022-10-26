import React from 'react'

function Links(props) {
    return (
        <a 
            href={props.url} 
            id={props.id} 
            className="btn__link"
            target="_blank">{props.title}</a>
    )
}

export default Links