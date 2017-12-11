import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
class Facebook extends React.Component{
	render(){
		var company = {Name: 'Facebook', Title: 'Software Engineer', Location: 'Menlo Park, CA', Salary: '110k', Relocation: '10k + 25k', Stock: '150k RSUs, 10% target bonus', Compensation: '190k first year, 160k after'};
		return( 
			<CompanyDetail company = {company}/>
			);
	}
}

export default Facebook;