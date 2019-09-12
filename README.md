# Advanced-React

Project Objective - 

I love working with React on a daily basis as a professional developer. With a strong desire to learn more and dig deeper into the world of React, I decided to invest in Wes Bos' Advanced React course. The result is a Full stack application with GraphQL, and a Node backend.

GraphQL - 

GraphQL has been a buzz lately and I was keen to give it a try. It's essentially an alternative to the way in which REST APIs work. In contrast to hitting an API endpoint, where you just accept the data that's returned to you, GraphQL allows you to write queries on the client side and it gives you the freedom to specify the exact data in the shape that you want returned from the server. It is not a framework, and probably better described as a specification that can be implemented by many different programming languages. For example, if you're working JavaScript, there will be a library to interface with GraphQL.

It requires buy-in from both the client and server side. The client will talk to the GraphQL server by specifically asking for the data required. What I really like is that I don't need to make multiple requests to fetch the data that I want eg. api/blog/posts, api/blog/users. I just hit one endpoint, and get back exactly the data that I request. If the data is relational, queries can be nested. For example, you can query a list of posts, the authors of each post, and then also profile information about each user, and all the specific data will be returned from that one query.

Apollo Client - There is an array of different JavaScript GraphQL clients to work with, however Apollo does a great job of managing data in React, and reduces the need for Redux, which in turn cuts out a tonne of boilerplate code. Apollo can fetch the GraphQL queries, and perform mutations. It can also cache GraphQL data, and manages error handling and loading states automatically.
GraphQL Queries - 

React - 

This project uses Next.js, which covers server side rendering.

The query is an object, where you only provide it the properties that you want. The data returned includes the object but also with the values to the properties as well.
I've deployed the React app via Heroku - https://sickfits-jack-react-prod.herokuapp.com
