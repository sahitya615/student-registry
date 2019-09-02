import React, {Component} from 'react'

const updatedComponent=(OriginalComponent)=>{
    class combineCounter extends Component {
        constructor(){
            super()
            this.state= {
                counter:0
            }
        }
    incrementhanlder=()=>{
        this.setState({counter:this.state.counter+1})
    }
            
    
    
        render(){
    
            return(
                <div>
                    <OriginalComponent
                    counter={this.state.counter}
                    incrementhanlder={this.incrementhanlder}
                     />
                    
                    </div>
            )
        }
    }
    return combineCounter
}

export default updatedComponent;