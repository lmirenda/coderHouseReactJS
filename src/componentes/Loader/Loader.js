import React from 'react'
import './Loader.scss'
import Spinner from 'react-bootstrap/Spinner'


export const Loader = () => {

    return (
        <div className="loader">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
