import React, { useState, useEffect } from 'react'

const Logs = () => {

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        getLogs();
    }, []);

    const getLogs = async () => {
        setLoading(true);
        //const res = await fetch('/logs');
        //const data = await res.json();

        const data = [
            {
                "id" : 1,
                "message" : "Change RAM",
                "attention" : false,
                "date" : "27-07-2020",
                "tech" : "Roger Smith"
            },
            {
                "id" : 2,
                "message" : "Change HDD",
                "attention" : true,
                "date" : "07-09-2020",
                "tech" : "Tim Timothy"
            },
            {
                "id" : 3,
                "message" : "Change Monitor",
                "attention" : false,
                "date" : "17-10-2020",
                "tech" : "Bryan Kendrick"
            }
        ]

        setLogs(data);
        setLoading(false);
    }

    if(loading) {
        return <h1>Loading.......</h1>
    }

    return (
        <ul className = "collection-with-header">
            
        </ul>
    )
}

export default Logs;
