import React from 'react'
import { Jumbotron, Button,Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';


function AboutComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Mugello MotoSport</h1>
                <p className="lead">Mugello MotoSport Adalah Perusahaan Dibidang otomotif yang menyediakan berbagai macam Sparepart Motor Berbagai Jenis.
                Mugello MotoSport Pertama kali dibuka pada tanggal 20 Juli 2002 Di Bumiayu, Dengan PEmilik Usaha tersebut Bernama Julianto Adi Wibowo Yang Bertempat tinggal Dk Krajan 1 RT 006/001 Desa jatisawit Kecamatan Bumiayu Kabupaten Brebes.</p>
                <hr className="my-2" />
                <p className="lead">
                   
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col><CardComp id="1" Nama="Julianto Adi Wibowo" Alamat="DK krajan 1 RT 006/001 Bumiayu"/></Col>
                   
                </Row>
            </Container>
        </div>
    )
}

export default AboutComp