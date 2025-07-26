
// special awilix di config - being used currently
import { createContainer, asValue, asFunction, asClass, resolve, get } from 'awilix'

const dependency = {
    createContainer: createContainer(),
    asValue: value => asValue(value),
    asFunction: function_ => asFunction(function_),
    asClass: class_ => asClass(class_),
    hasDependency: dependency => has(dependency),
    getDependency: (dependency, type) => get(dependency), // todo: work with type
    resolveDependency: (dependency, type) => resolve(dependency)
}

export default {
    dependency
}
