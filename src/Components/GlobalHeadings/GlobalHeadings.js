import React from 'react'

const GlobalHeadings = (props) => {
    return (
        <div>
            <h1 style={{ fontSize: props.fontSize, fontWeight: props.fontWeight }}>{props?.title}</h1>
            <p style={{ fontSize: props.fontSize, fontWeight: props.fontWeight }}>{props?.Pages}</p>
        </div>
    )
}

export default GlobalHeadings