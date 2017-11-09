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
To add several formulas to several fields use setFormulas. Example below
```ruby
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This sets the formulas to be a row of sums, followed by a row of averages right below.
// The size of the two-dimensional array must match the size of the range.
var formulas = [
  ["=SUM(B2:B4)", "=SUM(C2:C4)", "=SUM(D2:D4)"],
  ["=AVERAGE(B2:B4)", "=AVERAGE(C2:C4)", "=AVERAGE(D2:D4)"]
];

var cell = sheet.getRange("B5:D6");
cell.setFormulas(formulas);
```

For any issue you can [Contact Me](https://Sarmadgardezi.com). DM me on [Twitter @SarmadGardezi](https://twitter.com/SarmadGardezi) or
Place a Message on [Facebook](https://facebook.com/SarmadGardezi)
