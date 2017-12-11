import Head from '../components/head.js'
export default props => (
	<div class = "companyPage wrapper">
	<nav>
        <li><a href="/"> Home </a>
         </li>
    </nav>
	<div class = "inner">
	<div>
		<Head>
		</Head>
		

		<h3 class = "Name">{props.company.Name}</h3>
		<p>Title</p>
		<p>{props.company.Title}</p>
		<p>Location</p>
		<p>{props.company.Location}</p>
		<p>Salary</p>
		<p>{props.company.Salary}</p>
		<p>Relocation</p>
		<p>{props.company.Relocation}</p>
		<p>Stock</p>
		<p>{props.company.Stock}</p>
		<p>Stock</p>
		<p>{props.company.Compensation}</p>
		</div>
		</div>
	</div>


);