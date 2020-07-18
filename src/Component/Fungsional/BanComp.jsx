import React from 'react'
import {Link} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function BanComp(props) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKeeQMWvcdc4h6zTvp1YYa-_SNtcanblVvUQ&usqp=CAU" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h3>{props.Nama}</h3></CardTitle>
                    <CardSubtitle>{props.Alamat}</CardSubtitle>
                    <CardText>Ban Motor dengan kualitas yang bagus ada disini.</CardText>
                   
                  
                </CardBody>
               
                <Button color="danger">
                        <Link to = {
                            {
                            pathname : `/sparepart/ban`
                            }
                        }>
                        
                        <b>Cek</b></Link>
                    </Button>
            </Card>
             
        </div>
    )
}

export default BanComp