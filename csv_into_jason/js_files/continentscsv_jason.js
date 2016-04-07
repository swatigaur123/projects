var fs=require("fs");
var continents=[];
var csv = fs.readFile("../csv_file/continents.csv",function(err,data){
	 
    if(err){
        console.log(err);
    }else{
       // console.log(typeof data);
        var lines = data.toString().split("\n");
        
         var headerLine = lines[0].split(";");
         for (var i = 1; i < lines.length-1; i++) 
         {
         	var currentline=lines[i].split(';')
         	var obj1={};
         	obj1.Country_Name=currentline[0];
         	obj1.Continents=currentline[4];
         	console.log(obj1);
         	continents.push(obj1);
         }
          
         fs.writeFile( "../js_files/continents.json",JSON.stringify(continents));
     }
    });