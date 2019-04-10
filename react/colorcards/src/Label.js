import React from 'react';

export const Label = ({color, onColorChange}) => {
  let labelStyle = {
    fontFamily:"sans-serif",
    fontWeight:"Bold",
    padding:13,
    margin:0
  }
  return(
    <p style={labelStyle} onClick={onColorChange}>{color}</p>
  )
}
