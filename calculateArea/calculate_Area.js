let length;
let width;
function calculateArea()
{
    length=parseFloat(document.getElementById("length").value);
    width=parseFloat(document.getElementById("width").value);
    let area=length*width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
function calculateExpenditure(grocery1, grocery2, grocery3)
{
    grocery1=parseFloat(document.getElementById("grocery1").value);
    grocery2=parseFloat(document.getElementById("grocery2").value);
    grocery3=parseFloat(document.getElementById("grocery3").value);
    let sum=grocery1+grocery2+grocery3;
    document.getElementById("result1").innerText= `The expenditure is: ${sum}`;
}