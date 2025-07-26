
const getAllInvestorLists = ([r] = []) => (
    drive = accessGoogleDrive([r]),
    directory = accessDirectory(drive, [r]),
    files = parseDirectory(directory, [r]),
    data = parseFiles(files, [r]),
    downloadFiles(files, [r]),
    files
)

const get1Investor = (startup, [r] = []) => (
    drive = accessGoogleDrive([r]),
    // * find investor for startup
    condition = figureOutInvestors(startup, [r]),
    investors = filterOutInvestors(drive, [condition], [r]),
    downloadInvestorLists(investors, [r]),
    investors[0]
)

export {
    getAllInvestorLists, get1Investor
}

// Real Utils

const figureOutInvestors = (startup, [r] = []) => null
const filterOutInvestors = ([r] = []) => null
const downloadInvestorLists = ([r] = []) => null

// Google Drive

const setupGoogleDrive = ([r] = []) => null
const accessGoogleDrive = ([r] = []) => null

const accessDirectory = ([r] = []) => null
const parseDirectory = ([r] = []) => null
const parseFiles = ([r] = []) => null
const processDirectory = ([r] = []) => null
const processFiles = ([r] = []) => null
const downloadDirectory = ([r] = []) => null
const downloadFiles = ([r] = []) => null

const move = ([r] = []) => null // file / directory -> directory
const copy = ([r] = []) => null
const new_ = ([r] = []) => null
const delete_ = ([r] = []) => null

// Google Sheets

const setupGoogleSheets = ([r] = []) => null
const accessGoogleSheets = ([r] = []) => null

const accessSpreadSheet = ([r] = []) => null
const parseSpreadSheet = ([r] = []) => null
const parseSheet = ([r] = []) => null
const processSpreadSheet = ([r] = []) => null
const processSheet = ([r] = []) => null
const downloadSpreadSheet = ([r] = []) => null
const downloadSheet = ([r] = []) => null

// Google Calendar

const setupGoogleCalendar = ([r] = []) => null
const accessGoogleCalendar = ([r] = []) => null

const accessCalendar = ([r] = []) => null
const parseCalendar = ([r] = []) => null
const parseMeet = ([r] = []) => null
const processCalendar = ([r] = []) => null
const processMeet = ([r] = []) => null
const downloadCalendar = ([r] = []) => null
const downloadMeet = ([r] = []) => null

// ?
