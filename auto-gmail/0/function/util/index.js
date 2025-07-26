
import awilix from 'awilix'

import utils from './fxns'
import code from './code'

export default {
    ...code,
    dependency: code?.dependency({ dependency: utils?.awilix([awilix]) }),
    getJsonFromFileTypes: code?.getJsonFromFileTypes(utils)
}
