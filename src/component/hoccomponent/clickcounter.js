import React, {Component} from 'react'
import Combinecounter from './combineCounter'

class clickCounter extends Component {
    constructor(){
        super()
        this.state= {
        }
    }



    render(){

        return(
            <div>
                <h1>{this.props.counter}</h1>
               <button onClick={this.props.incrementhanlder}>couter</button>

                </div>
        )
    }
}
export default Combinecounter(clickCounter);