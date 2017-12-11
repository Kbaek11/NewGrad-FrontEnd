import React from 'react';

import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Company from '../components/company.js';
import Head from '../components/head.js';

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
        function classNames(classes){
            return Object.entries(classes)
            .filter(([key, value]) => value)
            .map(([key, value]) => key)
            .join(' ');
        }
        return (
            <div className="body">
                <Head>
                </Head>
                <button class = 'openButton' onClick={this.toggleOpen.bind(this)}>Open</button>
            <div class ="container">
                    {this.props.companies.map(company => {
                        if (!company.status && !this.state.open) {
                            return;
                        }
                        var companyClasses = classNames({
                            'company-card': true,
                            'open' : company.status
                        })
                        return (
                            <div className = {companyClasses} key={company.id}>
                                <Company key={company.id} company={company}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Index;
