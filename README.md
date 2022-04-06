## website

### install

from `xav-website` run `npm install`

### serve locally

from `xav-website` run `npm run dev`

### build + deploy

from `xav-website` run `npm run build`, creates/updates `public`

deploy:

from `root` run `firebase deploy` (deploys `public`)

`firebase deploy --only hosting`

deploys `public` dir to `https://my-website-d4807.web.app/` -> `https://www.xavbruggen.com`
