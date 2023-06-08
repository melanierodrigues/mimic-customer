import clsx from 'clsx';
import { useState } from 'react';

import data from './Dropdown.data.json';

import './Dropdown.css';

const Dropdown = () => {
  const { options, title } = data

  const [state, setState] = useState({
    open: false,
    selected: -1
  })

  const toggleDropdown = () => {
    setState({ ...state, active: !state.active })
  }

  const handleClick = (i) => {
    setState({
      ...state,
      active: !state.active,
      selected: i
    })
  }

  return (
    <div className="dropdown">
      <div
        onClick={() => toggleDropdown()}
        className="dropdown__toggle dropdown__list-item"
      >
        {title}
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </div>

      <ul className={clsx("dropdown__list", state.active && 'dropdown__list--active')}>
        {options.map((option, i) => (
          <li
            key={i}
            onClick={evt => handleClick(i)}
            className={clsx("dropdown__list-item", i === state.selected && 'dropdown__list-item--active')}
          >
            {option}
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Dropdown
