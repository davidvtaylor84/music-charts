import React, { useState, useEffect} from "react";
import ChartList from "../components/ChartList";
import Header from "./Header";

const ChartContainer = ()=>{
    const [charts, setCharts] = useState([]);

    useEffect(() =>{
        getCharts()
    }, [])

    const getCharts = function(){
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(results => results.json())
        .then((charts) => setCharts(charts));
    }

    return (
        <div>
            <Header title="Very Excellent Chart Container App"/>
            <ChartList charts={charts}/>
        </div>
    )
}

export default ChartContainer