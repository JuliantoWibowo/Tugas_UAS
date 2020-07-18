import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListKnalpotComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            t_knalpot: [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + '/tampilknalpot').then(res => {
            this.setState({
                t_knalpot: res.data.values
            })
        })
    }

    DeleteKnalpot = (id_knalpot) => {
        const { t_knalpot } = this.state
        const data = qs.stringify({
            id_knalpot: id_knalpot
        })

        axios.delete(api + '/hapusknalpot',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }).then(json => {
                if (json.data.status === 200) {
                    this.setState({
                        response: json.data.values,
                        t_knalpot: t_knalpot.filter(t_knalpot => t_knalpot !== id_knalpot),
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
                <h2> Data Knalpot Motor</h2>
                <Alert color="success" style={{ display: 'this.state.display' }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/sparepart/knalpot/tambahknalpot"><Button color="success">Tambah Data</Button> </NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Id Oli</th>
                            <th>Kode Barang</th>
                            <th>Nama Oli</th>
                            <th>Jumlah Oli</th>
                            <th>Harga_knalpot</th>
                            
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.t_knalpot.map(t_knalpot =>
                            <tr key={t_knalpot.id_knalpot}>
                                <td>{t_knalpot.id_knalpot}</td>
                                <td>{t_knalpot.kode_knalpot}</td>
                                <td>{t_knalpot.nama_knalpot}</td>
                                <td>{t_knalpot.jumlah_knalpot}</td>
                                <td>{t_knalpot.Harga_knalpot}</td>
                              
                                <td>

                                    <Link to={
                                        {
                                            pathname: '/sparepart/knalpot/edit',
                                            state: {
                                                id_knalpot: t_knalpot.id_knalpot,
                                                kode_knalpot: t_knalpot.kode_knalpot,
                                                nama_knalpot: t_knalpot.nama_knalpot,
                                                jumlah_knalpot: t_knalpot.jumlah_knalpot,
                                                Harga_knalpot: t_knalpot.Harga_knalpot,
                                                
                                            }
                                        }
                                    }>
                                        <Button> Edit </Button>

                                    </Link>
                                    <Button onClick={() => this.DeleteKnalpot(t_knalpot.id_knalpot)} color="danger">Hapus</Button>


                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>

        )
    }
}

export default ListKnalpotComp 