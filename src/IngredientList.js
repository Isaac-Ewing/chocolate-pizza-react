import React from "react";


class IngredientItem extends React.Component {
    render() {
        return (
            <span>{this.props.name} {this.props.amount}</span>
        );
    }
}

export class IngredientList extends React.Component {
    render() {
        const dataSet = this.props.data;
        let newMap = dataSet.map(element => <IngredientItem amount={element.amount} name={element.name}/>);
        const newMap1 = newMap.slice(0, 5);
        const newMap2 = newMap.slice(6, 11);
        return (
            <>
                <div className= "index-card">
                    <ul className="instructions">
                        <div className="list-columns">
                            <div>
                                {newMap1.map(item => <li>{item}</li>)}
                            </div>
                            <div>
                                {newMap2.map(item => <li>{item}</li>)}
                            </div>
                        </div>
                    </ul>
                </div>
            </>
        );
    }
}

{/* <section className= "left-list">
    <IngredientItem amount="1 1/2" name="cups milk"/>
    <IngredientItem amount="1/2" name="cup mascarpone"/>
    <IngredientItem amount="1/2" name="tsp pink salt"/>
    <IngredientItem amount="1" name="lb Black Mission Figs"/>
    <IngredientItem amount="1/2" name="cup brown sugar"/>
    <IngredientItem amount="2-4" name="tbsp water"/>
</section>
<section className= "right-list">
    <IngredientItem amount="1 1/2" name="cups heavy cream"/>
    <IngredientItem amount="4/3" name="granulated sugar"/>
    <IngredientItem amount="2" name="egg yolks"/>
    <IngredientItem amount="1" name="lemon, juiced"/>
    <IngredientItem amount="2" name="tbsp butter"/>
    <IngredientItem amount="1" name="cup honey roasted pecans, roughly chopped"/>
    </section> */}