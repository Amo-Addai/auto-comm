
import utils from './utils'
import code from './code'

// manually-injecting 'utils' into code
// 'utils' require sensitive 'env' data, not included as dependency (inversion of control)

export default {
    ...code, // * unnecessary if all files require 'utils'
    getAllFilesFromCloud: code?.getAllFilesFromCloud(utils),
    get1InvestorFromCloud: code?.get1InvestorFromCloud(utils),
}
