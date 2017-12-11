import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import {Form, Text, TextArea} from 'react-form';
import Comment from '../components/comment.js';

class Microsoft extends React.Component {
    state = {
        submittedValues: {firstName: '', lastName: '', reply: ''},
    };

    handleSubmit(values) {
        this.setState(values);
    }

    render() {
        var company = {
            Name: 'Microsoft',
            Title: 'Software Engineer',
            Location: 'Redmond, WA',
            Salary: '108k',
            Relocation: '25k sign on, 5k relocation',
            Stock: '120k/3.5 stock, 20% annual bonus',
            Compensation: '171.4 first year, 164k recurring',
            Application: 'https://careers.microsoft.com/students/apply',
            Process: ['Apply online or through on campus recruiting', 'Phone screening interview', 'On site interviews include 3-4 technical interviews followed by 1 company culture Q&A and 1 behavioral interview', 'Timeline 2+ weeks', 'Offer Letter']
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

export default Microsoft;
