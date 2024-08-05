import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default class Slider extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center p-5 mb-4 align-content-center bg-dark'>
                <Carousel data-bs-theme="dark" className='w-50'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/27463158/pexels-photo-27463158/free-photo-of-kahvemm.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/27430159/pexels-photo-27430159/free-photo-of-a-cup-of-coffee-sits-on-a-table-outside.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/27430489/pexels-photo-27430489/free-photo-of-minoa-pera.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
