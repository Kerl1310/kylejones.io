import React from 'react'
import styled from 'styled-components'

const Tag = ({ className, text }) => {
    return (
        <span id={text} className={className}>
            {text}
        </span>
    )
}

export default styled(Tag)`
  border-radius: 5px 5px 5px;
  border: 1px solid #25303b;
  padding: 2px 6px;
  margin-right: 5px;
  margin-bottom: 10px;
  background-color: #25303b;
  color: white;
  display: inline-block;
`
