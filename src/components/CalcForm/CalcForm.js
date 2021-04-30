import './CalcForm.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const CalcForm = function(props) {
  return (
    <div>
      <Row>
        <Col>
          <label for="contribution">Contribution</label>
        </Col>
      </Row>
      <Row>
        <Col>
          <input onChange={props.handleChangeContribution} type="number" id="contribution" />
        </Col>
      </Row>
      <Row className="input-label">
        <Col>
          <label for="annual-rate">Annual Interest Rate %</label>
        </Col>
      </Row>
      <Row>
        <Col>
          <input onChange={props.handleChangeAnnualRate} type="number" id="annual-rate" />
        </Col>
      </Row>
      <Row className="input-label">
        <Col>
          <label for="years">Number of Years</label>
        </Col>
      </Row>
      <Row>
        <Col>
          <input onChange={props.handleChangeYears} type="number" id="years" />
        </Col>
      </Row>
      <Row className="calculate-button">
        <Col className="d-flex justify-content-center">
          <Button onClick={props.handleSubmit} variant="dark">Calculate</Button>
        </Col>
      </Row>
    </div>
  );
};

export default CalcForm;