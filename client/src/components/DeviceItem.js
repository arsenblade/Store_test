import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import Image from 'react-bootstrap/esm/Image'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/const'

const DeviceItem = ({device}) => {
  const navigate = useNavigate()

  return (
    <Col md={3} style={{marginBottom: '10px'}} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{width: 150, cursor: 'pointer'}} border={'black'}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
         <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
            <div>Samsung...</div>
            <div>
              <div>
                {device.rating}
              </div>
            </div>
         </div>
         <div>
          {device.name}
         </div>
      </Card>
    </Col>
  )
}

export default DeviceItem