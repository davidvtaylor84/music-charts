import React from "react";
import "../containers/ChartList";

const ChartItem = ({ song, index }) => {
    return (
        <>
            <li>
                <a>{index+1}:{song["im:name"]["label"]} by {song["im:artist"]["label"]}</a>
            </li>
        </>
    )
}

export default ChartItem;
