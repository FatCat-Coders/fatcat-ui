## FatCat UI library

TO BE ADDED

### Start

1. Install node dependencies:

```$xslt
npm install
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

### Publishing

Publishing is done by using the following command from the project root:

```$xslt
npm run publish-package
```

For versioning we followed the semver principle

* MAJOR

* MINOR

* PATCH
