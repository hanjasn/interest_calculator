import React from 'react';
import './CalcForm.css';
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
    const initialInvestmentInputStyle = isNaN(parentState.initialInvestment) ? "empty-input" : "";
    const contributionInputStyle = isNaN(parentState.contribution) ? "empty-input" : "";
    const yearsInputStyle = isNaN(parentState.years) ? "empty-input" : "";
    const annualRateInputStyle = isNaN(parentState.annualRate) ? "empty-input" : "";
    const emptyInputText = (<div className="empty-input-text">Please enter a value</div>);
    return (
      <div>
        <Row>
          <Col>
            <label for="initial-investment">Initial investment</label>
          </Col>
        </Row>
        <Row>
          <span>$</span>
          <Col>
            <input onChange={this.props.handleChangeInitialInvestment} value={parentState.initialInvestment} type="number" 
            className={initialInvestmentInputStyle} id="initial-investment" />
            {isNaN(parentState.initialInvestment) && emptyInputText}
          </Col>
        </Row>
        <Row className="input-label">
          <Col>
            <label for="contribution">Contribution</label>
          </Col>
        </Row>
        <Row>
          <span>$</span>
          <Col md="auto">
            <input onChange={this.props.handleChangeContribution} value={parentState.contribution} type="number" 
            className={contributionInputStyle} id="contribution" />
            {isNaN(parentState.contribution) && emptyInputText}
          </Col>
          <Col>
            <select onChange={this.props.handleChangeContributionRate}> {/*No name attribute because not using a form*/}
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </Col>
        </Row>
        <Row className="input-label">
          <Col>
            <label for="years">Years invested</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <input onChange={this.props.handleChangeYears} value={parentState.years} type="number" className={yearsInputStyle} d="years" />
            {isNaN(parentState.years) && emptyInputText}
          </Col>
        </Row>
        <Row className="input-label">
          <Col>
            <label for="annual-rate">Annual interest rate</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <input onChange={this.props.handleChangeAnnualRate} value={parentState.annualRate} type="number" className={annualRateInputStyle} 
            id="annual-rate" />
            <span> %</span>
            {isNaN(parentState.annualRate) && emptyInputText}
          </Col>
        </Row>
        <Row className="calculate-button">
          <Col>
            <Button onClick={this.handleSubmit} variant="dark">Calculate</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CalcForm;