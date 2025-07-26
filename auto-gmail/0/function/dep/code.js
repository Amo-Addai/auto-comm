
const dependency = (utils) => () => utils?.dependency

const _ = ({ dependency }) =>
() => (
    null
)

export default {
    dependency, // todo: confirm
    _
}
