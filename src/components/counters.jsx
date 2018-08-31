import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    render() { 
        console.log("Counters - Rendered");
        const {onReset, onIncrement, onDelete, counters} = this.props;
        return ( 
        <div>
            <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2"
            >
                Reset
            </button>
            {counters.map( c =>
                <Counter 
                    key={c.id}
                    counter={c}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                >
                </Counter>
            )}
        </div> );
    }
}
 
export default Counters;