import React from "react";
import { ImageSection } from './ImageSection.js'
import  { Recipe } from './Recipe.js';
import  { IngredientList } from './IngredientList.js';

export class Body extends React.Component {
    render() {
        return (
            <main>
                <h1>
                    Chocolate Pizza
                </h1>
                <h4>
                    POSTED ON 15 DEC 2013 / DESSERTS
                </h4>
                <ImageSection/>
                <Recipe/>
                <IngredientList data={this.props.data}/>
            </main>
        );
    }
}