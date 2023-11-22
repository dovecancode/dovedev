import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'

import { Link } from 'react-router-dom'

function Item({ item }) {
  const { icon, link } = item
  return (
    <>
      <li>
        <Link to={link} target="_blank" rel="noreferrer">
          {<IconContext.Provider value={{ color: 'white', size: '2.5rem', className: 'socialIcon' }}>{icon}</IconContext.Provider>}
        </Link>
      </li>
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object,
}

export default Item
