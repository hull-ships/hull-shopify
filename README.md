
# Hull Shopify Ship.

Integrates Hull with [Shopify](http://shopify.com)

[DEMO](http://hull-ships.github.io/hull-shopify/)

---

### Using :
- Go to your Hull dashboard > Ships > Add new
- Paste the following URL : `https://hull-ships.github.io/hull-shopify/`
- Configure your selectors in the customize panel
- Add your ship to a Platform.

### Developing : 

- Fork
- Install

```sh
npm install -g gulp
npm install
gulp
```

##### Local Setup
- You need a publicly-hosted dev version. The easiest way is with Ngrok.
- Ships are pre-configured to use the name in `package.json` as a subdomain if a `NGROK_AUTHTOKEN` is present in the environment.

> For instance, this ship will be accessible on on `https://hull-shopify.ngrok.com/`

##### Hull Setup

- Create a ship as usual : "Ships > Add New". Enter `https://hull-shopify.ngrok.com/`.
- Go to the "Advanced" Tab, enter the public dev URL for your fork in "Ship URL" and save.
- Create a platform with your public demo url: `https://hull-shopify.ngrok.com/index.html`
- Copy Platform Snippet in `index.html`
- Embed the ship in the platform using a selector that can be found in your `index.html`
- Visit `https://hull-shopify.ngrok.com/index.html`
