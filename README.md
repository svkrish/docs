<h1 align="center">
Storefront
</h1>

## Storefront

### Install dependencies

```
npm install
```

### Local Development

After forking the repository, you can run your changes locally using the following:

```
npm run dev
```

You can access your local changes via [localhost:8000](http://localhost:8000).

### Publish Content

Currently, the content is published to the GitHub pages site through the `gh-pages` branch
using the `gh-pages` npm module. All of the details for handling the publishing are covered within
the deploy script. The deploy can be run using the following:

```
npm run deploy
```

**Note:** There is a time delay between when the deploy process completes and when the
content is available on the published site.
