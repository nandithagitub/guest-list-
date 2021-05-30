var names_of_people = [];
function submit(){
   
    var GuestName = document.getElementById("name_1").value;
   var output = [];
    names_of_people.push(GuestName);
    document.getElementById("display_name").innerHTML = names_of_people;
    console.log(names_of_people);
    output.push(1 + GuestName);
}
function show(){
    document.getElementById("show_name").innerHTML = names_of_people;
}
function sort(){
    names_of_people.sort();
    document.getElementById("sorted_names").innerHTML = names_of_people;
}
function search(){
    var s = document.getElementById("name_2").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++){
        if(s==names_of_people[j]){
            found=found+1;

        }
        
    }
    document.getElementById("Search").innerHTML = "name found "+found+" time/s";
    console.log("found name "+found+" time/s");


}




