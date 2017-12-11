import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
class Google extends React.Component{
	render(){
		var company = {Name: 'Google', Title: 'Software Engineer', Location: 'Mountain View, CA', Salary: '116k', Relocation: '50k signing + 10k relocation', Stock: '130k over for years', Compensation: '226k first year, 166k',};
		return( 
			<CompanyDetail company = {company}/>
			);
	}
}

export default Google;
