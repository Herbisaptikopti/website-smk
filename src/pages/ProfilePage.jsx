import UnitPendidikanComponent from "../components/UnitPendidikanComponent"
import { Container, Row, Col } from 'react-bootstrap'
import vision from '../assets/img/vision.png'
import oppo from '../assets/img/opportunity.png'
import struktur from '../assets/img/struktur.png'

const ProfilePage = () => {
    return (
        <div className="Profile-page w-100 min-vh-100">
            <Container>
                <Row className="pt-5">
                    <Col>
                        <UnitPendidikanComponent />
                    </Col>
                </Row>
            </Container>

            <div className="visi w-100 min-vh-100 align-items-center py-5">
                <Container>
                    <Row className="vision-box align-items-center">
                        <Col lg="4" className="text-center">
                            <img src={vision} alt="vision-img" />
                        </Col>
                        <Col lg="8">
                            <h5 className="fw-bold mt-4 text-center">VISI</h5>
                            <p>Terdidiknya para santri menjadi Mukmin, Muslim dan Muhsin yang berbudi tinggi, berbadan sehat, berpengetahuan luas dan berpikiran bebas.</p>
                        </Col>
                    </Row>
                    <Row className="vision-box align-items-center my-5">
                        <Col lg="4" className="text-center">
                            <img src={oppo} alt="vision-img" />
                        </Col>
                        <Col lg="8">
                            <h5 className="fw-bold mt-4 text-center">MISI</h5>
                            <p>1. Menanamkan dan meningkatkan disiplin santri untuk melaksanakan ajaran Islam dalam kehidupan sehari – hari.<br></br>
                            2. Menanamkan jiwa keikhlasan, kesederhanaan, ukhuwah diniyah, kemandirian dan kebebasan dalam kehidupan sehari – hari.<br></br>
                            3. Menyelenggarakan pendidikan formal dengan Kurikulum Pesantren yang disesuaikan dengan Pendidikan Nasional.<br></br>
                            4. Mendidik dan mengantarkan santri untuk mampu mengenal jati diri dan lingkungannya serta mempunyai motivasi dan kemampuan untuk mengembangkan diri sesuai dengan pilihan hidupnya.<br></br>
                            5. Mendidik dan mempersiapkan santri untuk menjadi manusia mandiri dan berkhidmad kepada masyarakat, agama, nusa dan bangsa.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="struktur w-100 h-100">
                <Container>
                    <Row className="struktur-box text-center">
                        <Col className="text-center">
                            <h1 className="fw-bold mb-5">STRUKTUR ORGANISASI</h1>
                            <img src={struktur} alt="struktur-img" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="sejarah w-100 h-100">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="fw-bold">SEJARAH SMK RTB</h1>
                            <p>SMA Muhammadiyah 2 Palembang didirikan pada tahun 1970 oleh Pimpinan Cabang Muhammadiyah Ilir Barat 1 Palembang yang terletak di tempat yang cukup strategis di tengah kota Palembang, tepatnya di Jalan K.H Ahmad Dahlan No. 23 B Palembang. Sebelah Utara berbatasan dengan Jalan K.H Ahamd Dahlan dan Jalan Merdeka, sebelah Selatan berbatasan dengan Jalan K.H Masyur Azhari dan sebelah Timur dan Barat keduanya berbatasan dengan rumah penduduk. Jaraknya hanya sekitar 200 meter dari Jalan Merdeka dan persis berada di belakang Rumah Sakit Mata dan Rumah Sakit Khusus Paru-paru Palembang. SMA Muhammadiyah merupakan salah satu sekolah di komplek perguruan Muhammadiyah Pimpinan Cabang Muhammadiyah (PCM) Bukit Kecil Palembang </p>
                            <p>Untuk mendapatkan pengekuan secara resmi, pada tahun 1970 Pimpinan Cabang Muhammadiyah mengajukan izin operasional sehingga dengan resmi terdaftar pada Majelis Pendidikan, Pengajaran dan Kebudayaan Pimpinan Pusat Muhammadiyah dengan nomor 2257/M/473/III-35/1970 dan piagam pendirian nomor 694/II-010/Sm.S-70/1978 dan piagam pendirian Muhammadiyah Sumatera Selatan dengan no.012/II-5/PLG-70/1978Bahwasanya SMA Muhammadiyah 2 Palembang merupakan salah satu sekolah yang beroperasi di perguruan Muhammadiyah Bukit Kecil Palembang bersama sekolah lainnya, yaitu Sekolah Dasar Muhammadiyah 1 Palembnag, Sekolah Menengah Pertama Muhammadiyah 1 Palembang, Madrasah Tsanawiyah Muhammadiyah 1 Palembang, Madrasah Aliyah Muhammadiyah 1 Palembang. </p>
                            <p className="paragrap">Menurut Kepala Sekolah sekarang Drs. Rominton, SMA Muhammadiyah 2 Palembang telah mengalami beberapa perubahan status. Status terdaftar didapat mulai berdirinya tahun 1970 sampai 1990, status ini kemudian meningkat diakui. terhitung mulai 1990 sampai 1995, pada tahun 1995 statusnya kembali berubah menjadi disamakan sampai tahun 2011 dan pada tahun 2011 memperoleh status terakreditasi dengan nilai B. Dengan demikian, SMA Muhammadiyah 2 Palembang merupakan sekolah yang resmi dan terdaftar baik di Pimpinan Pusat Muhammadiyah maupun di Kementerian Pendidikan Nasional dengan Nomor Statistik Sekolah (NSS) 304116003021 dan Nomor Pokok Sekolah Nasional (NPSN) 10609659.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default ProfilePage