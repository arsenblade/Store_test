import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/esm/ListGroup'
import Card from 'react-bootstrap/esm/Card'

import { Context } from '../index'

const BrandBar = observer( () => {
  const {device} = useContext(Context)
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {device.brands.map(brand => 
      <Card 
        style={{cursor: 'pointer', marginRight: '4px', marginTop: '4px'}}
        key={brand.id}
        className="p-3"
        onClick={() => device.setSelectedBrand(brand)}
        border={brand.id === device.selectedBrand.id ? 'danger' : 'black'}
      >
        {brand.name}
      </Card>)}
    </div>
  )
})

export default BrandBar