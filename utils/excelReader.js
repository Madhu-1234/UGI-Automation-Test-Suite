var Excel = require('exceljs');

var wb = new Excel.Workbook();
var path = require('path');
var filePath = path.resolve('User_credentials.xlsx');

wb.xlsx.readFile(filePath).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    
    
    //Get all the rows data [1st and 2nd column]
    for (i = 1; i <= sh.rowCount; i++) {
        //console.log(sh.getRow(i).getCell(1).value);
        //console.log(sh.getRow(i).getCell(2).value);
        var username = sh.getRow(1).getCell(1).toString()
        //console.log(username)
        
    }
});
class excelReader{

   getUsername(){
        var sh = wb.getWorksheet("Sheet1");
        var username = sh.getRow(1).getCell(1).toString()
        return username;
       
    }
   getPassword(){
    var sh = wb.getWorksheet("Sheet1");
    var paswd = sh.getRow(1).getCell(2).toString()
    return paswd;
    }

    getUrl(){
        var sh = wb.getWorksheet("Sheet1");
        var url = sh.getRow(1).getCell(3).toString()
        return url;
        }

    getProjectCard(){
            var sh = wb.getWorksheet("Sheet1");
            var prjCard = sh.getRow(1).getCell(4).toString()
            return prjCard;
        }
}
module.exports = new excelReader()





 