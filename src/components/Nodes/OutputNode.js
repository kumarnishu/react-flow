import React from 'react';

import Handle from '../../components/Handle';

const nodeStyles = {
  background: '#55dd99',
  padding: 10,
  borderRadius: 5,
  width: 150
};

export default ({ data, style }) => (
  <div style={{ ...nodeStyles, ...style }}>
    <Handle type="target" position="top" />
    {data.label}
  </div>
);