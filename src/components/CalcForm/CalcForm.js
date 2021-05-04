import React from 'react';
import './CalcForm.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CalcForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleSubmit() {
    let canSubmit = !isNaN(this.props.state.initialInvestment) && !isNaN(this.props.state.contribution) && 
                      !isNaN(this.props.state.years) && !isNaN(this.props.state.annualRate);
    if (canSubmit) {
      this.props.handleSubmit();
    }
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }

  render() {
    const parentState = this.props.state;
    // const initialInvestmentInputStyle = isNaN(parentState.initialInvestment) ? "empty-input" : "";
    // const contributionInputStyle = isNaN(parentState.contribution) ? "empty-input" : "";
    // const yearsInputStyle = isNaN(parentState.years) ? "empty-input" : "";
    // const annualRateInputStyle = isNaN(parentState.annualRate) ? "empty-input" : "";
    const emptyInputWarning = (<div className="empty-input-warning">Please enter a value</div>);
    return (
      <Form>
        <Row>
          <Col>
            <label for="initial-investment">Initial investment</label>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <span>$ <Form.Control custom onChange={this.props.handleChangeInitialInvestment} value={parentState.initialInvestment} 
            type="number" className="border rounded input-text" id="initial-investment" /></span>
            {isNaN(parentState.initialInvestment) && emptyInputWarning}
          </Col>
        </Row>
        <Row className="input-label">
          <Col>
            <label for="contribution">Contribution</label>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <span>$ <Form.Control custom onChange={this.props.handleChangeContribution} value={parentState.contribution} 
            type="number" className="border rounded input-text" id="contribution" /></span>
            {isNaN(parentState.contribution) && emptyInputWarning}
          </Col>
          <Col md="auto">
            <Form.Control as="select" custom onChange={this.props.handleChangeContributionRate}>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </Form.Control>
          </Col>
        </Row>
        <Row className="input-label">
          <Col>
            <label for="years">Years invested</label>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <Form.Control custom onChange={this.props.handleChangeYears} value={parentState.years} type="number" 
            className="border rounded input-text" id="years" />
            {isNaN(parentState.years) && emptyInputWarning}
          </Col>
        </Row>
        <Row className="input-label">
          <Col>
            <label for="annual-rate">Annual interest rate</label>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <span><Form.Control custom onChange={this.props.handleChangeAnnualRate} value={parentState.annualRate} type="number" 
            className="border rounded input-text" id="annual-rate" /> %</span>
            {isNaN(parentState.annualRate) && emptyInputWarning}
          </Col>
        </Row>
        <Row className="calculate-button">
          <Col>
            <Button onClick={this.handleSubmit} variant="dark">Calculate</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default CalcForm;