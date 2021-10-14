import React from 'react'
import "./styling.css"

function StyleSheet(props) {
    const {primary}=props;
    let className=primary?"primary":"error";
    return (
        <div>
            <h1 className={className}>StyleSheet Class Applied</h1>
            <h1 className="success">StyleSheet Class Applied</h1>
            <h1 className="error">StyleSheet Class Applied</h1>
            <div className="primary enlarge-text">
                This element is having multiple classes
            </div>
        </div>
    )
}

export default StyleSheet
