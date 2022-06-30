import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/esm/Image'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceApi'


const DevicePage = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])
  return (
    <Container className="mt-3">
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Col md={4}>
          <Image width={300} height={300} src={device.img ? process.env.REACT_APP_API_URL + device.img : ''} style={{margin: '0 auto', display: 'block'}}/>
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center"
            style={{fontSize: 64}}
            > 
              {device.rating}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{width: 300, height: 300, fontSize: 32, border:'5px solid red', margin: '0 auto'}}
          >
            <h3>От {device.price} руб</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </div>
      <div className='d-flex flex-column' style={{marginTop: '10px', marginLeft: '65px'}}>
        <h2>Xарактеристики</h2>
        {device.info.map((info, index) =>
         <div key={info.id}
              style={{backgroundColor: index % 2 === 0 ? '#CC9900' : '#996600', padding: '10px' }}
         >
          {info.title}: {info.description}
        </div>)}
      </div>
    </Container>
  )
}

export default DevicePage