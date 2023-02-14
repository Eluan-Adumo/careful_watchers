import React from "react";
import "../css/spinner.css";


const Spinner = ()=>{
    return(

        <>
        {/* SPINNER */}
        <center>
                    <div className = 'spinner-container'>
                        
                            <div className = 'loading-spinner'></div>
                        
                    </div>
        </center>
        {/* END SPINNER */}
        </>
    );
};



export default Spinner;