import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'

function Item({ item }) {
  const { icon, link } = item
  return (
    <>
      <li>
        <a href={link} target="_blank" rel="noreferrer">
          {<IconContext.Provider value={{ color: 'white', size: '2.5rem', className: 'socialIcon' }}>{icon}</IconContext.Provider>}
        </a>
      </li>
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object,
}

export default Item
