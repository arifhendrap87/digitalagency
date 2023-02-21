import React from 'react'
import Navbar from './Navbar'

export default function Header(props) {
    const { pathname } = props;
    return (
        <>
            <Navbar />
        </>
    )
}
