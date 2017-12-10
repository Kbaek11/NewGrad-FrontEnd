import React from 'react';

import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Company from '../components/company.js';

class Index extends React.Component {
    static async getInitialProps() {
        // const res = await fetch('');
        // const data = await res.json();
        // console.log(`Data fetched. Count: ${data.length}`);
        //

        const companies = [
            {company: {id: 1, status: true, name: 'facebook'}},
            {company: {id: 2, status: false, name: 'amazon'}},
            {company: {id: 3, status: true, name: 'microsoft'}},
            {company: {id: 4, status: false, name: 'google'}},
        ];

        return {
            companies,
        };
    }

    state = {
        open: true,
    };

    toggleOpen() {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        return (
            <div className="hello">
                <button onClick={this.toggleOpen.bind(this)}>Open</button>
                <p>Hello World</p>
                <ul>
                    {this.props.companies.map(({company}) => {
                        if (!company.status && !this.state.open) {
                            return;
                        }
                        return (
                            <li key={company.id}>
                                <Company key={company.id} company={company} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Index;
