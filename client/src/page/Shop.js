import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchBrands, fetchDevice, fetchTypes } from '../http/deviceApi'
import Pages from '../components/Pages'

const Shop = observer( () => {
  const {device} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrand(data))
    fetchDevice(null, null, 1, 2).then(data => {
      device.setDevice(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchDevice(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
      device.setDevice(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand, device])

  return (
    <Container>
      <div style={{marginTop: '10px', display: 'flex'}}>
        <Col md={3} style={{marginRight: '10px'}}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </div>
    </Container>
  )
})

export default Shop