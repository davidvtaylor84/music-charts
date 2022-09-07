import React from "react";
import "./ChartList";

const ChartItem = ({ song, index }) => {
    return (
        <>
            <li>
                <a>{index+1}:{song["im:name"]["label"]} by {song["im:artist"]["label"]}</a><br/>
                <img src={song["im:image"][2]["label"]}/>
                <form action={song["im:collection"]["link"]["attributes"]["href"]}>
                    <input type="submit" value="Song Sample" />
                </form><br/><br/>
            </li>
        </>
    )
}

export default ChartItem;
