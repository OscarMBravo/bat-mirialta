const title = 'Bat Mírialta';

const email = 'sloanjo@tcd.ie';

const repository = 'https://github.com/JohnSloan8/bat-mirialta';

const production = false;
const basePath = production ? '/applications/bat-mirialta/' : '/';

const domain = production ? 'http://68.183.41.58/' : 'http://localhost/';

const errorCheckURL = 'http://localhost:8081/';

const messages = {
  app: {
    crash: {
      title: 'Something went wrong. You can:',
      options: {
        email: `contact with author by this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea',
  },
  images: {
    failed: 'something went wrong during image loading :(',
  },
  404: 'Not found',
};

const dateFormat = 'MMMM DD, YYYY';

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Irregular verb bot for Irish',
};
const giphy404 = 'https://giphy.com/embed/xTiN0L7EW5trfOvEk0';

export {
  basePath,
  loader,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
  giphy404,
  production,
  domain,
  errorCheckURL,
};
