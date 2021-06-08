import React from "react";


class IngredientItem extends React.Component {
    render() {
        return (
            <span> {this.props.amount} {this.props.name}</span>
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
