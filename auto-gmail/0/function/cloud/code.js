
// 'utils' require sensitive 'env' data; not included as dependency (curried-functor inverted out-of-control)
const getAllFilesFromCloud = (utils) =>
({ request: { request: r } }) => 
async () => (
    { getAllInvestorLists } = utils,
    await getAllInvestorLists([r])
)

const get1InvestorFromCloud = (utils) =>
({ startup, request: { request: r } }) => 
async () => (
    { get1Investor } = utils,
    await get1Investor(startup, [r])
)

export default {
    getAllFilesFromCloud, get1InvestorFromCloud
}
