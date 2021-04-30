import React from "react";
import PropTypes from 'prop-types';
import CalcForm from '../CalcForm/CalcForm'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contribution: 0,
      annualRate: 0,
      years: 0,
      result: 0
    };
    this.handleChangeContribution = this.handleChangeContribution.bind(this);
    this.handleChangeAnnualRate = this.handleChangeAnnualRate.bind(this);
    this.handleChangeYears = this.handleChangeYears.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleEnter);
  }

  handleChangeContribution(e) {
    this.setState({
      contribution: parseFloat(e.target.value)
    });
  }

  handleChangeAnnualRate(e) {
    this.setState({
      annualRate: parseFloat(e.target.value)
    });
  }

  handleChangeYears(e) {
    this.setState({
      years: parseInt(e.target.value)
    });
  }

  handleSubmit() {
    let calculation = 0;
    for (let i = 0; i < this.state.years; ++i) {
      calculation += this.state.contribution;
      calculation *= 1 + (this.state.annualRate / 100);
    }
    this.setState({
      result: calculation
    });
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }
  
  render() {
    return (
      <Container className="main-container">
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Interest Calculator</h1>
          </Col>
        </Row>
        <Row id="calc-form">
          <Col className="d-flex justify-content-center">
            <CalcForm handleChangeContribution={this.handleChangeContribution} handleChangeAnnualRate={this.handleChangeAnnualRate} handleChangeYears={this.handleChangeYears} handleSubmit={this.handleSubmit} />
          </Col>
        </Row>
        <Row id="result">
          <Col className="d-flex justify-content-center">
            <p>${this.state.result.toFixed(2)}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
App.propTypes = {
  contribution: PropTypes.number,
  annualRate: PropTypes.number,
  years: PropTypes.number,
  showResult: PropTypes.bool,
  result: PropTypes.number
};

export default App;