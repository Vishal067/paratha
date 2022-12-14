import React from 'react'
import { Menu } from 'semantic-ui-react'

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <p>
        © 2022 Pizzas. All rights reserved. Designed by{' '}
        <span role='img' aria-label='pizza'>
          <a
            href='https://github.com/Vishal067'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vishal
          </a>
        </span>
      </p>
    </Menu.Item>
  </Menu>
)

export default Footer
