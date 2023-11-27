import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logosmp from '../assets/img/logosmp.png'

const FooterComponent = () => {
    return (
        <div className="footer py-5">
        <Container>
            <Row className="mt-3">
            <Col>
                <p className="text-center px-md-0 px-3">&copy; CopyRight {new Date().getFullYear()} by <span className="fw-bold">SMK || RTB</span> , All Right Reverse</p>
            </Col>
            </Row>
        </Container>
        </div>
    )
}
export default FooterComponent