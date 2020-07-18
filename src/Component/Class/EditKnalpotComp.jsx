import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import qs from 'querystring'


const api = "http://localhost:3001"

class EditKnalpotComp extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            id_knalpot: this.props.location.state.id_knalpot,
            kode_knalpot: this.props.location.state.kode_knalpot,
            nama_knalpot: this.props.location.state.nama_knalpot,
            jumlah_knalpot: this.props.location.state.jumlah_knalpot,
            Harga_knalpot: this.props.location.state.Harga_knalpot,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahknalpot = (id_knalpot) => {
        const data = qs.stringify({
            id_knalpot: id_knalpot,
            kode_knalpot: this.state.kode_knalpot,
            nama_knalpot: this.state.nama_knalpot,
            jumlah_knalpot: this.state.jumlah_knalpot,
            Harga_knalpot: this.state.Harga_knalpot,
        });

        axios.put(api+'/ubahknalpot', data)
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
                        <Input type="text" name="kode_knalpot" value={this.state.kode_knalpot} onChange={this.handleChange} placeholder="Masukan Kode Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Nama Barang</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="nama_knalpot" value={this.state.nama_knalpot} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Jumlah knalpot Motor</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="jumlah_knalpot" value={this.state.jumlah_knalpot} onChange={this.handleChange} placeholder="Masukan jumlah Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Harga knalpot Motor</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="Harga_knalpot" value={this.state.Harga_knalpot} onChange={this.handleChange} placeholder="Masukan Harga knalpot motor"/>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                       <Button type="button" onClick={() => this.ubahknalpot(this.state.id_knalpot)}>Update</Button>
                        </Col>
                    </Row>
                </FormGroup>

                </Col>
            </Form>
        </Container>
        )
    }
}

export default EditKnalpotComp