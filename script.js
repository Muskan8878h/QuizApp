const questions= [
    {
        'que': 'Which of the following is a Markup Language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHp',
        'correct':'a'
    },
    {
        'que': 'Whatyear was js launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':'b'
    },
    {
        'que': 'What does CSS stands for?',
        'a':'Hypertext Markup language',
        'b':'Cascading style Sheet',
        'c':'Jason Object Notation',
        'd':'Cascading sheet',
        'correct':'b'
    }
]

let index=0;
const quesBox= document.getElementById("quesBox");

const optionInputs=document.querySelectorAll('.options');

const loadQuestion=()=>{
    const data= questions[index];
    console.log(data);
    // quesBox.innerText=data.que;
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

// initial call
loadQuestion();