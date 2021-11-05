## Marketing UI library

This UI library represents a set of instructions, rules, styles and components needed in order to build Calendly React
applications.

### Start

1. Install node dependencies:

```$xslt
npm install
```

2. Run storybook using the following command:

```$xslt
npm run storybook
```

### Usage

1. The library should be installed as a private NPM module. To be able to install it a user must login to NPM and have
   access to the Calendly NPM.

   https://docs.npmjs.com/logging-in-to-an-npm-enterprise-registry-from-the-command-line

1. To install the library user needs to use an exportable variable NPM_TOKEN as a global variable. First step is to
   create a NPM_TOKEN:

   https://docs.npmjs.com/creating-and-viewing-authentication-tokens

1. After that user needs to set the NPM_TOKEN as an environment variable in his config files (ex. .bash_profile, .zshrc)
   .

   https://blog.npmjs.org/post/118393368555/deploying-with-npm-private-modules

1. After everything is set, library is installed through:

```$xslt
npm install --save @calendly/marketing-ui-library
```

### Node Configuration

1. When using your own Node configurations don't check the .npmrc file into the repo, since it overrides the ~/.npmrc
   file that all Calendly developers already have.

   If you want to make a certain version of Node the default in your environment use nvm and run e.g.

```$xslt
nvm alias default v14.5.0
```

### Styled Components

One of the technologies this UI Library relies on is the usage of styled-components as a styling system.

```$xslt
npm install --save styled-components
```

To enable the correct usage and server side rendering, styled-components require some configuration.

1. For Gatsby Projects - in gatsby-config.js file add following

```$xslt
plugins: [
    {
        resolve: 'gatsby-plugin-styled-components',
        options: {
            displayName: false,
            ssr: true,
        },
    },
]
```

2. For Non-Gatsby Projects - we need to add following to the .babelrc

```$xslt
plugins: [
    'styled-components',
    {
        displayName: false,
        ssr: true,
    },
]
```

* `displayName` - enables component names in the classes, which allows easier debugging
* `ssr` - enables server side rendering

### Local Testing With Docker

You can run a local copy of Storybook using the `docker-compose.yml` file within this repository. It will build the
image based on your local changes and make the UI available on `:6006`.

```bash
$ docker-compose up
```

Open a browser and visit `http://localhost:6006` to access the UI.

When finished, use `Ctrl + C` to stop `docker-compose` and run the following command to clean up:

```bash
$ docker-compose down
```

You can also remove the image:

```bash
$ docker image ls
REPOSITORY                      TAG            IMAGE ID            CREATED             SIZE
marketing-ui-library_app        latest         55f68c8f0a99        2 minutes ago       451MB

$ docker image rm marketing-ui-library_app
```

### Publishing

Only the contents of the src folder are being published and are relevant to the projects that use the
marketing-ui-library. Publishing is done by using the following command from the project root:

```$xslt
npm run publish-package
```

For versioning we followed the semver principle

* MAJOR

* MINOR

* PATCH
