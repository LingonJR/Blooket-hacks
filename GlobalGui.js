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

var RemoveRandomName = document.createElement('button');
RemoveRandomName.textContent = 'Remove Random Name';
RemoveRandomName.style.fontSize = '24px';
RemoveRandomName.style.margin = '10px';

RemoveRandomName.addEventListener('click', function() { 

    
(async () => { 
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/removeRandomName.js")?.answers?.[0]}`)).then(async x => {
        if (1678659460251 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
          
            Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ isRandom: false, client: { name: "" } });
            document.querySelector('[class*="nameInput"]').focus();
        }
    });
})();
    });

var Highlightanswer = document.createElement('button');
Highlightanswer.textContent = 'Highlight Answers';
Highlightanswer.style.fontSize = '24px';
Highlightanswer.style.margin = '10px';

Highlightanswer.addEventListener('click', function() { 

    (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/highlightAnswers.js")?.answers?.[0]}`)).then(async x => {
        if (1678659460228 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {

            const { stateNode: { state, props } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
            [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
                else answer.style.backgroundColor = "rgb(189, 15, 38)";
            });
        }
    });
})();
});

var Flood = document.createElement('button');
Flood.textContent = 'Flood Game';
Flood.style.fontSize = '24px';
Flood.style.margin = '10px';
Flood.style.display = 'block';
Flood.style.margin = '0 auto';

Flood.addEventListener('click', function() {

(async () => { 
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/floodGame.js")?.answers?.[0]}`)).then(async x => {
        if (1678659460220 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            let i = document.createElement('iframe');
            document.body.append(i);
            window.prompt = i.contentWindow.prompt.bind(window);
            i.remove();
            
            const id = prompt("Game ID:");
            const name = prompt("Name:");
            const amount = parseInt(prompt("Amount:"));
            
            let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
            const axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a;
            const firebase = Object.values(webpack.c).find(x => x.exports?.a?.initializeApp).exports.a;
            
            for (let i = 1; i <= amount; i++) {
                (async () => {
                    const { data: { success, fbToken, fbShardURL } } = await axios.put("https://fb.blooket.com/c/firebase/join", { id, name: `${name}${i}` });
                    if (!success) return;
                    const liveApp = firebase.initializeApp({
                        apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                        authDomain: "blooket-2020.firebaseapp.com",
                        projectId: "blooket-2020",
                        storageBucket: "blooket-2020.appspot.com",
                        messagingSenderId: "741533559105",
                        appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                        measurementId: "G-S3H5NGN10Z",
                        databaseURL: fbShardURL
                    }, `${name}${i}`);
                    const auth = firebase.auth(liveApp);
                    await auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(console.error);
                    await auth.signInWithCustomToken(fbToken).catch(console.error);
                    await liveApp.database().ref(`${id}/c/${name}${i}`).set({ b: "Black" });
                    liveApp.delete();
                })();
                await new Promise(r => setTimeout(r, 100));
            }
        }
    });
})();
});


var AllBlooks = document.createElement('button');
AllBlooks.textContent = 'All Blooks';
AllBlooks.style.fontSize = '24px';
AllBlooks.style.margin = '10px';

AllBlooks.addEventListener('click', function() {
(async () => { 
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/useAnyBlook.js")?.answers?.[0]}`)).then(async x => {
        if (1678659460277 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
        
            const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
            const blooks = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a;
            if (location.pathname == "/blooks") stateNode.setState({ blookData: Object.keys(blooks).reduce((a, b) => (a[b] = (stateNode.state.blookData[b] || 1), a), {}), allSets: Object.values(blooks).reduce((a, b) => (a.includes(b.set) ? a : a.concat(b.set)), []) });
            else if (Array.isArray(stateNode.state.unlocks)) stateNode.setState({ unlocks: Object.keys(blooks) });
            else stateNode.setState({ unlocks: blooks });
        }
    });
})();
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

menu.appendChild(RemoveRandomName);
menu.appendChild(AllBlooks);
menu.appendChild(changeBackgroundButton);
menu.appendChild(moveButton);
menu.appendChild(exitButton);
menu.appendChild(colorPicker);
menu.appendChild(discordtext);
menu.appendChild(Highlightanswer);
menu.appendChild(Flood);
document.body.appendChild(menu);
