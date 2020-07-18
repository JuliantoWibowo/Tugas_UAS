import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'

const api ='http://localhost:3001'

class TambahKnalpotComp extends PureComponent {
    constructor(props){
        super(props)

        this.state ={
            kode_knalpot:'',
            nama_knalpot: '',
            jumlah_knalpot: '',
            Harga_knalpot: '',
            response: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    AddKnalpot = () => {
        axios.post(api+'/tambahknalpot', {
            kode_knalpot: this.state.kode_knalpot,
            nama_knalpot: this.state.nama_knalpot,
            jumlah_knalpot: this.state.jumlah_knalpot,
            Harga_knalpot: this.state.Harga_knalpot
           
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
                        <Input type="text" name="kode_knalpot" value={this.state.kode_knalpot} onChange={this.handleChange} placeholder="Masukan Kode Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                    <Label>Nama Knalpot Motor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="nama_knalpot" value={this.state.nama_knalpot} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Jumlah KnalpotMotor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="jumlah_knalpot" value={this.state.jumlah_knalpot} onChange={this.handleChange} placeholder="Masukan Jumlah Knalpot Motor"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Harga Knalpot Motor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="Harga_knalpot" value={this.state.Harga_knalpot} onChange={this.handleChange} placeholder="Masukan Harga Knalpot Motor"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                           <Button type="button" onClick={this.AddKnalpot}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        )
    }
}

export default TambahKnalpotComp