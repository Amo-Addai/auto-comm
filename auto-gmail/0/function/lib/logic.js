
// curate investor email lists

export default ({ data }, auto) => 
async (lists) => ( // efficient hash-table
    {
        'auto': (
            // todo: sort all lists by email-preference
            // 
            lists
        ),
    }[auto]
)
