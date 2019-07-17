import React, {Component} from 'react'
import Grass from './Grass'

export default class finder extends Component {
    constructor () {
        super ()
        this.state = {
            grassArr: [false, false, false]
        }
    }
    render () {
        return (
            <div>
                <Grass/>
                <Grass/>
                <Grass/>
            </div>
        )
    }
}