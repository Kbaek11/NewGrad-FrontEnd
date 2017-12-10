import React from 'react';

import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Company from '../components/company.js';

class Index extends React.Component {
    static async getInitialProps() {
        const res = await fetch('http://localhost:4000/db');
        const data = await res.json(res);
        console.log(`Data fetched. Count: ${data.results}`);

        return {
            companies: data.results,
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
                    {this.props.companies.map(company => {
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
