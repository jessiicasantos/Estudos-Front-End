let x = 0;
const array = Array();

function add_element_to_array() {
    var text1 = document.getElementById("text1");
    var valueVar = "";
    
    array[x] = document.getElementById("text1").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    if (text1) {
        valueVar = text1.value = "";
    };
}

function display_array() {
    var e = "<hr/>"
    
    for(var y=0; y < array.length; y++) {
        e += "Element: " + y + " = " + array[y] + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;
}