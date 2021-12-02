import React from 'react'

import { Container } from './styles';

class Buttons extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div >
                <button>Prev</button>
                <button>Next</button>
            </div>
        )
    }
}
export default Buttons