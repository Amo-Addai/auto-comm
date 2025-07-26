
export default {

    schema: { // based on all directories & files // todo: complete
        base: '././', // base dir: 0/
        ai: '././ai',
        auto: {
            auto: '././auto/auto',
            comm: '././auto/comm',
            gmail: '././auto/gmail',
            init: '././auto/init/init'
        },
        cloud: '././cloud',
        config: '././config',
        data: '././data',
        dep: '././dep',
        lib: '././lib',
        util: '././util'
    },

    dependencySchema: { // based on dependency indexing
        base: '././',
        ai: '././ai',
        auto: {
            auto: '././auto/auto',
            comm: '././auto/comm',
            gmail: '././auto/gmail',
            init: '././auto/init/init'
        },
        cloud: '././cloud',
        config: '././config',
        data: '././data', // no dependency
        dep: '././dep', // curates dependency
        lib: '././lib', // main dependency
        util: '././util'
    },

    // ! Ensure schema matches all required dependency directories, their functions, requirements, descriptions, & values
    autoInitSchema: {
        dependency: [
            
        ],
        values: [
            
        ],
        functions: [

        ],
        classes: [

        ]
    },

}