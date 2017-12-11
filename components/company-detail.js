import Head from '../components/head.js'
import Link from 'next/link';

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
		

		<div class="column1">
		<h3 class = "Name">{props.company.Name}</h3>
		<p class = "label">Title</p>
		<p>{props.company.Title}</p>
		<p class = "label">Location</p>
		<p>{props.company.Location}</p>
		<p class = "label">Salary</p>
		<p>{props.company.Salary}</p>
		<p class = "label">Relocation</p>
		<p>{props.company.Relocation}</p>
		<p class = "label">Stock</p>
		<p>{props.company.Stock}</p>
		<p class = "label">Compensation</p>
		<p>{props.company.Compensation}</p>
		<p class = "label">
			<Link href={`${props.company.Application}`}>
				<a>Application</a>
			</Link>
		</p>
		</div>

		<div class = "lorum">
			<h3>Interview Process</h3>
			<ol>{props.company.Process.map(step => (
				<li>{step}</li>
			))}</ol>
		</div>
		
	</div>
		</div>
		</div>

	


);