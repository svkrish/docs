import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Github Organization',
    href: 'https://github.com/ibm-garage-ref-storefront',
  },
  {
    title: 'Zenhub Planning',
    href: 'https://github.com/ibm-garage-ref-storefront/planning#zenhub',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
