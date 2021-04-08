import React from 'react'

const Categories = ({category, handleChange, checked}) => {
    return (
<span key={category}>
            <input
              key={category}
              type="checkbox"
              name={category}
              checked={checked}
              onChange={(event) =>
                handleChange(event, category)
              }
            />
            {category}
          </span>
    )
}

export default Categories
