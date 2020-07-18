import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'

const api ='http://localhost:3001'

class TambahOliComp extends PureComponent {
    constructor(props){
        super(props)

        this.state ={
            kode_oli: '',
            nama_oli: '',
            jumlah_oli: '',
            Harga: '',
            response: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addoli = () => {
        axios.post(api+'/tambaholi', {
            kode_oli: this.state.kode_oli,
            nama_oli: this.state.nama_oli,
            jumlah_oli: this.state.jumlah_oli,
            Harga: this.state.Harga
           
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
                        <Input type="text" name="kode_oli" value={this.state.kode_oli} onChange={this.handleChange} placeholder="Masukan Kode Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                    <Label>Nama Oli Motor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="nama_oli" value={this.state.nama_oli} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Jumlah Oli Motor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="jumlah_oli" value={this.state.jumlah_oli} onChange={this.handleChange} placeholder="Masukan Jumlah Ban Motor"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Harga Oli Motor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="Harga" value={this.state.Harga} onChange={this.handleChange} placeholder="Masukan Harga Ban Motor"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                           <Button type="button" onClick={this.Addoli}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        )
    }
}

export default TambahOliComp