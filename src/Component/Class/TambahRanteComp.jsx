import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'

const api ='http://localhost:3001'

class TambahRanteComp extends PureComponent {
    constructor(props){
        super(props)

        this.state ={
            kode_rante: '',
            nama_rante: '',
            jumlah_rante: '',
            Harga_rante: '',
            response: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addrante = () => {
        axios.post(api+'/tambahrante', {
            kode_rante: this.state.kode_rante,
            nama_rante: this.state.nama_rante,
            jumlah_rante: this.state.jumlah_rante,
            Harga_rante: this.state.Harga_rante
           
        }).then(json => {
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values
                })
            }else{
                this.setState({
                    response: json.data.values
                })
            }
        })
    }


    render(){
        return(
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>Kode Barang</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="kode_rante" value={this.state.kode_rante} onChange={this.handleChange} placeholder="Masukan Kode Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                    <Label>Nama rante Motor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="nama_rante" value={this.state.nama_rante} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Jumlah ranteMotor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="jumlah_rante" value={this.state.jumlah_rante} onChange={this.handleChange} placeholder="Masukan Jumlah rante Motor"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Harga rante Motor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="Harga_rante" value={this.state.Harga_rante} onChange={this.handleChange} placeholder="Masukan Harga rante Motor"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                           <Button type="button" onClick={this.Addrante}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        )
    }
}

export default TambahRanteComp