module.exports = {
  siteMetadata: {
    title: 'IBM Garage Cloud Native Reference Implementation',
    description: 'IBM Garage Cloud Native Reference Implementation for Store Front microservice application',
    keywords: 'ibm,garage,cloud-native,cloudnative,native,cloud,cp4apps,kubernetes,containers,ci,cd,cicd,tekton,argocd,appsody,gitops,spring,microprofile,quarkus',
  },
  pathPrefix: "/",
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/ibm-garage-ref-storefront/docs',
          subDirectory: '/'
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: './src/data'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149377589-8",
        head: true
      }
    }
  ]
};
