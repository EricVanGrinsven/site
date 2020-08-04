import React from "react"
//import {Link} from "react-router";

function Social(props) {
    if (props.image) {
        return (
            <a href={props.link}>
                <img src={props.image} className="linkedIn"/>
            </a>
        )
    }
    else {
        return (
            <div className="info">
                <a  target="_blank" href={props.link}>{props.title}</a>

            </div>
        )
    }

}

export default Social