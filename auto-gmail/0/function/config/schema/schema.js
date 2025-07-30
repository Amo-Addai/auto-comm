
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
            auto: '././auto/auto', // not dependency ; only indexed by 'root' index-files
            comm: '././auto/comm',
            gmail: '././auto/gmail',
            init: '././auto/init/init' // not dependency ; only indexed by 'root' index-files
        },
        cloud: '././cloud',
        config: '././config',
        data: '././data', // not dependency ; only data
        dep: '././dep', // curates dependency
        lib: '././lib', // main dependency
        util: '././util'
    },

    // ! Ensure schema matches all required dependency directories, their functions, requirements, descriptions, & values
    autoInitSchema: {
        dependency: {
            base: '././',
            ai: '././ai',
            comm: '././auto/comm',
            gmail: '././auto/gmail',
            cloud: '././cloud',
            config: '././config',
            dep: '././dep',
            lib: '././lib',
            util: '././util'
        },
        values: { // ! does not include sensitive configuration data
            base: '././',
            ai: '././ai',
            comm: '././auto/comm',
            gmail: '././auto/gmail',
            cloud: '././cloud',
            config: '././config', // * exclude all sensitive config - inversion of control
            dep: '././dep',
            lib: '././lib'
        },
        functions: {
            base: '././',
            ai: '././ai',
            comm: '././auto/comm',
            gmail: '././auto/gmail',
            cloud: '././cloud',
            dep: '././dep',
            lib: '././lib'
        },
        classes: {
            util: '././util'
        }
    },

}
