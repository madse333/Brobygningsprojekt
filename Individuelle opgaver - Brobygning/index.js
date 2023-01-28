

/*Opgave 4*/
let tabcontents = document.getElementsByClassName("tabcontent");

/* Du skal bruge en variable til at tælle antal øvelser */
/* Variable er deklareret med 'let variabelNavn = 0' f.eks (let counter = 0) */
/* Husk at dette skal gøres før 'for-loopet' */

for (let i = 0; i < tabcontents.length-1; i++){
  /* Her er vi inde i for-loopet og vi ønsker at tælle counteren op. Dette gøres med 'variabelNavn++' */

}
/* Til sidst vil vi gerne have det vist på vores side, overvej hvad du skal erstatte for at få det vist*/ 
document.getElementById("antalØvelser").innerHTML = 0;



function openExercise(evt, exercise) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(exercise).style.display = "block";
    evt.currentTarget.className += " active";
}

function openCreateExercise(evt, exercise){
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(exercise).style.display = "block";
    evt.currentTarget.className += " active";
    
    let html = "<label for='Øvelser'>Øvelser</label><select name='Øvelser' id='Øvelser'>"
    for (let tab of tablinks){
        if (!tab.className.includes("active")){
            html = html + "<option value = '"+ tab.textContent +"'>"+ tab.textContent +"</option>"
        }
    }
    html = html + "</select>"
    document.getElementById("Øvelsesliste").innerHTML = html;
}

function addExercise(evt){
    let øvelse = document.getElementById("Øvelser").value;
    let sæt = document.getElementById("antalSæt").value;
    let reps = document.getElementById("antalReps").value;

    document.getElementById("træningsplan").innerHTML += "<li>" + øvelse + " skal tages af " + sæt + " sæt på " + reps +" repetitioner.</li>";
}


function gemTræningsplan()
{
    var textToWrite = document.getElementById("træningsplan").outerText;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = "Træningsplan";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

function tilføjKommentar(){
  let kommentar = document.getElementById("Kommentar").value;
  console.log(kommentar);
  document.getElementById("træningsplan").innerHTML += "<li>" + kommentar + "</li>";
  document.getElementById("Kommentar").value = "";
}