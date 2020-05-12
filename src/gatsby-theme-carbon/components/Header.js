import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    Cloud Native Reference Implementation - &nbsp;<span>Storefront</span>
  </Header>
);

export default CustomHeader;
