import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            t_karyawan: [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                t_karyawan: res.data.values
            })
        })
    }

    DeleteKaryawan = (id_karyawan) => {
        const { t_karyawan } = this.state
        const data = qs.stringify({
            id_karyawan: id_karyawan
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }).then(json => {
                if (json.data.status === 200) {
                    this.setState({
                        response: json.data.values,
                        t_karyawan: t_karyawan.filter(t_karyawan => t_karyawan !== id_karyawan),
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
                <h2> Data Karyawan</h2>
                <Alert color="success" style={{ display: 'this.state.display' }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/Karyawan/tambah"><Button color="success">Tambah Data</Button> </NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Id Karyawan</th>
                            <th>Nik</th>
                            <th>Nama Karyawan</th>
                            <th>Email</th>
                            <th>Jenis Kelamin</th>
                            <th>Jabatan</th>
                            <th>Alamat</th>
                            <th>Password</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.t_karyawan.map(t_karyawan =>
                            <tr key={t_karyawan.id_karyawan}>
                                <td>{t_karyawan.id_karyawan}</td>
                                <td>{t_karyawan.nik}</td>
                                <td>{t_karyawan.nama}</td>
                                <td>{t_karyawan.email}</td>
                                <td>{t_karyawan.jenis_kelamin}</td>
                                <td>{t_karyawan.jabatan}</td>
                                <td>{t_karyawan.Alamat}</td>
                                <td>{t_karyawan.password}</td>
                                <td>

                                    <Link to={
                                        {
                                            pathname: '/karyawan/edit',
                                            state: {
                                                id_karyawan: t_karyawan.id_karyawan,
                                                nik: t_karyawan.nik,
                                                nama: t_karyawan.nama,
                                                email: t_karyawan.email,
                                                jenis_kelamin: t_karyawan.jenis_kelamin,
                                                jabatan: t_karyawan.jabatan,
                                                Alamat: t_karyawan.Alamat,
                                                password: t_karyawan.password

                                            }
                                        }
                                    }>
                                        <Button> Edit </Button>
                                        


                                    </Link>
                                    <Button onClick={() => this.DeleteKaryawan(t_karyawan.id_karyawan)} color="danger">Hapus</Button>


                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>

        )
    }
}

export default ListComp 