import React, { PureComponent } from 'react'
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, Table} from 'reactstrap'
import {Link} from 'react-router-dom'

const api ='http://localhost:3001'

class TambahBanComp extends PureComponent {
    constructor(props){
        super(props)

        this.state ={
            kode_ban: '',
            nama_roda: '',
            jumlah_roda: '',
            Harga_roda: '',
            response: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    AddBan = () => {
        axios.post(api+'/tambahban', {
            kode_ban: this.state.kode_ban,
            nama_roda: this.state.nama_roda,            
            jumlah_roda: this.state.jumlah_roda,
            Harga_roda: this.state.Harga_roda
           
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
                        <Input type="text" name="kode_ban" value={this.state.kode_ban} onChange={this.handleChange} placeholder="Masukan Kode Barang"/>
                        </Col>
                    </Row>
                </FormGroup>
                <Label>Nama Ban Motor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="nama_roda" value={this.state.nama_roda} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Jumlah Ban Motor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="jumlah_roda" value={this.state.jumlah_roda} onChange={this.handleChange} placeholder="Masukan Jumlah Ban Motor"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Harga Ban Motor</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                            <Input type="text" name="Harga_roda" value={this.state.Harga_roda} onChange={this.handleChange} placeholder="Masukan Harga Ban Motor"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                           <Button type="button" onClick={this.AddBan}>Submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        )
    }
}

export default TambahBanComp