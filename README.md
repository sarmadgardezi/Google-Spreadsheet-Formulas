# Google Spreadsheet Formulas List using Goolge App Scripts

I'm Going to share some useful formulas that are used in daily life & can make your wirkflow more easy.

## This is done using the [setFormula](https://developers.google.com/apps-script/reference/spreadsheet/range#setFormula(String)) for a selected cell. Below is an example of how to do this.
```ruby
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B5");
cell.setFormula("=SUM(B3:B4)");
```

How to Insert it You can see the Image below
![Spreadsheet Formulas](https://i.imgur.com/VuMmDAb.jpg "Formulas by Sarmad Gardezi")

You can also use [setFormulaR1C1](https://developers.google.com/apps-script/reference/spreadsheet/range#setFormulaR1C1(String)) to create R1C1 notation formulas. Example below.
```ruby
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B5");
// This sets the formula to be the sum of the 3 rows above B5
cell.setFormulaR1C1("=SUM(R[-3]C[0]:R[-1]C[0])");
```

[setFormula](https://developers.google.com/apps-script/reference/spreadsheet/range#setFormula(String))
