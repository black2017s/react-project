import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button'
export default class About extends Component {
    render() {
        return (
            <div className='bg-secondary text-light p-5 mt-4 text-center '>
                <h2 className='text-center'>{this.props.title}</h2>
                <p className='text-center text-light fs-7'>
                    {this.props.desc}
                </p>
                <Button variant="info">more info</Button>
            </div>
        )
    }
}
