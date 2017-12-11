import Link from 'next/link';

export default props => (
    <div>
    <h3><Link href={`/${props.company.name}`}>
        <a>{props.company.name}</a>
    </Link></h3>
    <span class = "circle"></span>
</div>
);

