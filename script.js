// document.getElementById('my-elem').addEventListener('click', function() {
//     incrementClicker();
// });
$('#firstCatPhoto').prepend($('<h1>Ginger</h1>'));
$('#ginger').text('Ginger');
$('#secondCatPhoto').prepend($('<h1>Soupie</h1>'));
$('#soupie').text('Soupie');
$('#thirdCatPhoto').prepend($('<h1>Lala</h1>'));
$('#lala').text('Lala');
$('#fourthCatPhoto').prepend($('<h1>Agness</h1>'));
$('#agness').text('Agness');
$('#fifthCatPhoto').prepend($('<h1>Gertrude</h1>'));
$('#gertrude').text('Gertrude');


function incrementClicker(){
    let counter= document.getElementById('clicker').innerHTML;
    counter++;
    document.getElementById('clicker').innerHTML = counter;
}
function incrementSecondClicker() {
    let secondCounter= document.getElementById('secondClicker').innerHTML;
    secondCounter++;
    document.getElementById('secondClicker').innerHTML = secondCounter;
}
