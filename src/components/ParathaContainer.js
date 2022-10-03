import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import { Parathas } from '../data/parathas'
import Paratha from './Paratha'

const ParathaContainer = props => {
  let parathas = Object.keys(Parathas).map(key => {
    return (
      <Paratha
        key={key}
        details={Parathas[key]}
        addToOrder={props.addToOrder}
        index={key}
      />
    )
  })
  return (
    <Grid stackable columns={3}>
      {parathas}
    </Grid>
  )
}

ParathaContainer.propTypes = {
  addToOrder: PropTypes.func.isRequired
}

export default ParathaContainer
