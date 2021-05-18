(this.webpackJsonpinterest_calculator=this.webpackJsonpinterest_calculator||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(18),l=n.n(s),r=(n(25),n(10)),c=n(11),o=n(8),h=n(13),u=n(12),d=(n(26),n(9)),b=n(7),j=n(6),m=n(20),C=n(1),O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(o.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleSubmit",value:function(){!isNaN(this.props.state.initialInvestment)&&!isNaN(this.props.state.contribution)&&!isNaN(this.props.state.years)&&!isNaN(this.props.state.annualRate)&&this.props.handleSubmit()}},{key:"handleKeyPress",value:function(e){13===e.keyCode&&this.handleSubmit()}},{key:"render",value:function(){var e=this.props.state,t=Object(C.jsx)("div",{className:"empty-input-warning",children:"Please enter a value"});return Object(C.jsxs)(d.a,{children:[Object(C.jsx)(b.a,{children:Object(C.jsx)(j.a,{children:Object(C.jsx)("label",{for:"initial-investment",children:"Initial investment"})})}),Object(C.jsx)(b.a,{children:Object(C.jsxs)(j.a,{md:"auto",children:[Object(C.jsxs)("span",{children:["$ ",Object(C.jsx)(d.a.Control,{custom:!0,onChange:this.props.handleChangeInitialInvestment,value:e.initialInvestment,type:"number",className:"border rounded input-text",id:"initial-investment"})]}),isNaN(e.initialInvestment)&&t]})}),Object(C.jsx)(b.a,{className:"input-label",children:Object(C.jsx)(j.a,{children:Object(C.jsx)("label",{for:"contribution",children:"Contribution"})})}),Object(C.jsxs)(b.a,{children:[Object(C.jsxs)(j.a,{md:"auto",children:[Object(C.jsxs)("span",{children:["$ ",Object(C.jsx)(d.a.Control,{custom:!0,onChange:this.props.handleChangeContribution,value:e.contribution,type:"number",className:"border rounded input-text",id:"contribution"})]}),isNaN(e.contribution)&&t]}),Object(C.jsx)(j.a,{md:"auto",children:Object(C.jsxs)(d.a.Control,{as:"select",custom:!0,onChange:this.props.handleChangeContributionRate,children:[Object(C.jsx)("option",{value:"monthly",children:"Monthly"}),Object(C.jsx)("option",{value:"yearly",children:"Yearly"})]})})]}),Object(C.jsx)(b.a,{className:"input-label",children:Object(C.jsx)(j.a,{children:Object(C.jsx)("label",{for:"years",children:"Years invested"})})}),Object(C.jsx)(b.a,{children:Object(C.jsxs)(j.a,{md:"auto",children:[Object(C.jsx)(d.a.Control,{custom:!0,onChange:this.props.handleChangeYears,value:e.years,type:"number",className:"border rounded input-text",id:"years"}),isNaN(e.years)&&t]})}),Object(C.jsx)(b.a,{className:"input-label",children:Object(C.jsx)(j.a,{children:Object(C.jsx)("label",{for:"annual-rate",children:"Annual interest rate"})})}),Object(C.jsx)(b.a,{children:Object(C.jsxs)(j.a,{md:"auto",children:[Object(C.jsxs)("span",{children:[Object(C.jsx)(d.a.Control,{custom:!0,onChange:this.props.handleChangeAnnualRate,value:e.annualRate,type:"number",className:"border rounded input-text",id:"annual-rate"})," %"]}),isNaN(e.annualRate)&&t]})}),Object(C.jsx)(b.a,{className:"calculate-button",children:Object(C.jsx)(j.a,{children:Object(C.jsx)(m.a,{onClick:this.handleSubmit,variant:"dark",children:"Calculate"})})})]})}}]),n}(i.a.Component),x=(n(31),n(32),n(19)),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={initialInvestment:0,contribution:0,contributionRate:"monthly",years:0,annualRate:0,result:0,totalContribution:0},a.handleChangeInitialInvestment=a.handleChangeInitialInvestment.bind(Object(o.a)(a)),a.handleChangeContribution=a.handleChangeContribution.bind(Object(o.a)(a)),a.handleChangeContributionRate=a.handleChangeContributionRate.bind(Object(o.a)(a)),a.handleChangeYears=a.handleChangeYears.bind(Object(o.a)(a)),a.handleChangeAnnualRate=a.handleChangeAnnualRate.bind(Object(o.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a}return Object(c.a)(n,[{key:"handleChangeInitialInvestment",value:function(e){this.setState({initialInvestment:parseFloat(e.target.value)})}},{key:"handleChangeContribution",value:function(e){this.setState({contribution:parseFloat(e.target.value)})}},{key:"handleChangeContributionRate",value:function(e){this.setState({contributionRate:e.target.value})}},{key:"handleChangeYears",value:function(e){this.setState({years:parseInt(e.target.value)})}},{key:"handleChangeAnnualRate",value:function(e){this.setState({annualRate:parseFloat(e.target.value)})}},{key:"handleSubmit",value:function(){var e=this.state.initialInvestment,t=null;"yearly"===this.state.contributionRate?t=this.state.contribution:"monthly"===this.state.contributionRate&&(t=12*this.state.contribution);for(var n=0;n<this.state.years;++n)e+=t,e*=1+this.state.annualRate/100;this.setState((function(n){return{result:e,totalContribution:t*n.years}}))}},{key:"render",value:function(){return Object(C.jsxs)(x.a,{fluid:!0,className:"app-container",children:[Object(C.jsx)(b.a,{children:Object(C.jsx)(j.a,{className:"d-flex justify-content-center",children:Object(C.jsx)("h1",{children:"Compound Interest Calculator"})})}),Object(C.jsx)(b.a,{id:"calc-form",children:Object(C.jsx)(j.a,{className:"d-flex justify-content-center",children:Object(C.jsx)(O,{state:this.state,handleChangeInitialInvestment:this.handleChangeInitialInvestment,handleChangeContribution:this.handleChangeContribution,handleChangeContributionRate:this.handleChangeContributionRate,handleChangeAnnualRate:this.handleChangeAnnualRate,handleChangeYears:this.handleChangeYears,handleSubmit:this.handleSubmit})})}),Object(C.jsx)(b.a,{className:"results",children:Object(C.jsx)(j.a,{className:"d-flex justify-content-center",children:Object(C.jsxs)("span",{children:["Resulting Value of Investment: $",this.state.result.toFixed(2),Object(C.jsx)("br",{}),"Total Contribution: $",this.state.totalContribution.toFixed(2)]})})})]})}}]),n}(i.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),i(e),s(e),l(e)}))};l.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(p,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.905e7ba8.chunk.js.map