import "../pages/Reports/report.scss";
import React, { useState, useEffect } from "react";
import http from './http-common';

function CallReport() {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [idEvent, setIdEvent] = useState("");
    const [location, setLocation] = useState("");
    
    const get = (event) => {
        return http.get('http://localhost:8080/event/exportInvoice', { responseType: 'blob', params: { idEvent: idEvent, location: location } })
            .then(response => {
                // Crear una URL para el archivo PDF
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
                const pdfUrl = URL.createObjectURL(pdfBlob);
                setPdfUrl(pdfUrl);
            })
            
            .catch(error => {
                console.error(error);
            });
            
    }

    return (
        <div>
            <label>
                If you want to generate a report, fill in the following information with the event id and location:</label>
            <label >
                ID:
                <input type="text" value={idEvent} onChange={e => setIdEvent(e.target.value)} />
            </label>
            <label>
                LOCATION:
                <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
            </label>
            <div className="container-button">
                <button  className="button-pdf" onClick={get}>Descargar PDF</button>
                {pdfUrl && <a href={pdfUrl} download>Descargar PDF</a>}
            </div>

        </div>
    );
}
export default CallReport;