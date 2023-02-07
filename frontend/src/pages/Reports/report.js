import React, { useState, useEffect } from "react";
import CallReport from "../../service/reportService";
import Header from "../../components/Header/header";

function support() {

    return (
        <>
            <div className="print report">
                <CallReport></CallReport>
                
            </div>
        </>
    );
};

export default support;