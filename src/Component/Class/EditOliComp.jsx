import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import qs from 'querystring'


const api = "http://localhost:3001"

class EditOliComp extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            id_oli: this.props.location.state.id_oli,
            kode_oli: this.props.location.state.kode_oli,
            nama_oli: this.props.location.state.nama_oli,
            jumlah_oli: this.props.location.state.jumlah_oli,
            Harga: this.props.location.state.Harga,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahBan = (id_oli) => {
        const data = qs.stringify({
            id_oli: id_oli,
            kode_oli: this.state.kode_oli,
            nama_oli: this.state.nama_oli,
            jumlah_oli: this.state.jumlah_oli,
            Harga: this.state.Harga,
        });

        axios.put(api+'/ubaholi', data)
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
                        <Input type="text" name="kode_oli" value={this.state.kode_oli} onChange={this.handleChange} placeholder="Masukan Kode Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Nama Barang</Label>
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
                        <Input type="text" name="jumlah_oli" value={this.state.jumlah_oli} onChange={this.handleChange} placeholder="Masukan jumlah Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Harga Oli Motor</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="Harga" value={this.state.Harga} onChange={this.handleChange} placeholder="Masukan Harga Oli Motor"/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                       <Button type="button" onClick={() => this.ubahBan(this.state.id_oli)}>Update</Button>
                        </Col>
                    </Row>
                </FormGroup>

                </Col>
            </Form>
        </Container>
        )
    }
}

export default EditOliComp