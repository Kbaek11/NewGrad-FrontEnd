import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
class Microsoft extends React.Component{
	render(){
		var company = {Name: 'Microsoft', Title: 'Software Engineer', Location: 'Redmond, WA', Salary: '108k', Relocation: '25k sign on, 5k relocation', Stock: '120k/3.5 stock, 20% annual bonus', Compensation: '171.4 first year, 164k recurring',};
		return( 
			<CompanyDetail company = {company}/>
			);
	}
}

export default Microsoft;