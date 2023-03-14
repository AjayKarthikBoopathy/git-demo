var label1=createlabel("label","for","fname","First Name");
var br1=linebreak();
var input1=createinput("input","type","fname","id","fname");
var br2=linebreak();
var label2=createlabel("label","for","mname","Middle Name");
var br3=linebreak();
var input2=createinput("input","type","mname","id","mname");
var br4=linebreak();
var label3=createlabel("label","for","lname","Last Name");
var br5=linebreak();
var input3=createinput("input","type","lname","id","lname");
var br6=linebreak();

document.body.append(label1,br1,input1,br2,label2,br3,input2,br4,label3,br5,input3,br6);



function createlabel(tagname,attname,attvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.innerHTML=content;
    return ele;
}

function linebreak(){
    var br=document.createElement(br);
    return br;
}

function createinput(tagname1,attname1,attvalue1,attname2,attvalue2){
     var ele1=document.createElement(tagname1);
     ele1.setAttribute(attname1,attvalue1);
     ele1.setAttribute(attname2,attvalue2);
     return ele1;
}