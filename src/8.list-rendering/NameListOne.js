import React from 'react'

function NamesListOne() {
    const names=["Scott","Adam","Tuan"]
    return (
        <div>
        {
            //Key is required to differentiate same h2 tags(only while looping through list of names)
            names.map(function(name,index){
                return <h2 key={index}>{name}</h2>
            })
        }
            
        </div>
    )
}

export default NamesListOne
