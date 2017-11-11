// Written by Sarmad Gardezi (sarmadgardezi.com)

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B5");
cell.setFormula("=SUM(B3:B4)");