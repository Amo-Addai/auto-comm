
// logging
const log = {
    log: data => console.log(data),
    success: data => console.success(data),
    warn: data => console.warn(data),
    error: data => console.error(data)
}

// requests
const request = {
    request: ({}, type = 'axios') => (
        // work with both axios & fetch
        {
            'axios': (
                null
            ),
            'fetch': (
                null
            )
        }[type]
    )
}

// promises
const promise = {
    promise: Promise,
    newPromise: (resolve, reject) => Promise(resolve, reject),
    all: (all, cb) => Promise.all(all, cb),
    resolve: (cb) => Promise.resolve(cb),
    reject: (cb) => Promise.reject(cb)
}

// objects
const object = {
    assign: (json, json_) => Object.assign(json, json_)
}

// files
const file = {
    file: () => (
        { file, action, ...args },
        [] = []
    ) => (
        {
            'open': ( null ),
            'read': ( null ),
            'write': ( null ),
            'append': ( null ),
            // 

            'close': ( null )
        }[action]
    )
}

// general dependency
const dependency = (utils) => () => utils?.dependency

// real dependency
const getJsonFromFileTypes = (utils) => // curried-functor inverted out-of-control in DI
({ files, file: f }) => 
async (fxn, json) => (
    { processFile, processJson } = utils,
    fxn = file => processFile(file, [f]),
    // todo: fix - all, resolve, algo (no re-spreads)
    all(files, fxn).resolve(data => json = { ...json, ...processJson(data) }), // assign(json, processJson(data))
    json
)

export default {
    log, request, promise, object, file, 
    dependency,
    getJsonFromFileTypes
}
