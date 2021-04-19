import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import FlatPackage from '../components/FlatPackage'
import Message from '../components/Message'
import Loader from '@material-ui/core/CircularProgress'
import Meta from '../components/Meta'
import { listPackages } from '../actions/packageActions'
import { listDestinations } from '../actions/destinationActions'

const AllPackagesScreen = ({ match }) => {
    const dispatch = useDispatch()

    const packageList = useSelector((state) => state.packageList)
    const { loading, error, packages } = packageList

    useEffect(() => {
        dispatch(listPackages())
        dispatch(listDestinations())
    }, [dispatch])

    return (
        <Container>
            <Meta />
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', zIndex: 100, position: 'fixed', right: 0, top: '50%' }}>
                    <div>
                        <Button className='m-1'><i className='fas fa-question'></i></Button>
                    </div>
                    <div>
                        <Button className='m-1'><i className='fas fa-comment'></i></Button>
                    </div>
                </div>
            </div>
            {loading ? (
                <center>
                    <Loader />
                </center>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        {packages.map((singlePackage) => (
                            <Col key={singlePackage._id} xl={12}>
                                <FlatPackage singlePackage={singlePackage} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}

        </Container>
    )
}

export default AllPackagesScreen