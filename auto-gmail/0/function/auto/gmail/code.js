
const runAutoGmail = ({ autoGmail }) =>
async () => (
    await autoGmail()
)

export {
    runAutoGmail
}
