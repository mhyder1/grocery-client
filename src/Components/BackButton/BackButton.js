import React from "react";

function BackButton(props) {
    return (
        <>
        <button onClick={(e) => props.history.goBack()} className="back-button">
            Go Back

        </button>
        </>
    )
}

export default BackButton;