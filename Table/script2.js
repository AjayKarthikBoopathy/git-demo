var table=document.createElement("table");
table.className="table";
var thead=document.createElement("thead");
thead.className="thead-dark";
var tr1=document.createElement("tr");
var th1=createele("th","firstname");
var th2=createele("th","lastname");
tr1.append(th1,th2);
thead.append(tr1);


var tbody=document.createElement("tbody");


var tr2=document.createElement("tr");
var td1=createele("td","john");
var td2=createele("td","doe");
tr2.append(td1,td2);
tbody.append(tr2);

var tr3=document.createElement("tr");
var td1=createele("td","ajay");
var td2=createele("td","karthik");
tr3.append(td1,td2);
tbody.append(tr3);



table.append(thead,tbody);
document.body.append(table);

function createele(elementname,value){
    var ele=document.createElement(elementname);
    ele.innerHTML=value;
    return ele;
}