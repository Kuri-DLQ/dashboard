import React from 'react';

const TableInfo = ({messageCount}) => (
  <div>
    <p>{`There are ${messageCount} messages in your Dead Letter Queue`}</p>
  </div>
)
export default TableInfo;