import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import qs from 'querystring'


const api = "http://localhost:3001"

class EditComp extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            id_karyawan: this.props.location.state.id_karyawan,
            nik: this.props.location.state.nik,
            nama: this.props.location.state.nama,
            email: this.props.location.state.email,
            jenis_kelamin: this.props.location.state.jenis_kelamin,
            jabatan: this.props.location.state.jabatan,
            Alamat: this.props.location.state.Alamat,
            password: this.props.location.state.password,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahKaryawan = (id_karyawan) => {
        const data = qs.stringify({
            id_karyawan: id_karyawan,
            nik: this.state.nik,
            nama: this.state.nama,
            email: this.state.email,
            jenis_kelamin: this.state.jenis_kelamin,
            jabatan: this.state.jabatan,
            Alamat: this.state.Alamat,
            password: this.state.password
        });

        axios.put(api+'/ubah', data)
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
                <Label>Nik</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="nik" value={this.state.nik} onChange={this.handleChange} placeholder="Masukan nik"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Nama</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukan Nama"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Email</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Masukan Email"/>
                            </Col>
                        </Row>
                    </FormGroup>
                <Label>Jenis Kelamin</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange} placeholder="Masukan Jenis Kelamin"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Jabatan</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="jabatan" value={this.state.jabatan} onChange={this.handleChange} placeholder="Masukan Jabatan"/>
                        </Col>
                    </Row>
                </FormGroup>
                 <Label>Alamat</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="Alamat" value={this.state.Alamat} onChange={this.handleChange} placeholder="Masukan Alamat"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Password</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Masukan Nama"/>
                            </Col>
                        </Row>
                    </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                       <Button type="button" onClick={() => this.ubahKaryawan(this.state.id_karyawan)}>Update</Button>
                        </Col>
                    </Row>
                </FormGroup>

                </Col>
            </Form>
        </Container>
        )
    }
}

export default EditComp