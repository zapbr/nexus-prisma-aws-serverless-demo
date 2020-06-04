# nexus-prisma-aws-serverless-demo
Demo with Nexus, Prisma and Serverless in AWS Lambda.
To help to solve the issue with the Nexus Serverless described here: https://github.com/graphql-nexus/nexus/issues/782


## How to reproduce 

1. `yarn build`
1. `yarn start`
1. go to http://localhost:4000/ - At this point all schema was loaded.
1. exit
1. `yarn serverless offline`
1. go to http://localhost:3000/test/playground
1. change GraphQL url to http://localhost:3000/test/graphql
1. no schema was loaded and in the console log the message is presented
1. compare `.nexus/build/index.js` to `.nexus/build/api/app.js`, the schema requires are missing

```
.
.
.
 263 ▲ nexus:schema Your GraphQL schema is empty. This is normal if you have not defined any GraphQL types yet. If you did however, check that your files are contained in the same directory specified in the `rootDir` property of your tsconfig.json file.
.
.
.
```



