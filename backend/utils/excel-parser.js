const XLSX = require ("xlsx")
const fs = require ("fs")
const {expandObject , rectifyObject } = require('./excle-handler')

exports.excelToJson = async (file) => {

    let time = Date.now().toString()

    await file.mv("./trash/upload_" + time + ".xlsx")

    const excel = XLSX.readFile("./trash/upload_" + time + ".xlsx")

    const source = excel.Sheets[excel.SheetNames[0]]

    const data = XLSX.utils.sheet_to_json(source)
    
    let result = data.map(doc => expandObject(doc))

    fs.unlinkSync("./trash/upload_" + time + ".xlsx")

    return result.map(doc => rectifyObject(doc))
} 

exports.Jsontoexport = (data) => {

    const json = data.map(doc => shrinkObject(doc))

    const workSheet = XLSX.utils.json_to_sheet(json);
    
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, "data");
    
    XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })
    
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

    let time = Date.now().toString()

    XLSX.writeFile(workBook, "./trash/download_" + time + ".xlsx")

    let blob = fs.readFileSync("../trash/download_" + time + ".xlsx")

    fs.unlinkSync("../trash/download_" + time + ".xlsx")
    
    return blob

}

