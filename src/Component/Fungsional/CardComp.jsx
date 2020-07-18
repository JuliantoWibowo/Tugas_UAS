import React from 'react'
import {Link} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardComp(props) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://scontent.fsrg1-1.fna.fbcdn.net/v/t1.0-9/70439793_2655868081110832_2623458370488631296_o.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_eui2=AeEsW4CifSJx6A9QhXbZbYXnIHjkDvYusHQgeOQO9i6wdB2aRPjFX_TlrxutOPEREZ4yU6wlDEZmlZUuQ2IkDXsS&_nc_ohc=_ICRSae7ch4AX-_dgMd&_nc_ht=scontent.fsrg1-1.fna&oh=c4b5f8ffbea017d58e653e2dc99b8bf2&oe=5F2E0B13" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h3>{props.Nama}</h3></CardTitle>
                    <CardSubtitle>{props.Alamat}</CardSubtitle>
                    <CardText>Kepuasan Pelanggan Merupakan Tugas utama dari kami.</CardText>
                    
                </CardBody>
            </Card>
        </div>
    )
}

export default CardComp