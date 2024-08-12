import React from "react"
import { Link } from "gatsby"
import Container from '../components/Container.js'

const CarGluePage = () => (
    <Container>
        <title>Car Glue Page</title>
        <h1>Welcome to Car Glue</h1>
        <p>This is the Car Glue page.</p>
        <Link to="/">Go back to the homepage</Link>
    </Container>
)

export default CarGluePage
