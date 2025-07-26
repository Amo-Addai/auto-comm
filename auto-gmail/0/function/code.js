
export default ({ startups, getFromCloud, getDataFromFiles, parseListsFromData, runAutoComm, log: { log } }, auto) => 
    async (files, data, lists, complete) => (
    files = await getFromCloud('auto'),
    data = await getDataFromFiles({ files }, 'auto'),
    lists = await parseListsFromData({ data }, 'auto'),
    complete = await runAutoComm({ startups, lists }, 'auto'),
    log(complete)
)

export const _1to1 = ({ startup, getFromCloud, runAutoComm, log: { log } }, auto) =>
    async (investor, complete) => (
    investor = await getFromCloud({ startup }, '1-1'),
    complete = await runAutoComm({ startup, investor }, '1-1'),
    log(complete)
)

export const _1toAll = ({ runAutoComm, log: { log } }, auto) =>
    async (complete) => (
    //
    log(complete)
)

export const _1to2 = ({ runAutoComm, log: { log } }, auto) =>
    async (complete) => (
    //
    log(complete)
)

export const _2toAll = ({ runAutoComm, log: { log } }, auto) =>
    async (complete) => (
    //
    log(complete)
)

export const allToAll = ({ runAutoComm, log: { log } }, auto) =>
    async (complete) => (
    //
    log(complete)
)
