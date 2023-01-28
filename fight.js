let startGame = () =>{
    document.getElementById("counterLbl").innerHTML = "Starting in"
    let prepTime = 3;
    beginFight(prepTime);
    for (let i = prepTime; i >= 0; i--){
        delay(i);
    }
}

function delay(i) {
    setTimeout(function(){
        document.getElementById("counter").innerHTML = i;
    }, ((3-i) * 1000));
}

function beginFight(i){
    setTimeout(function(){
        document.getElementById("counter").innerHTML = "";
        document.getElementById("counterLbl").innerHTML = "FIGHT!"
        gameLogic();
    }, (i * 1000 + 10));

}


function gameLogic(){
    document.getElementById("2").innerHTML = "før while";
    let modstandere = Utils.getModstandere();
    //while (grupper[0].målinger[1] != 5 || grupper[1].målinger[1] != 5){
        for (let i = 0; i < modstandere.length; i++){
            document.getElementById("2").innerHTML = modstandere[i][0].gruppenr;
            modstandere[i][0].målinger[1] = Math.floor(Math.random() * 11);
            }
            if (grupper[i].målinger[1] > 9){
                grupper[i].bicepFlex = "/Frame9.png"
                let points = Number(document.getElementById(grupper[i].gruppeNr).innerHTML);
                points++;
                document.getElementById(grupper[i].gruppeNr + "").innerHTML = points;
            }
            else if (grupper[i].målinger[1] > 8){
                grupper[i].bicepFlex = "/Frame8.png"
            }
            else if (grupper[i].målinger[1] > 7){
                grupper[i].bicepFlex = "/Frame7.png"
            }
            else if (grupper[i].målinger[1] > 6){
                grupper[i].bicepFlex = "/Frame6.png"
            }
            else if (grupper[i].målinger[1] > 5){
                grupper[i].bicepFlex = "/Frame5.png"
            }
            else if (grupper[i].målinger[1] > 4){
                grupper[i].bicepFlex = "/Frame4.png"
            }
            else if (grupper[i].målinger[1] > 3){
                grupper[i].bicepFlex = "/Frame3.png"
            }
            else if (grupper[i].målinger[1] > 2){
                grupper[i].bicepFlex = "/Frame2.png"
            }
            else if (grupper[i].målinger[1] > 1){
                grupper[i].bicepFlex = "/Frame1.png"
            }
            else{
                grupper[i].bicepFlex = "/Frame0.png"
                let points = document.getElementById(grupper[i].gruppeNr).innerHTML;
                points += 1;
                document.getElementById(grupper[i].gruppeNr + "").innerHTML = points;
            }
        }
    //}
