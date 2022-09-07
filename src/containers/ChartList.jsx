import React,{useState, useEffect} from "react";
import ChartItem from "../components/ChartItem";

const ChartList=({charts})=>{
    if(!charts.feed) return null;
    const chartItemsDetails = charts.feed.entry.map((song, index) => {
        return <ChartItem song={song} index={index}/>
        
    })
    return (
        <div>
            <ul>
                {chartItemsDetails}
            </ul>
        </div>
    )
}

export default ChartList