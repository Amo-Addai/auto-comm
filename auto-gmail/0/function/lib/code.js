
const getFromCloud = ({ getAllFilesFromCloud, get1InvestorFromCloud, startup }, auto) =>
async () => (
    {
        'auto': ( await getAllFilesFromCloud({}) ),
        '1-1': ( await get1InvestorFromCloud({ startup }) )
    }[auto]
)

const getDataFromFiles = ({ files, getJsonFromFileTypes }, auto) =>
async () => (
    {
        'auto': ( await getJsonFromFileTypes({ files }) )
    }[auto]
)

const parseListsFromData = ({ data }, auto) =>
async () => (
    {
        'auto': ( await curateInvestorEmailLists({ data }, auto) )
    }[auto]
)

const runAutoComm = ({ startups, lists, startup, investor, autoComm }, auto) =>
async () => (
    {
        'auto': ( await autoComm({ startups, lists }, auto) ),
        '1-1': ( await autoComm({ startup, investor }, auto) )
    }[auto]
)

export default {
    getFromCloud, getDataFromFiles, parseListsFromData, runAutoComm
}
