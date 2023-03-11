function search() {
    let string = document.getElementById("searchText").value;
    let strings = document.querySelectorAll("li");
    let result = document.getElementById("result");
    let matches = 0;

    for(var i = 0; i < strings.length; i++){
        if (strings[i].innerText.toLowerCase().includes(string) && string != ""){
        matches ++;
        result.innerHTML = `${matches} matches found.`;
        strings[i].style.fontWeight = 'bold';
        }
        else{
        result.innerHTML = `${matches} matches found.`;
        strings[i].style.fontWeight = 'normal';
        }
    }
}