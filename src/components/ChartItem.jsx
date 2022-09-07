import React from "react";
import "./ChartList";

const ChartItem = ({ song, index }) => {
    return (
        <>
            <li className="item">
                <h3>{index+1}...{song["im:name"]["label"]} </h3>
                <p>by {song["im:artist"]["label"]}</p>
                <img src={song["im:image"][2]["label"]}/>
                <form action={song["im:collection"]["link"]["attributes"]["href"]}>
                    <input type="submit" value="Song Sample" />
                </form><br/><br/>
            </li><br/><br/>
        </>
    )
}

export default ChartItem;
