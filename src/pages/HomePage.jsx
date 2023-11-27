import { Container, Row, Col } from 'react-bootstrap'
import HeroImage from '../assets/img/fotosmk.png'
import Jokowi from '../assets/img/Jokowi.png'
import kitab from '../assets/img/al-quran.png'
import { Card } from 'react-bootstrap'
import yoga from '../assets/img/icon-yoga.png'
import maps from '../assets/img/maps.png'

const HomePage = () => {
    return (
        <div className="Homepage">
            {/* header di sini untuk uuran warna background */}
            <header className="w-100 min-vh-100 d-flex align-items-end ">
                <Container>
                    <Row className='header-box d-flex align-items-center'>
                        <Col lg="6">
                            <h1 className="mb-4 mt-5">بِسْمِ اللَّهِ الرحمن الرَّحِيمِ</h1>
                            <h5>SELAMAT DATANG DI WEBSITE RESMI</h5>
                            <h5>YAYASAN PONDOK PESANTREN PUJORAHAYU</h5>
                            <h5>SMP DAN SMK</h5>
                            <h5>ROUDLOTUT THULLAB BELITANG</h5>
                            <button className="btn btn-warning btn-lg rounded-1 me-2 mb-xs-0 mb-2">Daftar</button>
                            <button className="btn btn-outline-warning btn-lg rounded-1 mb-xs-0 mb-2">Informasi</button>
                        </Col>
                        <Col lg="6" className="mt-lg-5 pt-lg-0 pt-5 m-0 py-0">
                            <img src={HeroImage} alt="hero-img" />
                        </Col>
                    </Row>
                </Container>
            </header>
            {/* ini section sambutan kepala sekolah */}
            <div className="Sambutan w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className='sambutan-box d-flex align-items-start'>
                        <Col lg="4">
                            <img src={Jokowi} alt="kepala-sekolah-img" />
                        </Col>
                        <Col lg="8">
                            <h2 className='fw-bold mb-5 mt-3'>Prakata Kepala Sekolah</h2>
                            <p>Era globalisasi dengan segala implikasinya menjadi salah satu pemicu cepatnya perubahan yang terjadi pada berbagai aspek kehidupan masyarakat, dan bila tidak ada upaya sungguh-sungguh untuk mengantisipasinya maka hal tersebut akan menjadi maslah yang sangat serius. Dalam hal ini dunia pendidikan mempunyai tanggung jawab yang besar, terutama dalam menyiapkan sumber daya manusia yang tangguh sehingga mampu hidup selaras didalam perubahan itu sendiri. Pendidikan merupakan investasi jangka panjang yang hasilnya tidak dapat dilihat dan dirasakan secara instan, sehingga sekolah sebagai ujung tombak dilapangan harus memiliki arah pengembangan jangka panjang dengan tahapan pencapaiannya yang jelas dan tetap mengakomodir tuntutan permasalahan faktual kekinian yang ada di masyarakat.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ini section kitab */}
            <div className="Kitab w-100 lg-min-vh-100 min-vh-50 d-flex align-items-center">
                <Container>
                    <Row className='kitab-box d-flex align-items-center text-center'>
                        <Col>
                            <h1 className='fw-bold mb-5'>Sayyidina Ali pernah berkata <br></br>bahwa ilmu pengetahuan lebih baik daripada harta.</h1>
                            <img src={kitab} alt="kitab-img" />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ini section unit sekolah */}
            <div className="Unitsekolah w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className='sekolah-box d-flex align-items-center'>
                        <Col>
                            <h1 className='mt-5 fw-bold text-center'>Unit Pendidikan</h1>
                        </Col>
                    </Row>

                    <Row className='mt-5 mb-5 justify-content-center'>
                        <Col className='mb-3 col-md-4 lg-mx-0 mx-5'>
                        <Card className='kartu shadow'>
                            <img src={yoga} />
                            <Card.Body>
                                <h5 className='fw-bold text-center'>SMP <br></br>ROUDLOTUT THULLAB<br></br>  BELITANG</h5>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col className='col-md-4 lg-mx-0 mx-5'>
                        <Card className='kartu shadow'>
                            <img src={yoga} />
                            <Card.Body>
                                <h5 className='fw-bold text-center'>SMK <br></br>ROUDLOTUT THULLAB<br></br>  BELITANG</h5>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="santribaru">
                <Container>
                    <Row className='text-center'>
                        <Col>
                            <h1 className='mt-5 text-center'>PENDAFTARAN SANTRI BARU <br></br>TAHUN AJARAN 2023/2024</h1>
                            <button className='mt-5 px-5 btn btn-warning rounded-1'>Daftar</button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="maps w-100 lg-min-vh-100 min-vh-50">
                <Container>
                    <Row className='maps-box'>
                        <h1 className='fw-bold mb-5 text-center'>GOOGLE MAP</h1>
                        <img src={maps} alt="maps-img" />
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default HomePage