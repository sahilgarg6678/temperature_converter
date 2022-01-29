function calculatetemp(){
    const numbertemp = document.getElementById("temp").value;
    // console.log(calculate);
    const tempselected = document.getElementById("temp_diff");
    const valuetemp = temp_diff.options[tempselected.selectedIndex].value;
    // console.log(valuetemp);
    function celToFah(cel){
        let fahrenheit = parseInt((cel * 9/5)+32);
        return fahrenheit;
    }

    function fahToCel(fah){
        let celcius = parseInt((fah -32)*5/9);
        return celcius;
    }

    let result;

    if(valuetemp == "cel"){
        result = celToFah(numbertemp);
        document.getElementById("resultcontainer").innerHTML =  result+" deg fahrenheit";
    }else{
        result = fahToCel(numbertemp);
        document.getElementById("resultcontainer").innerHTML =  result+" deg celsius"
    }
}