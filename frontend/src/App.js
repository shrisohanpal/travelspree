import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AllPackagesScreen from './screens/AllPackagesScreen'
import PackageScreen from './screens/PackageScreen'
import PlaceBookingScreen from './screens/PlaceBookingScreen'
import ContactScreen from './screens/ContactScreen'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import PackageListScreen from './screens/PackageListScreen'
import PackageEditScreen from './screens/PackageEditScreen'
import DestinationListScreen from './screens/DestinationListScreen'
import DestinationEditScreen from './screens/DestinationEditScreen'
import BookingListScreen from './screens/BookingListScreen'

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Route path='/' component={HomeScreen} exact />
                <Route path='/allpackages' component={AllPackagesScreen} />
                <Route path='/package/:id' component={PackageScreen} />
                <Route path='/placebooking/:id' component={PlaceBookingScreen} />
                <Route path='/contact' component={ContactScreen} />
                <Route path='/login' component={LoginScreen} />
                <Route path='/register' component={RegisterScreen} />
                <Route path='/profile' component={ProfileScreen} />
                <Route path='/forgotpassword' component={ForgotPasswordScreen} />

                <Route path='/admin/userlist' component={UserListScreen} />
                <Route path='/admin/user/:id/edit' component={UserEditScreen} />

                <Route path='/admin/packagelist' component={PackageListScreen} />
                <Route path='/admin/package/:id/edit' component={PackageEditScreen} />

                <Route path='/admin/destinationlist' component={DestinationListScreen} />
                <Route path='/admin/destination/:id/edit' component={DestinationEditScreen} />

                <Route path='/admin/bookinglist' component={BookingListScreen} />
            </main>
            <Footer />
        </Router>
    )
}

export default App