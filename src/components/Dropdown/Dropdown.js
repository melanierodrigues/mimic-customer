import clsx from 'clsx';

/* React */
import React from 'react';
import { useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-down.svg'

/* Style */
import './Dropdown.scss';

const Dropdown = (props) => {
  const {
    data,
    clickOutside,
    fristTitle,
    selected,
    selectedTitle
  } = props;

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

  if (clickOutside && state.active) setState({ ...state, active: !state.active })

  return (
    <div className={clsx('dropdown', {'dropdown--active': state.active} )} key={selected}>
      <div
        onClick={() => toggleDropdown()}
        className={clsx("dropdown__toggle top__border", {'top__border--active': state.active} )}
      >
        <span className="dropdown__title" style={{marginRight: '15px'}}>{selectedTitle !== undefined ? selectedTitle : fristTitle}</span>
        <Arrow className={clsx("arrow", {'arrow--active': state.active} )}/>
      </div>

      <ul className={clsx("dropdown__list", state.active && 'dropdown__list--active')}>
        {data.options.map((option, i) => (
          <li
            key={i}
            onClick={evt => { handleClick(i); selected(i) }}
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
