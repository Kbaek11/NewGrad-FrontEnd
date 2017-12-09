import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Company from '../components/company.js';

const Index = props => (
    <div className="hello">
        <button>Open</button>
        <p>Hello World</p>
        <ul>
            {props.companies.map(({company}) => (
                <li key={company.id}>
                    <Company key={company.id} company={company} />
                </li>
            ))}
        </ul>
    </div>
);

Index.getInitialProps = async function() {
    // const res = await fetch('');
    // const data = await res.json();
    // console.log(`Data fetched. Count: ${data.length}`);
    //

    const companies = [
        {company: {id: 1, status: 'open', name: 'facebook'}},
        {company: {id: 2, status: 'closed', name: 'amazon'}},
        {company: {id: 3, status: 'open', name: 'microsoft'}},
        {company: {id: 4, status: 'closed', name: 'google'}},
    ];

    return {
        companies,
    };
};

export default Index;
