import React from 'react'
import { Jumbotron, Button,Container, Row, Col } from 'reactstrap';
import BanComp from './BanComp';
import OliComp from './OliComp';
import RanteComp from './RanteComp';
import KnalpotComp from './KnalpotComp';



function SparepartComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Mugello MotoSport</h1>
                <p className="lead">Mugello MotoSport Juga menjual berbagai macam sparepart motor berbagai jenis dan merk.
                </p>
                <hr className="my-2" />
                <p className="lead">
                   
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col><BanComp Nama="Ban Motor"/></Col>
                    <Col><OliComp Nama="Oli Motor"/></Col>
                    <Col><RanteComp Nama="Rante Motor"/></Col>
                    <Col><KnalpotComp Nama="Knalpot Motor"/></Col>
                   
                </Row>
            </Container>
        </div>
    )
}

export default SparepartComp