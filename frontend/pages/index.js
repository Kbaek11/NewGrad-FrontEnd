// @flow

import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Title = styled.h1`
    color: red;
    font-size: 50px;
`;

Title.displayName = 'Title';

export default () => (
    <Layout>
        <Title>Hello World!</Title>
    </Layout>
);
