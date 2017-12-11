import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
class Amazon extends React.Component{
	render(){
		var company = {Name: 'Amazon', Title: 'Software Development Engineer', Location: 'Seattle, Washington', Salary: '106k', Relocation: '35.5k first year + 30.5k second year', Stock: ' 65k stock, 5/15/40/40 vesting schedule', Compensation: '~145k first year (add ~15k for premium regions)',};
		return( 
			<CompanyDetail company = {company}/>
			);
	}
}

export default Amazon;