
import { dependency } from './dep'

export default (arguments_) => 
    async (function_) => (
    { context: { function: function_ } } = arguments_,
    { getDependency } = dependency,
    function_ = getDependency(function_, 'function'),
    function_() // TODO: any other extra arguments

    // TODO: add any other extra context, configuration, or execution

)
