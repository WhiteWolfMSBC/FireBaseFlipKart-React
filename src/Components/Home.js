import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Footer1 from '../Components/Footer/Footer1';
import { Helmet } from 'react-helmet';



export const Home = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <div className='wrapper'>

            <Helmet>
                <title>Flipkart | Home</title>
            </Helmet>

            <Navbar user={user} />
            <Header />
            <Products />
            <Footer />
            <Footer1 />
        </div>
    )
}
