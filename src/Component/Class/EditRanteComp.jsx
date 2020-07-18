import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import qs from 'querystring'


const api = "http://localhost:3001"

class EditRanteComp extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            id_rante: this.props.location.state.id_rante,
            kode_rante: this.props.location.state.kode_rante,
            nama_rante: this.props.location.state.nama_rante,
            jumlah_rante: this.props.location.state.jumlah_rante,
            Harga_rante: this.props.location.state.Harga_rante,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahrante = (id_rante) => {
        const data = qs.stringify({
            id_rante: id_rante,
            kode_rante: this.state.kode_rante,
            nama_rante: this.state.nama_rante,
            jumlah_rante: this.state.jumlah_rante,
            Harga_rante: this.state.Harga_rante,
        });

        axios.put(api+'/ubahrante', data)
        .then(json => {
            if(json === 200){
                this.setState({
                    response: json.data.values,
                    display:'block'
                })
            }else{
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render(){
        return(

            <Container>
            <h4>Form Edit Data</h4>
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
                <Label>Nama Barang</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="nama_rante" value={this.state.nama_rante} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Jumlah rante Motor</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="jumlah_rante" value={this.state.jumlah_rante} onChange={this.handleChange} placeholder="Masukan jumlah Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Harga rante Motor</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="Harga_rante" value={this.state.Harga_rante} onChange={this.handleChange} placeholder="Masukan Harga rante motor"/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                       <Button type="button" onClick={() => this.ubahrante(this.state.id_rante)}>Update</Button>
                        </Col>
                    </Row>
                </FormGroup>

                </Col>
            </Form>
        </Container>
        )
    }
}

export default EditRanteComp