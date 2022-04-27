let outputScreen = document.getElementById("output-screen");

function display(num)
{
    outputScreen.value +=num; 
}

function Calculate()
{
    /*Evaluate output and print output on screen*/
    try
    {
        outputScreen.value=eval(outputScreen.value);
    }
    /*Alert for invalid input*/
    catch(err)
    {
        alert("Invalid");
    }
}
/*Function to clear the  input screen*/
function Clear()
{
    outputScreen.value="";
}
/*Delete the values on input screen one by one */
function del()
{
    outputScreen.value=outputScreen.value.slice(0,-1);
}