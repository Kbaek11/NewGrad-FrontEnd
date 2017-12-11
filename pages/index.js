import React from 'react';

import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Company from '../components/company.js';
import Head from '../components/head.js';

class Index extends React.Component {
    static async getInitialProps() {
        const res = await fetch(
            'https://salty-everglades-67914.herokuapp.com/db',
        );
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
        function classNames(classes) {
            return Object.entries(classes)
                .filter(([key, value]) => value)
                .map(([key, value]) => key)
                .join(' ');
        }
        var openClasses = classNames({
            openButton: true,
            activeButton: this.state.open,
        });
        return (
            <div class="wrapper background">
                <div className="body">
                    <Head />
                    <nav>
                        <li>
                            <a href="/"> Home </a>
                        </li>
                    </nav>
                    <center>
                        <h1> New Grad </h1>
                    </center>
                    <center>
                        <p> New Grad is an innovative website designed to be a “one stop shop” for recent college graduates who are seeking jobs in the technology industry. Specifically aimed at software engineers, New Grad provides a job description, salary & benefits information, and valuable insight into each company’s interview process. Click the “open” button below to view the companies who are still accepting applications! </p>
                    </center>
                    <div class="wrapper">
                        <div class="inner button">
                            <button
                                class={openClasses}
                                onClick={this.toggleOpen.bind(this)}>
                                Open
                            </button>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="container inner">
                            {this.props.companies.map(company => {
                                if (company.status == '0' && !this.state.open) {
                                    return;
                                }
                                var companyClasses = classNames({
                                    'company-card': true,
                                    open: company.status,
                                });
                                return (
                                    <div
                                        className={companyClasses}
                                        key={company.id}>
                                        <Company
                                            key={company.id}
                                            company={company}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
