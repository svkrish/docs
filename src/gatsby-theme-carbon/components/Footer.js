import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const currentYear = new Date().getFullYear();

const Content = ({ buildTime }) => (
  <>
    <p>
        Have questions? open an issue on{' '}
        <a
            style={{ textDecoration: 'underline' }}
            href="https://github.com/ibm-garage-ref-storefront/docs/issues/new">
            GitHub.
        </a>
    </p>
    <p>
          Built with{' '}
          <a href="https://github.com/carbon-design-system/gatsby-theme-carbon">
            Gatsby Theme Carbon
          </a>
          .
          <br />
          Copyright © {currentYear} IBM
    </p>
    <p>
      Site's build time: {buildTime}
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/', linkText: 'IBM' },
    { href: 'https://www.ibm.com/privacy/us/en/', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of Use' },
  ],
  secondCol: [
    { linkText: 'Contributors' }
  ]
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
