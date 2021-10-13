import React from 'react'

function NamesListTwo() {
    const names=["Uday","Kumar","Polu"]
    //only when looping through list, we use key.
    const nameList=names.map((name,index) => <h2 key={index}>{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NamesListTwo
