import React, { Component } from 'react'

export class LifecycleB extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Kishor'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Lifecycle componentDidMount')
    }

    
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifeCycle A
            </div>
        )
    }
}

export default LifecycleB





