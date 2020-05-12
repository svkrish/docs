import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloud_banner.jpg';

const FirstLeftText = () => <p>Storefront Application</p>;

const FirstRightText = () => (
  <p>
    This is an IBM cloud native reference implementation that shows us the deployment of cloud native applications on Openshift and IKS. It aims to illustrate lot of best practices around how we build and run applications taking full advantage of cloud computing.
  </p>
);

const SecondLeftText = () => <p>IBM Garage</p>;

const SecondRightText = () => (
  <p>
    IBM Garage™ is a bold, comprehensive approach to innovation and transformation that brings designers and developers together with your business and IT stakeholders to quickly create and scale new ideas that can dramatically impact your business.
    <a
      className={calloutLink}
      href="https://www.ibm.com/garage"
    >
      IBM Garage →
    </a>
  </p>
);

const BannerText = () => <h1>STOREFRONT</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
