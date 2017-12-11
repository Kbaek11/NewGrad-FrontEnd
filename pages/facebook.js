import CompanyDetail from '../components/company-detail.js';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import {Form, Text, TextArea} from 'react-form';
import Comment from '../components/comment.js';

class Facebook extends React.Component {
    state = {
        submittedValues: {firstName: '', lastName: '', reply: ''},
    };

    handleSubmit(values) {
        this.setState(values);
    }

    render() {
        var company = {
            Name: 'Facebook',
            Title: 'Software Engineer',
            Location: 'Menlo Park, CA',
            Salary: '110k',
            Relocation: '10k + 25k',
            Stock: '150k RSUs, 10% target bonus',
            Compensation: '190k first year, 160k after',
            Application: 'https://www.facebook.com/careers/university/grads/engineering',
            Process: ['Apply online or through recruiter', 'Phone interview followed by an on campus interview if phone interview goes well', 'Phone interview consists of standard technical screening questions', 'On campus interview consists of one behavioral and one technical interview', 'Timeline ~3 weeks', 'Offer Letter']
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

export default Facebook;
