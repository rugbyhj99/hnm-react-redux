import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRouter = () => {
    const authenticate = useSelector((state) => state.auth.authenticate)
    return authenticate === true ?<ProductDetail/> : <Navigate to ="/login"/>
}

export default PrivateRouter