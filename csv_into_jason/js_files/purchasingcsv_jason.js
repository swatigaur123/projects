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
            obj1.Purchasing_power_2010=currentline[14];
            obj1.Purchasing_power_2011=currentline[15];
            obj1.Purchsing_power_2012=currentline[16];
            obj1.Purchasing_power_2013=currentline[17];
            console.log(obj1);
            population_Country.push(obj1);
            }
            fs.writeFile( "../js_files/Purchasing_jason.json",JSON.stringify(population_Country));
}
});