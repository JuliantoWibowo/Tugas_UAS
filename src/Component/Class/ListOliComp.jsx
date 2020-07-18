import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListOliComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            t_oli: [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + '/tampiloli').then(res => {
            this.setState({
                t_oli: res.data.values
            })
        })
    }

    Deleteoli = (id_oli) => {
        const { t_oli } = this.state
        const data = qs.stringify({
            id_oli: id_oli
        })

        axios.delete(api + '/hapusoli',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }).then(json => {
                if (json.data.status === 200) {
                    this.setState({
                        response: json.data.values,
                        t_oli: t_oli.filter(t_oli => t_oli !== id_oli),
                        display: 'block'
                    })
                    //this.props.history.push('/karyawan')
                } else {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
            })
    }


    render() {
        return (
            <Container>
                <h2> Data Ban Motor</h2>
                <Alert color="success" style={{ display: 'this.state.display' }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/sparepart/oli/tambaholi"><Button color="success">Tambah Data</Button> </NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Id Oli</th>
                            <th>Kode Barang</th>
                            <th>Nama Oli</th>
                            <th>Jumlah Oli</th>
                            <th>Harga Oli</th>
                            
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.t_oli.map(t_oli =>
                            <tr key={t_oli.id_oli}>
                                <td>{t_oli.id_oli}</td>
                                <td>{t_oli.kode_oli}</td>
                                <td>{t_oli.nama_oli}</td>
                                <td>{t_oli.jumlah_oli}</td>
                                <td>{t_oli.Harga}</td>
                              
                                <td>

                                    <Link to={
                                        {
                                            pathname: '/sparepart/oli/edit',
                                            state: {
                                                id_oli: t_oli.id_oli,
                                                kode_oli: t_oli.kode_oli,
                                                nama_roda: t_oli.nama_oli,
                                                jumlah_roda: t_oli.jumlah_oli,
                                                Harga_roda: t_oli.Harga,
                                                
                                            }
                                        }
                                    }>
                                        <Button> Edit </Button>

                                    </Link>

                                    <Button onClick={() => this.Deleteoli(t_oli.id_oli)} color="danger">Hapus</Button>

                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>

        )
    }
}

export default ListOliComp 