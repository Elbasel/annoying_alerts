function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function changeText(type) {
    if (type === 'good') {
        output.textContent = questions[i].good
        button_1.textContent = answers[i].good[0]
        button_2.textContent = answers[i].good[1]
    }
    else {
        output.textContent = questions[i].bad
        button_1.textContent = answers[i].bad[0]
        button_2.textContent = answers[i].bad   [1]
    }
    i++;
}

const output = document.getElementById('output')
const button_1 = document.getElementById('option-1')
const button_2 = document.getElementById('option-2')

let questions = [{good: 'Want to play a game?', bad: 'Want to play a game?'}, {good: 'Good!, Close your eyes then.', bad: 'That\'s too bad :('}, {good: 'What\'s your favourite food?', bad: 'Bye then :('}, {good:'I love pizza', bad: ':('}]
let answers = [{good: ['Yes', 'No'], bad: ['Yes', 'No']}, {good: ['My eyes are closed', 'No!'], bad: ['I Want to play!!', 'Fuck off bro.']}, {'good': ['Pizza', 'Something else.'], bad: ['Come back!', 'Bye bye.']}]
let i = 0;

// button_1.addEventListener('click', changeText('good'))
// button_2.addEventListener('click', changeText('bad'))
// let jsonData = JSON.stringify(questions) 
// download(jsonData, 'json.txt', 'text/plain');
