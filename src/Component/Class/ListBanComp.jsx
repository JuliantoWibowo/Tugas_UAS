import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListBanComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            t_roda: [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + '/tampilban').then(res => {
            this.setState({
                t_roda: res.data.values
            })
        })
    }

    DeleteBan = (id_roda) => {
        const { t_roda } = this.state
        const data = qs.stringify({
            id_roda: id_roda
        })

        axios.delete(api + '/hapusban',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }).then(json => {
                if (json.data.status === 200) {
                    this.setState({
                        response: json.data.values,
                        t_roda: t_roda.filter(t_roda => t_roda !== id_roda),
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
                <NavLink href="/sparepart/ban/tambahban"><Button color="success">Tambah Data</Button> </NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Id Ban</th>
                            <th>Kode Barang</th>
                            <th>Nama Ban</th>
                            <th>Jumlah Ban</th>
                            <th>Harga Ban</th>
                            
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.t_roda.map(t_roda =>
                            <tr key={t_roda.id_roda}>
                                <td>{t_roda.id_roda}</td>
                                <td>{t_roda.kode_ban}</td>
                                <td>{t_roda.nama_roda}</td>
                                <td>{t_roda.Jumlah_roda}</td>
                                <td>{t_roda.Harga_roda}</td>
                              
                                <td>

                                    <Link to={
                                        {
                                            pathname: '/sparepart/ban/edit',
                                            state: {
                                                id_roda: t_roda.id_roda,
                                                kode_ban: t_roda.kode_ban,
                                                nama_roda: t_roda.nama_roda,
                                                Jumlah_roda: t_roda.Jumlah_roda,
                                                Harga_roda: t_roda.Harga_roda,
                                                
                                            }
                                        }
                                    }>
                                        <Button> Edit </Button>

                                    </Link>
                                    <Button onClick={() => this.DeleteBan(t_roda.id_roda)} color="danger">Hapus</Button>


                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>

        )
    }
}

export default ListBanComp 