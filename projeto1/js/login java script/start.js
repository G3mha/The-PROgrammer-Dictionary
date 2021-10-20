var db = openDatabase("MYDATABASE", "1.0", "MYDB", 4 * 1024 * 1024);  
var mydata;  
CreateTable();  
function CreateTable() {  
      db.transaction(function (tx) {  
          tx.executeSql("create table if not exists Emp (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT,city TEXT,state TEXT, phone TEXT,email TEXT)");  
      });  
} 