import React from 'react';

const LeftArrow = (props) => {
    return(
        <div className="backArrow" onClick={props.goToPrevSlide} style={styles.arrow, styles.backArrow}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}

const styles = {
    arrow: {
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f9f9f9",
        borderRadius: "50%",
        cursor: "pointer",
        transition: "transform ease-in .1s"
    },
    backArrow: {
        position: "absolute",
        top: "30%",
        left: "25%",
        zIndex: "999",
        
    }
}
export default LeftArrow;