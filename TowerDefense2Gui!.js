var menu = document.createElement('div');
menu.style.position = 'fixed';
menu.style.top = '50%';
menu.style.left = '50%';
menu.style.transform = 'translate(-50%, -50%)';
menu.style.backgroundColor = '#FFC0CB';
menu.style.border = '2px solid #fff';
menu.style.padding = '20px';
menu.style.zIndex = '9999';
menu.style.width = '400px';
menu.style.height = '300px';
menu.style.borderRadius = '20px';

var discordtext = document.createElement('p1');
discordtext.textContent = 'Discord';
discordtext.style.color = 'darkblue';
discordtext.style.margin = '10px';
discordtext.style.fontSize = '24px';
discordtext.style.textDecoration = 'underline';

discordtext.addEventListener('click', function() { 
      window.open("https://discord.gg/jYUCn5VTVY", "_blank");
});


var changeBackgroundButton = document.createElement('button');
changeBackgroundButton.textContent = 'Change Background Color In Game';
changeBackgroundButton.style.fontSize = '24px';
changeBackgroundButton.style.margin = '10px';
changeBackgroundButton.addEventListener('click', function() {
  colorPicker.click();
});


var colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.display = 'block';


changeBackgroundButton.addEventListener('click', function() {

  colorPicker.click();

  
  colorPicker.addEventListener('change', function() {
  
    var color = colorPicker.value;

  
    var element = document.querySelector('.styles__header___1c59U-camelCase');
    var element1 = document.querySelector('.styles__healthBarInsideShadow___2kzY8-camelCase');
    var element2 = document.querySelector('.styles__healthBarInside___2thhB-camelCase');
    var element3 = document.querySelector('.styles__front___vcvuy-camelCase'); 
    var element3 = document.querySelector('.styles__sidebar___1XqWi-camelCase');
    
    element.style.backgroundColor = color;
    element1.style.backgroundColor = color;
    element2.style.backgroundColor = color;
    element3.style.backgroundColor = color;
  });
});

var SetTokens = document.createElement('button');
SetTokens.textContent = 'Set Coins';
SetTokens.style.fontSize = '24px';
SetTokens.style.margin = '10px';

SetTokens.addEventListener('click', function() { 
    (async()=>{var e=document.createElement("iframe");document.body.append(e),window.confirm=e.contentWindow.confirm.bind(window),window.console.log=e.contentWindow.console.log.bind(window),e.style.display="none",(await Object.values(webpackJsonp.push([[],{"":(e,o,t)=>{o.cache=t.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host+"/api/games":"play.blooket.com/api/gamequestionsets")+"?gameId=6368436a976422d8a3f70cd7").then(e=>parseInt("0"+e.data.questions.find(e=>"../cheats/tower-defense-2/setCoins.js"==e.question)?.answers?.[0]))<1678659482780||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats"))&&(console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tsetCoins.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem",""),e=document.createElement("iframe"),document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove(),Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({coins:Number(parseInt(prompt("How many coins would u like to set it to?")))}))})();
    });


var SetRound = document.createElement('button');
SetRound.textContent = 'Set Round';
SetRound.style.fontSize = '24px';
SetRound.style.margin = '10px';

SetRound.addEventListener('click', function() {
 (async()=>{var e=document.createElement("iframe");document.body.append(e),window.confirm=e.contentWindow.confirm.bind(window),window.console.log=e.contentWindow.console.log.bind(window),e.style.display="none",(await Object.values(webpackJsonp.push([[],{"":(e,o,t)=>{o.cache=t.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host+"/api/games":"play.blooket.com/api/gamequestionsets")+"?gameId=6368436a976422d8a3f70cd7").then(e=>parseInt("0"+e.data.questions.find(e=>"../cheats/tower-defense-2/setRound.js"==e.question)?.answers?.[0]))<1678659482840||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats"))&&(console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tsetRound.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem",""),e=document.createElement("iframe"),document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove(),Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({round:Number(parseInt(prompt("What round do you want to set to?")))}))})();
});

var moveButton = document.createElement('button');
moveButton.textContent = 'Move';
moveButton.style.position = 'absolute';
moveButton.style.bottom = '10px';
moveButton.style.right = '10px';
moveButton.style.fontSize = '18px';
moveButton.style.padding = '10px';
moveButton.style.backgroundColor = '#4CAF50';
moveButton.style.color = '#fff';
moveButton.style.border = 'none';
moveButton.style.borderRadius = '4px';
var moveButton = document.createElement('button');
moveButton.textContent = 'Move';
moveButton.style.position = 'absolute';
moveButton.style.bottom = '10px';
moveButton.style.right = '10px';
moveButton.style.fontSize = '18px';
moveButton.style.padding = '10px';
moveButton.style.backgroundColor = '#4CAF50';
moveButton.style.color = '#fff';
moveButton.style.border = 'none';
moveButton.style.borderRadius = '4px';

var initialX, initialY, currentX, currentY;


moveButton.addEventListener('mousedown', function(event) {
  event.preventDefault();
  initialX = event.clientX;
  initialY = event.clientY;

  var move = function(event) {
    currentX = event.clientX - initialX;
    currentY = event.clientY - initialY;

    initialX = event.clientX;
    initialY = event.clientY;

    menu.style.top = (menu.offsetTop + currentY) + 'px';
    menu.style.left = (menu.offsetLeft + currentX) + 'px';
  };

  var stopMove = function() {
    menu.style.cursor = 'default';
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', stopMove);
  };

  document.addEventListener('mousemove', move);
  document.addEventListener('mouseup', stopMove);
});


var exitButton = document.createElement('button');
exitButton.textContent = 'Exit';
exitButton.style.position = 'absolute';
exitButton.style.bottom = '10px';
exitButton.style.left = '10px';
exitButton.style.fontSize = '18px';
exitButton.style.padding = '10px';
exitButton.style.backgroundColor = '#f44336';
exitButton.style.color = '#fff';
exitButton.style.border = 'none';
exitButton.style.borderRadius = '4px';
exitButton.addEventListener('click', function() {
  document.body.removeChild(menu);
});

menu.appendChild(SetTokens);
menu.appendChild(SetRound);
menu.appendChild(changeBackgroundButton);
menu.appendChild(moveButton);
menu.appendChild(exitButton);
menu.appendChild(colorPicker);
menu.appendChild(discordtext);
document.body.appendChild(menu);
