import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
class Facebook extends React.Component{
	render(){
		var company = {Name: 'Facebook', Title: '', Location: '', Salary: '', Relocation: '', Stock: '', Compensation: '',};
		return( 
			<CompanyDetail company = {company}/>
			);
	}
}

export default Facebook;