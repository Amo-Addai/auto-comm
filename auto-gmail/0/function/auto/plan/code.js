
const autoPlan = ({ startups, lists, startup, investor, runAutoPlan }, auto) =>
async () => (
    { 
        'auto': ( await runAutoPlan({ startups, lists }, auto) ),
        '1-1': ( await runAutoPlan({ startup, investor }, auto) )
    }[auto]
)

export {
    autoPlan
}
