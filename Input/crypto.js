var form=document.createElement("form");
form.setAttribute("id","myform");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","demo");
input.setAttribute("required",true);        //Input strictly needed

var sub=document.createElement("input");
sub.setAttribute("type","submit");
sub.setAttribute("value","search");
form.append(input,sub);
document.body.append(form);