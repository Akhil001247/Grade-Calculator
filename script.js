let HTML = Number(window.prompt("Enter HTML Mark"))
let CSS = Number(window.prompt("Enter CSS Mark"))
let JAVASCRIPT = Number(window.prompt("Enter JAVASCRIPT Mark"))
let REACT = Number(window.prompt("Enter REACT Mark"))
let EXPRESS = Number(window.prompt("Enter EXPRESS Mark"))

let totalMark = HTML + CSS + JAVASCRIPT + REACT + EXPRESS ;

document.write("YOUR TOTAL MARK IS =  ", totalMark  + "<br>")

let averageMark = totalMark/5;

document.write( "YOUR AVERAGE MARK IS  = "   ,averageMark  +  "<br>")

let grade;
if (averageMark >= 90){
    document.write("  YOUR GRADE IS =   A+"  +  "<br>")
}
else if (averageMark >= 80){
    document.write("  YOUR GRADE IS =   A"  +  "<br>")
}
else if (averageMark >= 70){
    document.write("  YOUR GRADE IS =   B"  +  "<br>")
}
else if (averageMark >=60){
    document.write("  YOUR GRADE IS =   C"  +  "<br>")
}
else if(averageMark >= 50){
    document.write("  YOUR GRADE IS =   D"  +  "<br>")
}
else {
    document.write("  YOUR GRADE IS =   F"  +  "<br>")
}