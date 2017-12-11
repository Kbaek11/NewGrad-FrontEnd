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
		</div>

		<div class = "lorum">
		<h3> Job Description</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis in ligula vel ornare. Mauris nec congue nisl, id luctus dui. Suspendisse urna ligula, sollicitudin et nisl in, pretium scelerisque magna. Sed bibendum sapien at interdum mollis. Vivamus mollis vel sapien ut aliquet. Mauris congue enim ac lectus sodales scelerisque. Sed sed quam eget lectus blandit volutpat. Praesent porta a augue sit amet ornare. Pellentesque in efficitur nisl. Maecenas fringilla, ipsum vitae vestibulum suscipit, nisl arcu rhoncus erat, sit amet ornare nisl tellus eu mauris. Ut vel blandit mi. Nullam consectetur, est nec posuere ullamcorper, odio sapien ultricies elit, quis mollis lectus augue gravida risus.
</p>
<p>Quisque consequat ante lacus, et rutrum turpis mattis ac. Praesent convallis tellus id dignissim varius. Nulla ullamcorper semper iaculis. Curabitur venenatis semper nisl. Etiam faucibus risus id leo auctor placerat. Mauris iaculis tempus sapien. Fusce volutpat ligula eget lectus feugiat, consequat elementum ipsum rutrum. Sed ex erat, vestibulum id neque ut, elementum vehicula eros. Sed vehicula vel purus ut ultrices. Nunc sit amet mauris justo.
		</p>
		</div>
		
	</div>
		</div>
		</div>

	


);