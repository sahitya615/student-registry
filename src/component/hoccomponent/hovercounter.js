import React, {Component} from 'react'
import Combinecounter from './combineCounter'

class hoverCounter extends Component {
    constructor(){
        super()
        this.state= {
            
        }
    }

        

    render(){

        return(
            <div>
                <h1>{this.props.counter}</h1>
               <button onMouseOver={this.props.incrementhanlder}>couter</button>
                </div>
        )
    }
}
export default Combinecounter(hoverCounter);