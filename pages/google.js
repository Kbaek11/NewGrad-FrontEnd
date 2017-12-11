import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import {Form, Text, TextArea} from 'react-form';
import Comment from '../components/comment.js';

class Google extends React.Component {
    state = {
        submittedValues: {firstName: '', lastName: '', reply: ''},
    };

    handleSubmit(values) {
        this.setState(values);
    }

    render() {
        var company = {
            Name: 'Google',
            Title: 'Software Engineer',
            Location: 'Mountain View, CA',
            Salary: '116k',
            Relocation: '50k signing + 10k relocation',
            Stock: '130k over for years',
            Compensation: '226k first year, 166k',
            Application: 'https://careers.google.com/students/',
            Process: ['Apply online or through on campus recruiting', 'Phone screening interview', 'On site interviews include 4-5 whiteboard coding interviews and 1 lunch/ behavioral interview', 'If interviews go well, application is pushed to a hiring committee for final offer decision', 'Timeline 3+ weeks', 'Offer Letter']
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

export default Google;
