database = firebase.database();
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var gameStateRef  = database.ref('data/height');
gameStateRef.on("value",function(data){
    totalHeight = data.val();
    setInterval(repeat, 1000)
});
function set(per){
    if(per >= 0 && per <= 100){
        document.getElementById('level').style.height = (65/100)*per + 'vh';
        document.getElementById('level').style.marginTop = (65/100)*(100-per) + 'vh';
        document.getElementById('leveltext').innerHTML = per + '%';
    }
    else{
        document.getElementById('leveltext').innerHTML = per + '';
    }
}
function repeat(){
    var gameStateRef  = database.ref('data/b');
    gameStateRef.on("value",function(data){
        n2 = data.val();
        per = (n2/totalHeight)*100;
        set(per)
    });
}