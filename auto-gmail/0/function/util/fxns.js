
const awilix = ([a] = []) => ( // general awilix dependency - not being used currently
    { createContainer, asValue, asFunction, asClass, get } = a,
    {
        createContainer: createContainer(),
        asValue: value => asValue(value),
        asFunction: function_ => asFunction(function_),
        asClass: class_ => asClass(class_),
        getDependency: (dependency, type) => get(dependency) // todo: work with type
    }
)

const processFile = (file, [f] = []) => (
    f({ file, action: 'action', }) // collate all data into conjoined json
)

const processJson = json => ( // ensure json has all required schema props ; clean data
    null
)

export default {
    awilix, processFile, processJson
}
