
const autoComm = ({ startups, lists, startup, investor, runAutoGmail }, auto) =>
async () => (
    { 
        'auto': ( await runAutoGmail({ startups, lists }, auto) ),
        '1-1': ( await runAutoGmail({ startup, investor }, auto) )
    }[auto]
)

export {
    autoComm
}
