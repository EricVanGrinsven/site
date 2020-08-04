import React from "react"
import linksData from "../Data/Links";
import Social from "./Social";
import Tabs from "./Tabs";

function Header(props) {
    // Top page links
    const links = linksData.map(item => <Social key ={item.id} link={item.link} title={item.title} image={item.image}/>)

    return (
        <div>
            <h3 className="head">  Eric Van Grinsven</h3>
            <div2 className="infoLeft">
                {links}
            </div2>
            <Tabs />
        </div>
    )
}

export default Header