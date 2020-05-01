//
window.onload= function() {
    this.document.addEventListener('deviceready', init, false);
    init();
}

function init() {
    document.getElementById('btn').addEventListener('click', storeData, true);
}


/** storeData()
 * Function that creates array.
 * If/Else input is not empty push the value to the array and setItem with the key of "names",
 * stringify JSON.
 * Then clear the input.
 * After this parse the JSON to retrieve elements and loop through the array so 
 * we can display the results in the response.
 * Else alert the user to Enter a name
 * 
 */
function storeData() {
    var strArray = [];      //create array
    
    if (document.getElementById('name').value != "" ){
        strArray.push(document.getElementById('name').value);
        sessionStorage.setItem('names', JSON.stringify(strArray));

        document.getElementById('name').value = "";

        strArray = JSON.parse(sessionStorage.getItem('names')) || [];
        for(var i = 0; i < strArray.length; i++){
        $('#response').append(strArray[i] + '<br>') ;
        }
    } else {
        alert ("Please Enter a name");
    }
}
