import React from "react";
import chocoPizza from "./assets/choco-pizza.png";

export class ImageSection extends React.Component {
    render() {
        return (
            <>
                <img src={chocoPizza} alt=""></img>
            </>
        );
    }
}