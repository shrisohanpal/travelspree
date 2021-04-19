import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
import Rating from './Rating'

const Package = ({ singlePackage }) => {

    return (
        <div className="shadow my-3 px-3 mb-5 bg-white rounded" style={{ borderWidth: 10, borderColor: 'black', background: '#E8E8E8' }}>
            <Link to={`/package/${singlePackage._id}`}>
                <Row>
                    <Col xs={3} sm={4} md={4} xl={4} className='mx-0 px-0'>
                        <Image src={singlePackage.image} style={{ width: '100%', height: 200 }} />
                    </Col>
                    <Col xs={6} sm={6} md={6} xl={6} className='px-0 mx-0'>
                        <center >
                            <h6 className='my-3'>
                                {singlePackage.name}
                            </h6>
                            <h6 className='my-3'>
                                {singlePackage.description}
                            </h6>
                            <Rating
                                value={singlePackage.rating}
                                text={`${singlePackage.numReviews} reviews`}
                            />
                        </center>
                    </Col>
                    <Col xs={2} sm={2} md={2} xl={2}>
                        <div className='my-3' >
                            <h6 className='my-3'>₹{singlePackage.price}</h6>
                        </div>
                        <div>
                            <Link to={`/package/${singlePackage._id}`} className='my-3'>
                                <h6>Book Now</h6>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Link>
        </div>
    )

    return (
        <div className="shadow my-3 p-3 mb-5 bg-white rounded" style={{ borderWidth: 10, borderColor: 'black', background: '#E8E8E8' }}>
            <Link to={`/package/${singlePackage._id}`}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image src={singlePackage.image} style={{ width: 300, height: 150 }} />
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                        <div style={{ flex: 6 }}>
                            <center>
                                <h4 className='my-3'>
                                    {singlePackage.name}
                                </h4>
                                <h5 className='my-3'>
                                    {singlePackage.description}
                                </h5>
                                <Rating
                                    value={singlePackage.rating}
                                    text={`${singlePackage.numReviews} reviews`}
                                />
                            </center>
                        </div>
                        <div style={{ flex: 2, }}>
                            <div className='m-3' >
                                <h4 className='m-3'>₹{singlePackage.price}</h4>
                            </div>
                            <div>
                                <Link to={`/package/${singlePackage._id}`} className='m-3'>
                                    <Button className='m-3'>Book_Now</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Package
