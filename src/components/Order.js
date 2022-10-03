import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Segment, Icon } from 'semantic-ui-react'
import { Parathas } from '../data/parathas'
import { formatPrice } from '../helpers'

class Order extends Component {
  static propTypes = {
    addToOrder: PropTypes.func.isRequired,
    removeFromOrder: PropTypes.func.isRequired,
    order: PropTypes.array
  }

  renderOrder = key => {
    const paratha = Parathas[key]
    const count = this.props.order[key]

    return (
      <Segment raised key={key}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={paratha.image} />
            </Grid.Column>
            <Grid.Column width={12}>
              <p id='order-paratha-name'>{paratha.name}</p>
              <p>
                <strong>{formatPrice(paratha.price)}</strong>
              </p>
              <p>
                <Icon
                  name='minus'
                  circular
                  id='order-minus'
                  onClick={() => this.props.removeFromOrder(key)}
                />{' '}
                Quantity: {count}
                <Icon
                  name='plus'
                  circular
                  id='order-plus'
                  onClick={() => this.props.addToOrder(key)}
                />
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
  //
  render () {
    const orderIds = Object.keys(this.props.order)

    return <div>{orderIds.map(this.renderOrder)}</div>
  }
}

export default Order
