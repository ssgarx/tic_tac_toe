import React from 'react'

function Cell(props) {
    return <div className="cell" id={props.id + 1}></div>
}

export default Cell
