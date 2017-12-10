import Link from 'next/link';

export default props => (
    <Link href={`/${props.company.name}`}>
        <a>{props.company.name}</a>
    </Link>
);
