import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListSuplierComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            t_suplier: [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + '/tampilsuplier').then(res => {
            this.setState({
                t_suplier: res.data.values
            })
        })
    }

    Deletesuplier = (id_suplier) => {
        const { t_suplier } = this.state
        const data = qs.stringify({
            id_suplier: id_suplier
        })

        axios.delete(api + '/hapussuplier',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }).then(json => {
                if (json.data.status === 200) {
                    this.setState({
                        response: json.data.values,
                        t_suplier: t_suplier.filter(t_suplier => t_suplier !== id_suplier),
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
                <h2> Data suplier Motor</h2>
                <Alert color="success" style={{ display: 'this.state.display' }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/suplier/tambahsuplier"><Button color="success">Tambah Data</Button> </NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Id suplier</th>
                            <th>Kode Suplier</th>
                            <th>Nama suplier</th>
                            <th>Alamat</th>
                            <th>No_HP</th>
                            
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.t_suplier.map(t_suplier =>
                            <tr key={t_suplier.id_suplier}>
                                <td>{t_suplier.id_suplier}</td>
                                <td>{t_suplier.kode_suplier}</td>
                                <td>{t_suplier.nama_suplier}</td>
                                <td>{t_suplier.Alamat}</td>
                                <td>{t_suplier.No_HP}</td>
                              
                                <td>

                                    <Link to={
                                        {
                                            pathname: '/suplier/edit',
                                            state: {
                                                id_suplier: t_suplier.id_suplier,
                                                kode_suplier: t_suplier.kode_suplier,
                                                nama_suplier: t_suplier.nama_suplier,
                                                Alamat: t_suplier.Alamat,
                                                No_HP: t_suplier.No_HP,
                                                
                                            }
                                        }
                                    }>
                                        <Button> Edit </Button>

                                    </Link>

                                    <Button onClick={() => this.Deletesuplier(t_suplier.id_suplier)} color="danger">Hapus</Button>

                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>

        )
    }
}

export default ListSuplierComp 