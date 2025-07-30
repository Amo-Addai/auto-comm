
const app = {

    init: this,

    runAutoInit: async ({ schema, config, dependency }) => (
        this = await autoInit(schema, config, [d] = [dependency])(),
        this
    )

}.init()

const autoInit = (schema, config, [d] = []) => 
    async (app) => (
    { createContainer, asValue, asFunction, asClass } = d,
    app = createContainer(),
    schema.forEach( // O(n^2) t per codebase - optimize if ever necessary
        type => (
            type.forEach(
                dependency => (
                    !!dependency && (
                        System.import(dependency).then(
                            (module, default_) => (
                                { default: default_ } = module,
                                {
                                    'dependency': app.buildDependency(asValue(default_(config))), // todo: confirm functor for IoC in DI
                                    'values': app.buildDependency(asValue(module)),
                                    'functions': app.buildDependency(asFunction(module)),
                                    'classes': app.buildDependency(asClass(module)),
                                }[type]
                            )
                        )
                    )
                )
            )
        )
    ),
    app
)

export default app
