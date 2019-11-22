import React from 'react';
import Button from '../components/button'
import { Card, CardBody } from 'reactstrap'

import '../css/practice.css'

class Practice extends React.Component {
    state = {
            count: 42
    }
    
    onPlus = () => {
        this.setState({count: this.state.count + 1})
    }
    onMinus = () => {
        this.setState({count: this.state.count - 1})
    }
    onTenPlus = () => {
        this.setState({count: this.state.count + 10})
    }
    onTenMinus = () => {
        this.setState({count: this.state.count - 10})
    }
    onTimesTwo = () => {
        this.setState({count: this.state.count * 2})
    }
    onDivideTwo = () => {
        this.setState({count: this.state.count / 2})
    }

    render() {
        const { count } = this.state
        return (
            <div className="box">
                <Card>
                    
                        <div className="test">
                            {count}
                        </div>
                    <CardBody>
                        <div className="flex">
                            <div className="row">
                                <Button className="button" onClick = {this.onPlus}>Add +1</Button>
                                <hr />
                                <Button className="button" onClick = {this.onMinus}>Minus -1</Button>
                            </div>
                                <hr />
                            <div className="row">
                                <Button className="button" onClick = {this.onTenPlus}>Add +10</Button>
                                <hr />
                                <Button className="button" onClick = {this.onTenMinus}>Minus -10</Button>
                            </div>
                                <hr />
                            <div className="row">
                                <Button className="button" onClick = {this.onTimesTwo}>Times x2</Button>
                                <hr />
                                <Button className="button" onClick = {this.onDivideTwo}>Divide by 2</Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Practice;