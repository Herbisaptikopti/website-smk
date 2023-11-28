import { Container, Row, Col, Card } from 'react-bootstrap'
import yoga from '../assets/img/icon-yoga.png'

const UnitPendidikanComponent = () => {
    return (
        <div className="Unitsekolah w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className='sekolah-box d-flex align-items-center'>
                        <Col>
                            <h1 className='lg-mb-5 mb-3 fw-bold text-center'>UNIT PENDIDIKAN</h1>
                        </Col>
                    </Row>

                    <Row className='mt-3 mb-5 justify-content-center g-2'>
                        <Col className='mb-3 col-md-4 lg-mx-0 mx-5'>
                        <Card className='kartu shadow'>
                            <img src={yoga} />
                            <Card.Body>
                                <h3 className='fw-bold mt-2 text-center'>SMP <br></br>ROUDLOTUT THULLAB<br></br>  BELITANG</h3>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col className='col-md-4 lg-mx-0 mx-5'>
                        <Card className='kartu shadow'>
                            <img src={yoga} />
                            <Card.Body>
                                <h3 className='fw-bold mt-2 text-center'>SMK <br></br>ROUDLOTUT THULLAB<br></br>  BELITANG</h3>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}
export default UnitPendidikanComponent