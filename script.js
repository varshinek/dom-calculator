function create_button(tagname, attrname1, attrvalue1, classname, classvalue, idname, idvalue, context)
{
    var input_ele = document.createElement(tagname);
    input_ele.setAttribute(attrname1 , attrvalue1);
    input_ele.setAttribute(classname , classvalue);
    input_ele.setAttribute(idname , idvalue);
    input_ele.innerHTML = context;
    return input_ele;

}

var container = document.createElement("div");
container.setAttribute("class","container");

var row1 = document.createElement("div");
row1.setAttribute("class","row");

var col1 = document.createElement("div");
col1.setAttribute("class","col-lg-12 col-md-8 col-sm-6")

var head = document.createElement("div");
head.setAttribute("class","head")

var h1 = document.createElement("h1");
h1.id = "title";
h1.innerHTML = "CALCULATOR";

var p = document.createElement("p");
p.id = "description";
p.innerHTML = "Calculator task is created using DOM";

head.append(h1);
head.append(p);
col1.append(head);
row1.append(col1);
container.append(row1);

var row2 = document.createElement("div");
row2.setAttribute("class","cal");

var col2 = document.createElement("div");
col2.setAttribute("class","col-lg-12 col-md-8 col-sm-4")
col2.setAttribute("id","column");

var calulator = document.createElement("div");
calulator.setAttribute("class","calculator");

let input1 = document.createElement("input");
input1.setAttribute("placeholder", "0");
input1.setAttribute("class", "result");
input1.setAttribute("id", "result");

var key = document.createElement("div");
key.setAttribute("class","display");
key.setAttribute("id","key")


var buttonClear = create_button("button","type","button","class","button1","id","clear","C");
var buttondel = create_button("button","type","button","class","button2","id","delete","Del");
var mod = create_button("button","type","button","class","button","id","%","%");
var mul = create_button("button","type","button","class","button","id","*","*");
var seven = create_button("button","type","button","class","button","id","7","7");
var eight = create_button("button","type","button","class","button","id","8","8");
var nine = create_button("button","type","button","class","button","id","9","9");
var slash = create_button("button","type","button","class","button","id","/","/");
var four = create_button("button","type","button","class","button","id","4","4");
var five = create_button("button","type","button","class","button","id","5","5");
var six = create_button("button","type","button","class","button","id","6","6");
var sub = create_button("button","type","button","class","button","id","subtract","-");
var one = create_button("button","type","button","class","button","id","1","1");
var two = create_button("button","type","button","class","button","id","2","2");
var three = create_button("button","type","button","class","button","id","3","3");
var add = create_button("button","type","button","class","button","id","add","+");
var zero = create_button("button","type","button","class","button","id","0","0");
var doublezero = create_button("button","type","button","class","button","id","00","00");
var dot = create_button("button","type","button","class","button","id",".",".");
var equal = create_button("button","type","button","class","button3","id","equal","=");

key.append(buttonClear, buttondel, mod, mul, seven, eight, nine, slash, four, five, six, sub, one, two, three, add, zero, doublezero, dot, equal);

calulator.append(input1,key);

col2.append(calulator);
row2.append(col2);
container.append(row2)

document.body.append(container);


const buttons = document.querySelectorAll(".button");
buttons.forEach((button) =>
  button.addEventListener("click", () => inputDisplay(button.textContent))
);

function inputDisplay(num) {
  input1.value += num;
}

const clearInput = () => {
  input1.value = "";
};

const deleteLast = () => {
  input1.value = input1.value.slice(0, -1);
};

const evaluateExpression = () => {
  try {
    input1.value = eval(input1.value);
  } catch {
    input1.value = "Error";
  }
};

document.getElementById("clear").addEventListener("click", clearInput);
document.getElementById("delete").addEventListener("click", deleteLast);
document.getElementById("equal").addEventListener("click", evaluateExpression);

//Add keyboard input

document.addEventListener("keydown",(event) => {
  const keyinput = event.key;
  if(keyinput>=0 && keyinput<=9){
    inputDisplay(keyinput);
  }
  else if(keyinput === "+" || keyinput === "-" || keyinput === "*" || keyinput === "/" || keyinput === "%" || keyinput === "."){
    inputDisplay(keyinput);
  }
  else if(keyinput === "Backspace"){
    deleteLast();
  }
  else if(keyinput === "Escape") {
    clearInput();
  }
  else if (keyinput === "Enter") {
    evaluateExpression();
  }
})