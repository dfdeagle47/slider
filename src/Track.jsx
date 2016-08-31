import React from 'react';

const Track = ({ className, included, vertical, offset, length }) => {
  const style = {
    visibility: included ? 'visible' : 'hidden',
  };
  if (vertical) {
    style.bottom = `${offset}%`;
    style.height = `${length}%`;
  } else {
    style.left = `${offset}%`;
    style.transform = `scale(${length/100}, 1)`;
  }
  return <div className={className} style={style} />;
};

export default Track;
