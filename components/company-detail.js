import Head from '../components/head.js'
export default props => (
	<div>
		<Head>
		</Head>
		<h3>{props.company.Name}</h3>
		<p>{props.company.Title}</p>
		<p>{props.company.Location}</p>
		<p>{props.company.Salary}</p>
		<p>{props.company.Relocation}</p>
		<p>{props.company.Stock}</p>
		<p>{props.company.Compensation}:</p>
	</div>
);