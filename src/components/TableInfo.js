import React from 'react';
import Button from 'react-bootstrap/Button';
import kuriLogo from '../assets/SVG/color/graphic_gradient.svg';

const TableInfo = ({ messageCount, onDeleteAll, onResendAll }) => {
  return (
    <div className="table-info">
            <a href="#/">
        <img className="kuri-icon" src={kuriLogo} alt="Kuri" />
    </a>
      <p className="table-info-text">{`There are ${messageCount} messages in the dead letter queue`}</p>
      <div className="clear-div"></div>
      <Button className="table-info-button delete" variant="primary" onClick={onDeleteAll}>Delete All</Button>
      <Button className="table-info-button redrive" variant="primary" onClick={onResendAll}>Redrive All</Button>
    </div>
  )
}


export default TableInfo;