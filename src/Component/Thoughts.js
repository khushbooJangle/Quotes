import React from 'react';

const divstyle={
    background: '#363062',
    textAlign:'center',
    border: 'double black 2px',
    borderRadius: '40px',
    margin: '15px',
    boxShadow:'0px 3px 8px 0px',
    color:'#ffbcbc',
    width: '90%',
    position: 'relative',
    display: 'inline-block',
}
const pstyles={
    fontSize: '30px'
}
function  Thoughts (props) {
    return (
        <div style={divstyle}>
            <p style={pstyles}><q>{props.statements}</q></p>
            <h2 style={{color:'#d8b9c3'}}>{props.names}</h2>
        </div>
    )
    
}
export default Thoughts;