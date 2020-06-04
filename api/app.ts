import app, { server, use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'
import serverless from 'serverless-http'

use(prisma())

app.assemble()
export const graphql = serverless(server.handlers.graphql, {
    request(request: any, event: any, context: any) {
        const { body } = request as any
        request.context = event.requestContext;
        request.body = JSON.parse(body.toString())
        return request;
    }
})
export const playground = serverless(server.handlers.playground)