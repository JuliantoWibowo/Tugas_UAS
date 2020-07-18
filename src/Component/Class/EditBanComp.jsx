import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import qs from 'querystring'


const api = "http://localhost:3001"

class EditBanComp extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            id_roda: this.props.location.state.id_roda,
            nama_roda: this.props.location.state.nama_roda,
            kode_ban: this.props.location.state.kode_ban,
            Jumlah_roda: this.props.location.state.Jumlah_roda,
            Harga_roda: this.props.location.state.Harga_roda,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahBan = (id_roda) => {
        const data = qs.stringify({
            id_roda: id_roda,
            nama_roda: this.state.nama_roda,
            kode_ban: this.state.kode_ban,
            Jumlah_roda: this.state.Jumlah_roda,
            Harga_roda: this.state.Harga_roda,
        });

        axios.put(api+'/ubahban', data)
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
                <Label>Nama Barang</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="nama_roda" value={this.state.nama_roda} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Kode Barang</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="kode_ban" value={this.state.kode_ban} onChange={this.handleChange} placeholder="Masukan Kode Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Jumlah Ban Motor</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="Jumlah_roda" value={this.state.Jumlah_roda} onChange={this.handleChange} placeholder="Masukan jumlah Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Harga Ban Motor</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="Harga_roda" value={this.state.Harga_roda} onChange={this.handleChange} placeholder="Masukan Harga Ban motor"/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                       <Button type="button" onClick={() => this.ubahBan(this.state.id_roda)}>Update</Button>
                        </Col>
                    </Row>
                </FormGroup>

                </Col>
            </Form>
        </Container>
        )
    }
}

export default EditBanComp