import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }

    }
    incremetCount = () => {
        this.setState(prevState => {
            return { count : prevState.count +1 }
        })
    }
    
    
    render() {
        const { count} = this.state
        return (
            
            <div>
                <button onClick={this.incremetCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
