
import app from './auto/auto'
import { schema, invertedConfig } from './config'
import { dependency } from './dep'

app = app.runAutoInit({ schema: schema.autoInitSchema, config: invertedConfig, dependency })

export default app
