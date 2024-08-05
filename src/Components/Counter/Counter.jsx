import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button'
export default class Counter extends Component {
    state = {
        sectiontTitle: "Counter",
        count: 0
    }
    increas = () => {
        this.setState({
            count: (this.state.count += 1),
        });
    }
    dencreas = () => {
        if (this.state.count > 0)
            this.setState({
                count: (this.state.count - 1),
            });
    }
    render() {
        return (
            <div className='bg-secondary-subtle text-dark p-5 mt-3 mb-3'>
                <h2 className='text-center'>{this.state.sectiontTitle}</h2>
                <p className='text-center text-dark fs-7'>
                    count <strong>{this.state.count}</strong>
                </p>
                <div className='d-flex justify-content-center gap-3 align-content-center'>
                    <Button variant="light" onClick={this.increas}>+</Button>
                    <Button variant="dark" onClick={this.dencreas}>-</Button>
                </div>
            </div>
        )
    }
}
