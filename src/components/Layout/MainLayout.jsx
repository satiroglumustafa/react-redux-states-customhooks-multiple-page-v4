import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './MainLayout.css'
import { Container, Row } from 'react-bootstrap'

const Mainlayout = ()=>{
    return(
        <>
        <Header/>
            <main>
                <Container>
                    <Row>
                        <Outlet/>
                    </Row>
                </Container>
            </main>
        <Footer/>
        </>
    )
}

export default Mainlayout