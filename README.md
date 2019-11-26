# NewsMe

## What is NewsMe?
NewsMe is an an AI enhanced news application. NewsMe allows users to subscribe to topics they are interested in and recieve a customized newsfeed. NewsMe also allows users to get their daily newsfeeds sent to them via html or text email.

## How does it work?

### Front-End
NewsMe is built using React as its front-end framework.

React hooks as well as Redux are utilized in order to manage stateful logic and to create a cohesive UX.


### Back-End
[Link to Back-End Repo](https://github.com/wukrit/newsme-backend)

NewsMe's API is built with Ruby on Rails, utilizing JWT and BCrypt for security, and PostgreSQL for its database. ActionMailer is utilized to create HTML and text emails which are sent out using a scheduled rake task.

NewsMe gathers the top headlines from hundreds of
global sources by using [NewsApi](https://newsapi.org/).

Then we use [Aylien](https://aylien.com/) natural language processing to summarize articles into digestable summaries. Now you can stay informed without having to read through hundreds of sentences.

## Installation

```
Clone the repo and CD inside the directory
npm install
npm start
```

Make sure to visit the repo for the backend and follow those instructions as well.
