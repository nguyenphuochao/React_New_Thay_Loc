import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../component/Layout'
import Home from '../page/Home'

export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}
