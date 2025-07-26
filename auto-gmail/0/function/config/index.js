
import env from './env/index'
import invertedConfig from './invertedConfig'
import schema from './schema/schema'
let config = {}

// Inversion of Control - do not export sensitive 'env' data as dependency
Object.keys(env).forEach(key => (
    System.import(`./${key}${key === 'config' || `/config`}`).then(module => (
        config[key] = module[key] = module?.injectEnv(env[key])[key] // todo: confirm
    ))
))

export default { config, invertedConfig, schema }
