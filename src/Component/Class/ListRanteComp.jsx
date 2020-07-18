import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListRanteComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            t_rante: [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + '/tampilrante').then(res => {
            this.setState({
                t_rante: res.data.values
            })
        })
    }

    Deleterante = (id_rante) => {
        const { t_rante } = this.state
        const data = qs.stringify({
            id_rante: id_rante
        })

        axios.delete(api + '/hapusrante',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }).then(json => {
                if (json.data.status === 200) {
                    this.setState({
                        response: json.data.values,
                        t_rante: t_rante.filter(t_rante => t_rante !== id_rante),
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
                <h2> Data Rante Motor</h2>
                <Alert color="success" style={{ display: 'this.state.display' }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/sparepart/rante/tambahrante"><Button color="success">Tambah Data</Button> </NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Id rante</th>
                            <th>Kode Barang</th>
                            <th>Nama rante</th>
                            <th>Jumlah rante</th>
                            <th>Harga_rante</th>
                            
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.t_rante.map(t_rante =>
                            <tr key={t_rante.id_rante}>
                                <td>{t_rante.id_rante}</td>
                                <td>{t_rante.kode_rante}</td>
                                <td>{t_rante.nama_rante}</td>
                                <td>{t_rante.jumlah_rante}</td>
                                <td>{t_rante.Harga_rante}</td>
                              
                                <td>

                                    <Link to={
                                        {
                                            pathname: '/sparepart/rante/edit',
                                            state: {
                                                id_rante: t_rante.id_rante,
                                                kode_rante: t_rante.kode_rante,
                                                nama_rante: t_rante.nama_rante,
                                                jumlah_rante: t_rante.jumlah_rante,
                                                Harga_rante: t_rante.Harga_rante,
                                                
                                            }
                                        }
                                    }>
                                        <Button> Edit </Button>

                                    </Link>
                                    <Button onClick={() => this.Deleterante(t_rante.id_rante)} color="danger">Hapus</Button>


                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>

        )
    }
}

export default ListRanteComp 