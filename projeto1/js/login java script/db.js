function ShowData() {  
    results.innerHTML = '';  
    db.transaction(function (tx) {  
        tx.executeSql("SELECT * FROM Emp", [], function (tx, result) {  
            mydata = result.rows;  
            for (var i = 0, item = null; i < mydata.length; i++) {  
                item = mydata.item(i);  
                results.innerHTML +=  
                '<b>First Name : </b>' + item['firstName'] + ' , ' + '<b>Last Name :</b> ' + item['lastName'] + ' , ' + '<b>City : </b>' + item['city'] + ' , ' + ' , ' + '<b>Phone: </b>' + item['phone'] + ' , ' + '<b>Email : </b>' + item['email'] + '      <img height="20" width="20" src="Edit.jpg" onclick="LoadMyData(' + i +  
')" />' +  
                '<img height="20" width="20" src="delete.jpg" onclick="deleteRecord(' + item['id'] + ')" /><br/>';  
            }  
        });  
    });  
}

function LoadMyData(i) {  
    var item = mydata.item(i);  
    firstName.value = item['firstName'];  
    lastName.value = item['lastName'];  
    city.value = item['city'];  
    phone.value = item['phone'];  
    email.value = item['email'];  
    id.value = item['id'];  
}

function deleteData(id) {  
    var deleteStatement = "delete from Emp where id=?";  
    db.transaction(function (tx) {  
        tx.executeSql(deleteStatement, [id], ShowData(), ShowErrorMessage);  
    });  
   ClearData();  
}   
function ClearData() {  
   firstName.value = '';  
   lastName.value = '';  
   city.value = '';  
   email.value = '';  
   phone.value = '';  
   id.value = '';  
}

function InsertData() {  
    var insertStatement = "insert into Emp (firstName, lastName,city,phone,email) values (?, ?, ?,?,?)";  
    db.transaction(function (tx) {   
        tx.executeSql(insertStatement, [firstName.value, lastName.value, city.value, phone.value, email.value], showdatacleardata, ShowErrorMessage);  
   });  
}

function UpdateData() {  
    var updateStatement = "UPDATE Emp SET firstName = ?, lastName = ?,city=?,phone = ?,email=? WHERE id = ?";  
    db.transaction(function (tx) {   
        tx.executeSql(updateStatement, [firstName.value, lastName.value, city.value, phone.value, email.value, id.value], showdatacleardata, ShowErrorMessage);  
    });  
} 