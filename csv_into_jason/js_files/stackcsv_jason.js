var fs=require("fs");
var csv = fs.readFile("../csv_file/datafile.csv",function(err,data){
    if(err){
        console.log(err);
    }else{
       // console.log(typeof data);
        var lines = data.toString().split("\n");

        var population_Country = [];
         
        var purchasingPower_Country = [];

        var headerLine = lines[0].split(",");

            for (var i = 1; i < lines.length-1; i++) {
            var obj1={};
            var currentline = lines[i].split(",");
            obj1.Country_Name = currentline[0];
            obj1.Population_2010=currentline[2];
            obj1.Population_2011=currentline[3];
            obj1.Population_2012=currentline[4];
            obj1.Population_2013=currentline[5];
            console.log(obj1);
            population_Country.push(obj1);
            }
            fs.writeFile( "../js_files/stack_jason.json",JSON.stringify(population_Country));
}
});