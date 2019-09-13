# Advanced-React

Project Objective - 

I love working with React on a daily basis as a professional developer. With a strong desire to learn more and dig deeper into the world of React, I decided to invest in Wes Bos' Advanced React course. The result is a Full stack application with GraphQL, and a Node backend.

GraphQL - 

GraphQL has been a buzz lately and I was keen to give it a try. It's essentially an alternative to the way in which REST APIs work. In contrast to hitting an API endpoint, where you just accept the data that's returned to you, GraphQL allows you to write queries on the client side and it gives you the freedom to specify the exact data in the shape that you want returned from the server. It is not a framework, and probably better described as a specification that can be implemented by many different programming languages. For example, if you're working JavaScript, there will be a library to interface with GraphQL.

It requires buy-in from both the client and server side. The client will talk to the GraphQL server by specifically asking for the data required. What I really like is that I don't need to make multiple requests to fetch the data that I want eg. api/blog/posts, api/blog/users etc. I just hit one endpoint, and get back exactly the data that I request. If the data is relational, queries can be nested. For example, you can query a list of posts, the authors of each post, and then also profile information about each user, and all the specific data will be returned from that one query.

GraphQL is a typed language. You have to specifically define what type everything is going to be. The advantage of having the language so strictly typed is you get the benefit of having tools to analyse the code. If you’re querying items, it would suggest possible fields that can be queried and returned. For example, items can include a title, description etc. A standard JS application wouldn’t know what the possible returned values are ahead of time. GraphQL also provides a schema, which will show you all the different queries and mutations that are possible to use. It does not fetch and filter the data. It’s a way to vocalise what you want. That gets passed to the server, and the server implements resolvers, which answers the question of how and where do you get this data from. That’s when you then use mySQL, PostgreSQL or MongoDB. GraphQL is just a standard to request specific data. GraphQL can replace REST or sit in front of a REST Api to proxy the data in-between.

GraphQL will be implemented on the frontend with Apollo. On the backend it will interface with Prisma and also Yoga.

Apollo Client - 

There is an array of different JavaScript GraphQL clients to work with, however Apollo does a great job of managing data in React, and reduces the need for Redux, which in turn cuts out a tonne of boilerplate code. Apollo can fetch the GraphQL queries, and perform mutations. It can also cache GraphQL data, and manages error handling and loading states automatically. React-Apollo is used as an adaptor for the Apollo Client, which is the view layer.

Next.js - 

This project uses Next.js, which covers server side rendering and all of the routing and tooling, such as Webpack configuration. Because of SSR, the server will render the first run of the application, and the client with pickup from there and check if any updates are needed. As each React component has it's own styling, it brings the CSS when it's ready to be mounted. With SSR, everything needs to be fetched and ready before the data is sent to the browser, therefore it needs the CSS at the point of the initial render. Next.js solves this with Document component, which is only rendered on the server side. It's used to change the initial server side rendered markup. It will fetch the CSS before its rendered in the browser.




Jest and Enzyme is used for testing the application.




The query is an object, where you only provide it the properties that you want. The data returned includes the object but also with the values to the properties as well.
I've deployed the React app via Heroku - https://sickfits-jack-react-prod.herokuapp.com
