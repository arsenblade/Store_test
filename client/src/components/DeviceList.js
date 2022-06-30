import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import Card from 'react-bootstrap/esm/Card'

import { Context } from '../index'
import DeviceItem from './DeviceItem'

const DeviceList = observer( () => {
  const {device} = useContext(Context)
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {device.devices.map(device => 
        <DeviceItem key={device.id} device={device} />  
      )}
    </div>
  )
})

export default DeviceList