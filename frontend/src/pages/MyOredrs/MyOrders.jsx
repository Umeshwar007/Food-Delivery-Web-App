import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MyOrder from '../../components/MyOredrsPage/MyOrdersPage'
import Footer from '../../components/Footer/Footer'
const MyOrders = () => {
    useEffect(()=>{
            Window.scrollTo(0,0);
        },[]);
    return (
        <>
            <Navbar />
            <MyOrder />
            <Footer />
        </>
    )
}

export default MyOrders