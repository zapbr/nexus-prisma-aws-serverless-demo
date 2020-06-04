import { schema } from 'nexus'

schema.objectType({
  name: 'Blog',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.post()
    t.model.user()
  }
})