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
    if(index===total){
        return endQuiz();
    }
    reset();
    
    const data= questions[index];
    console.log(data);
    // quesBox.innerText=data.que;
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}


const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer();
    if(ans===data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
}


let total=questions.length;
let right=0,
    wrong=0;
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                // console.log('yes');
                answer=input.value;
                // console.log(input.value);
            }
        }
    )
    return answer;
}

// reset.......
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )

}


// endQuiz........
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3> Thank you for playing the Quiz </h3>
    <h2> ${right}/${total} are correct </h2>
    `
}
// initial call
loadQuestion();