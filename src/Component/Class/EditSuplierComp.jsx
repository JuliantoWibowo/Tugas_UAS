import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import qs from 'querystring'


const api = "http://localhost:3001"

class EditSuplierComp extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            id_suplier: this.props.location.state.id_suplier,
            kode_suplier: this.props.location.state.kode_suplier,
            nama_suplier: this.props.location.state.nama_suplier,
            Alamat: this.props.location.state.Alamat,
            No_HP: this.props.location.state.No_HP,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahsuplier = (id_suplier) => {
        const data = qs.stringify({
            id_suplier: id_suplier,
            kode_suplier: this.state.kode_suplier,
            nama_suplier: this.state.nama_suplier,
            Alamat: this.state.Alamat,
            No_HP: this.state.No_HP,
        });

        axios.put(api+'/ubahsuplier', data)
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
                <Label>Kode Suplier</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="kode_suplier" value={this.state.kode_suplier} onChange={this.handleChange} placeholder="Masukan Kode Suplier"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Nama Suplier</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="nama_suplier" value={this.state.nama_suplier} onChange={this.handleChange} placeholder="Masukan Nama Suplier"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>ALamat Suplier</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="Alamat" value={this.state.Alamat} onChange={this.handleChange} placeholder="Masukan Alamat"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>No HP Suplier</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="No_HP" value={this.state.No_HP} onChange={this.handleChange} placeholder="Masukan No HP"/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                       <Button type="button" onClick={() => this.ubahsuplier(this.state.id_suplier)}>Update</Button>
                        </Col>
                    </Row>
                </FormGroup>

                </Col>
            </Form>
        </Container>
        )
    }
}

export default EditSuplierComp