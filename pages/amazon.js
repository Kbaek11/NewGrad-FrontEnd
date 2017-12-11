import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import {Form, Text, TextArea} from 'react-form';
import Comment from '../components/comment.js';

class Amazon extends React.Component {
    state = {
        submittedValues: {firstName: '', lastName: '', reply: ''},
    };

    handleSubmit(values) {
        this.setState(values);
    }

    render() {
        var company = {
            Name: 'Amazon',
            Title: 'Software Development Engineer',
            Location: 'Seattle, Washington',
            Salary: '106k',
            Relocation: '35.5k first year + 30.5k second year',
            Stock: ' 65k stock, 5/15/40/40 vesting schedule',
            Compensation: '~145k first year (add ~15k for premium regions)',
            Application: 'https://www.amazon.jobs/en/teams/university-tech-full-time',
            Process: ['Apply online or through university', '2 phone interviews or on campus', 'Local Office for in person interview', 'Both technical and behavioral questions', 'Timeline 2+ weeks', 'Offer Letter']
        };
        return (
            <div>
                <CompanyDetail company={company} />
                <Form
                    onSubmit={submittedValues =>
                        this.handleSubmit({submittedValues})}>
                    {formApi => (
                        <form onSubmit={formApi.submitForm} id="form2">
                            <label htmlFor="firstName">First Name</label>
                            <Text field="firstName" id="firstName" />
                            <label htmlFor="lastName">Last Name</label>
                            <Text field="lastName" id="lastName" />
                            <label htmlFor="reply">Comment</label>
                            <TextArea field="reply" id="reply" />
                            <button type="submit">Submit</button>
                        </form>
                    )}
                </Form>
                <Comment
                    key={this.state.submittedValues.firstname}
                    submittedValues={this.state.submittedValues}
                />
            </div>
        );
    }
}

export default Amazon;
