import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
class Google extends React.Component{
	render(){
		var company = {Name: 'Google', Title: '', Location: '', Salary: '', Relocation: '', Stock: '', Compensation: '',};
		return( 
			<CompanyDetail company = {company}/>
			);
	}
}

export default Google;
