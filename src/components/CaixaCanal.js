import React from 'react';

function CanalConcat(props) {
  return (
  <>
    <p>{props.site}</p>
    {props.children}
    </>
  );
}

export default CanalConcat;
