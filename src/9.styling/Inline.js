import React from 'react'
//React will not support hyphens
//Advice not to write like this,always use css file seperately
const heading={
    fontSize:'72px',
    color:"blue"
}
function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline Styling</h1>
        </div>
    )
}

export default Inline
