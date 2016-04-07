var fs=require("fs");
var continents=[];
var obj3={};
  

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
         	// console.log(obj1);
         	continents.push(obj1);
         }
          
         // fs.writeFile( "../js_files/continents.json",JSON.stringify(continents));
     }
    });
// var fs=require("fs");
 fs.readFile("../csv_file/datafile.csv",function(err,data){
	if(err){
        console.log(err);
    }else{
    	var obj1={};
    	var obj2={};
    	 var lines = data.toString().split("\n");
    	var population_Country = [];
         
        var content= [];

        var headerLine = lines[0].split(",");

            for (var i = 1; i < lines.length-1; i++) {
            var obj1={};
            var currentline = lines[i].split(",");
            obj1.Country_Name = currentline[0];
            obj1.Population_2010=currentline[2];
            obj1.Population_2011=currentline[3];
            obj1.Population_2012=currentline[4];
            obj1.Population_2013=currentline[5];
            // console.log(obj1);
            population_Country.push(obj1);
            }
            // fs.writeFile( "../js_files/Purchasing_jason.json",JSON.stringify(population_Country));

for(var country1 of population_Country)
{
	for(var country of continents)
	{
		if(country1.Country_Name==country.Country_Name)
		{
			obj2.Continents=country.Continents;
                
			obj2.Population_2010=country1.Population_2010;
			obj2.Population_2011=country1.Population_2011;
			obj2.Population_2012=country1.Population_2012;
			obj2.Population_2013=country1.Population_2013;
			content.push(obj2);

			
			//console.log(obj2);
            obj2={};
		}
	}
}
 
 fs.writeFile( "../js_files/aggregate.json",JSON.stringify(content));
 //fs.writeFile( "../js_files/final.json",JSON.stringify(final));
var myset=new Set();

var final_data=[];
for(dude of content)
{
    myset.add(dude.Continents);
}

for(var maal of myset)
{   
    var obj4={
    Continent:"",
    Population_2010:0,
    Population_2011:0,
    Population_2012:0,
    Population_2013:0
};
    obj4.Continent=maal;
    
    for(var fool of content)
    {
        
        if(maal==fool.Continents)
        {
            obj4.Population_2010 += +fool.Population_2010;
            obj4.Population_2011 += +fool.Population_2011;
            obj4.Population_2012 += +fool.Population_2012;
            obj4.Population_2013 += +fool.Population_2013;

        }
        
        
        
        //obj4={};
    }
    final_data.push(obj4);
    console.log(obj4);
    //obj4={};

 
    
}

fs.writeFile("../js_files/finalContinents.json",JSON.stringify(final_data));
	 
}
	});
