
import awilix from 'awilix'

import utils from './fxns'
import code from './code'

export default class Utilities {
    utils = ({...code})
    dependencyManagement = (code?.dependency({ dependency: utils?.awilix([awilix]) }))
    getJsonFromFileTypes = (code?.getJsonFromFileTypes(utils))
}
