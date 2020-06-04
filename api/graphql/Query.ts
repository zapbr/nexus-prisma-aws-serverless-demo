import { schema } from 'nexus'

schema.queryType({
    definition(t) {
        t.crud.user()
        t.crud.users({ filtering: true })

        t.crud.blog()
        t.crud.blogs({ filtering: true })
    }
})