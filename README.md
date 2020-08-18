# 1 About

This repository contains the source code for the **[Build Yelp in React | React Hooks Tutorial](https://www.youtube.com/watch?v=8asNYp7koRg)** provided by [productioncoder.com](https://productioncoder.com).

Sign up for [this email list](https://productioncoder.com/you-decide-what-we-build-next/) so you get a vote in what we will publish next.

For updates please follow [@productioncoder](https://twitter.com/productioncoder) on Twitter.

<h3 align="center">Please help this repo with a ⭐️ if you find it useful! 😁</h3>

# 2. Demo

**[Please check out the videos on Youtube](https://www.youtube.com/watch?v=8asNYp7koRg)**

![Yelp Home](images/yelp.gif)

# 3. Screenshots

The application uses real data by leveraging the [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3).

## 3.1. Home

![Yelp Home](images/yelp-home.png)

## 3.2. Search for businesses / restaurants

![Yelp Search](images/yelp-search.png)

# 4 How to run this Application

## 4.1 Get a Yelp Fusion API key

This application looks pretty much the same like the original [Yelp](https://www.yelp.com) website.

It leverages the free [Yelp Fusion REST API](https://www.yelp.com/developers/documentation/v3) for which you need an API key.

1. Head over to the [Yelp Fusion API documentation](https://www.yelp.com/developers/documentation/v3)
2. Click on `Create App` and sign in if you haven't done so already
3. Once you have signed in, click on the `Get Started` button. If you already have an app, then you will already see the API key
4. Fill out the form for [creating a new app](https://www.yelp.com/developers/v3/manage_app)
5. Copy the generated `API key`. This is a [bearer token](https://stackoverflow.com/questions/25838183/what-is-the-oauth-2-0-bearer-token-exactly/25843058) that must be put inside the header of each request

## 4.2. Provide the URL from which search results can be fetched

You need to provide a value for the `REACT_APP_API_BASE_URL` which should expose a `GET /search` endpoint that expects both the `term` and the `location` as a query parameters.

This can just be a plain Lambda function that makes a REST call to the Yelp fusion API.

To simplify the process, you can add a new `.env.local` file (already gitignored) with

```
touch .env.local
```

put the base URL in there

```
REACT_APP_API_BASE_URL=my-base-url.com
```

If you then run `npm run dev` instead of `npm start` then the env vars will be automatically sourced.
As an alternative, to pull the value of the env var in, you can also source it manually with

```
source .env.local
```

Please bar in mind that if you close your terminal session, you will need to source this file again.
That's why we recommend to just run `npm run dev`.

## 4.3 Installing the dependencies and running the app

Install the dependencies by running

```
npm install
```

and then start the app with

```
npm run dev
```

# 6. Used Technologies

- [React / create-react-app](https://github.com/facebook/create-react-app)
  - **only functional components**
  - communication with web servers with [React Hooks](https://reactjs.org/docs/hooks-intro.html) only
  - no higher order or class-based components
- [React router](https://github.com/ReactTraining/react-router) with [useReactRouter](https://github.com/CharlesStover/use-react-router)
- [Bulma](https://bulma.io)
- Flexbox

# 7. Disclaimer

This project is **solely intended for educational purposes** and is created under **fair use**.

It is **not intended to create any kind of Yelp competitor**, but to teach advanced concepts in frontend development.

Just see it a nice educational project that will help you to improve your coding skills.
