import React from 'react';

const RightArrow = (props) => {
    return(
        <div className="nextArrow" onClick={props.goToNextSlide} style={styles.arrow, styles.nextArrow}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
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
    nextArrow: {
        position: "absolute",
        top: "30%",
        right: "25%",
        zIndex: "999"
      }
}

export default RightArrow;