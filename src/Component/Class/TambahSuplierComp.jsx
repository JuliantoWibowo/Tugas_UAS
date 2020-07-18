import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'

const api ='http://localhost:3001'

class TambahSuplierComp extends PureComponent {
    constructor(props){
        super(props)

        this.state ={
            kode_suplier:'',
            nama_suplier: '',
            Alamat: '',
            No_HP: '',
            response: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addsuplier = () => {
        axios.post(api+'/tambahsuplier', {
            kode_suplier: this.state.kode_suplier,
            nama_suplier: this.state.nama_suplier,
            Alamat: this.state.Alamat,
            No_HP: this.state.No_HP
           
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
                    <Label>Kode Suplier</Label>
                <FormGroup>
                    <Row>
                        <Col>
                        <Input type="text" name="kode_suplier" value={this.state.kode_suplier} onChange={this.handleChange} placeholder="Masukan Kode Suplier"/>
                        </Col>
                    </Row>
                </FormGroup>
                    <Label>Nama suplier </Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="nama_suplier" value={this.state.nama_suplier} onChange={this.handleChange} placeholder="Masukan Nama Suplier"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Alamat Suplier</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="Alamat" value={this.state.Alamat} onChange={this.handleChange} placeholder="Masukan Alamat Suplier"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>No_HP Suplier</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="No_HP" value={this.state.No_HP} onChange={this.handleChange} placeholder="Masukan No_HP Suplier"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                           <Button type="button" onClick={this.Addsuplier}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        )
    }
}

export default TambahSuplierComp