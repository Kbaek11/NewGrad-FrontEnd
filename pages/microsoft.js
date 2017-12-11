import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
class Microsoft extends React.Component{
	render(){
		var company = {Name: 'Microsoft', Title: '', Location: '', Salary: '', Relocation: '', Stock: '', Compensation: '',};
		return( 
			<CompanyDetail company = {company}/>
			);
	}
}

export default Microsoft;