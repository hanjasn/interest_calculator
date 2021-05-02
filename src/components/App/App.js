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
      initialInvestment: 0,
      contribution: 0,
      contributionRate: "monthly", // monthly, yearly
      years: 0,
      annualRate: 0,
      result: 0,
      totalContribution: 0
    };
    this.handleChangeInitialInvestment = this.handleChangeInitialInvestment.bind(this);
    this.handleChangeContribution = this.handleChangeContribution.bind(this);
    this.handleChangeContributionRate = this.handleChangeContributionRate.bind(this);
    this.handleChangeYears = this.handleChangeYears.bind(this);
    this.handleChangeAnnualRate = this.handleChangeAnnualRate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInitialInvestment(e) {
    this.setState({
      initialInvestment: parseFloat(e.target.value)
    });
  }

  handleChangeContribution(e) {
    this.setState({
      contribution: parseFloat(e.target.value)
    });
  }

  handleChangeContributionRate(e) {
    this.setState({
      contributionRate: e.target.value
    });
  }

  handleChangeYears(e) {
    this.setState({
        years: parseInt(e.target.value)
      });
  }

  handleChangeAnnualRate(e) {
    this.setState({
      annualRate: parseFloat(e.target.value)
    });
  }

  handleSubmit() {
    let calculation = this.state.initialInvestment;
    let contribution = null;
    if (this.state.contributionRate === "yearly") {
      contribution = this.state.contribution;
    } else if (this.state.contributionRate === "monthly") {
      contribution = 12 * this.state.contribution;
    }
    for (let i = 0; i < this.state.years; ++i) {
      calculation += contribution;
      calculation *= 1 + (this.state.annualRate / 100);
    }
    this.setState(function(state) {
      return {
        result: calculation,
        totalContribution: contribution * state.years
      };
    });
  }
  
  render() {
    return (
      <Container className="app-container">
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Compound Interest Calculator</h1>
          </Col>
        </Row>
        <Row id="calc-form">
          <Col className="d-flex justify-content-center">
            <CalcForm state={this.state} handleChangeInitialInvestment={this.handleChangeInitialInvestment} handleChangeContribution={this.handleChangeContribution} 
            handleChangeContributionRate={this.handleChangeContributionRate} handleChangeAnnualRate={this.handleChangeAnnualRate} 
            handleChangeYears={this.handleChangeYears} handleSubmit={this.handleSubmit}/>
          </Col>
        </Row>
        <Row className="results">
          <Col className="d-flex justify-content-end" md={7}>
            Resulting Value of Investment:<br />
            Total Contribution: 
          </Col>
          <Col className="d-flex justify-content-start" md="auto">
            ${this.state.result.toFixed(2)}<br />
            ${this.state.totalContribution.toFixed(2)}
          </Col>
        </Row>
      </Container>
    );
  }
}
App.propTypes = {
  initialInvestment: PropTypes.number,
  contribution: PropTypes.number,
  contributionRate: PropTypes.string,
  years: PropTypes.number,
  annualRate: PropTypes.number,
  result: PropTypes.number,
};

export default App;