import React from 'react';
import Button from 'react-bootstrap/Button';
// import kuriLogo from '../assets/SVG/color/graphic_gradient.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TableInfo = ({ messageCount, onDeleteAll, onResendAll }) => {
  return (
    <div className="table-info">
      <Container>
        <Row>
          <Col xs={8}>
            <h2 className="table-info-text">{`Number of messages in the DLQ: ${messageCount}`}</h2>
          </Col>
          <Col>
          <Button className="table-info-button delete" variant="primary" onClick={onDeleteAll}>Delete All</Button>
          <Button className="table-info-button redrive" variant="primary" onClick={onResendAll}>Redrive All</Button>
          </Col>
        </Row>
      </Container>

      {/* <a href="#/">
              <img className="kuri-icon" src={kuriLogo} alt="Kuri" />
          </a> */}

      <div className="clear-div"></div>

    </div>
  )
}


export default TableInfo;