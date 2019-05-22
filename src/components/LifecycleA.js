import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Kishor'
        }
        console.log('lifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Lifecycle componentDidMount')
    }

    
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                  <div>
                     LifeCycle A
                 </div>
                 <LifecycleB/>
            </div>
          
        )
    }
}

export default LifecycleA
