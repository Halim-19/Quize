const quiestions=[
    {
        quest:"Is that have an impact in your day?",
        ans1:"yes",
        ans2:"no",
        ans3:"",
    },
    {
        quest:"Do spent time with your family or friends ?",
        ans1:"Yes",
        ans2:"No",
        ans3:"",
    },
    {
        quest:" How can descripe your relation with your friends ?",
        ans1:"good",
        ans2:"Not bad",
        ans3:"I dont have friends",
    },
    {
        quest:"How much can u rate yourself ?",
        ans1:"0-3",
        ans2:"3-6",
        ans3:"6-10",
    },
    {
        quest:"Do you think your exsitance make defferent ?",
        ans1:"Yes",
        ans2:"Mybe",
        ans3:"Not at all",
    },
    {
        quest:"How much u sure that u gonna acheive  smthg u want ?",
        ans1:"100%",
        ans2:"50%",
        ans3:"I don't know",
    },
    {
        quest:"How your goals are relate to your situation rn ?",
        ans1:"it's the reason",
        ans2:"A little",
        ans3:"none",
    },
    {
        quest:"did u ever experiance a taught time ?",
        ans1:"yes I did",
        ans2:"many times",
        ans3:"never",
    },
    {
        quest:"How much it effect to you ?",
        ans1:"my life changed",
        ans2:"I learn smthg",
        ans3:"nothing",
    },
    {
        quest:"How did u react ?",
        ans1:"I made a dicision",
        ans2:"I just gave up",
        ans3:"Nothing",
    },
    {
        quest:"What your education based on ?",
        ans1:"school",
        ans2:"Self education",
        ans3:"Both",
    },
    {
        quest:"How u spent your day ?",
        ans1:"it's depend",
        ans2:"A to do liste",
        ans3:"Unorgnized",
    },
    {
        quest:"Did you steak with a plan u make ?",
        ans1:"Yes",
        ans2:"often",
        ans3:"never",
    },
    {
        quest:"Do you have plans for the next 10 years ?",
        ans1:"I do",
        ans2:"I don't",
        ans3:"not intersted",
    },
    {
        quest:"Do like been around ppl ?",
        ans1:"Yes",
        ans2:"not that much",
        ans3:"no ",
    },
    {
        quest:"Descripe how sociaty are ?",
        ans1:"doing well",
        ans2:"bad",
        ans3:"awfull",
    },
    {
        quest:"Do spent times by youself ?",
        ans1:"All times",
        ans2:"few times",
        ans3:"never",
    },
    {
        quest:"are u overthinker ?",
        ans1:"Yes",
        ans2:"No",
        ans3:"I don't know",
    },
    {
        quest:"Do you believe that u can lead the world ?",
        ans1:"yes",
        ans2:"no",
        ans3:"Not instersted",
    },
    {
        quest:"Do you like sharing your ideas with other ppl ?",
        ans1:"Yes",
        ans2:"Some of them",
        ans3:"Not at all",
    },
    {
        quest:"Did you think could ppl trust you ?",
        ans1:"Yes",
        ans2:"No",
        ans3:"I don't know",
    },
    {
        quest:"It's matter ?",
        ans1:"ofcours",
        ans2:"No",
        ans3:"I don't know",
    },
]



function select(element1,element2,element3){
    element1.classList.toggle("choisen");
    element2.classList.remove("choisen");
    element3.classList.remove("choisen");
}
//onload
const note=document.querySelector(".note");
const intr=document.querySelector(".intrdctn");
const mainques=document.querySelector(".main");
const startBtn=document.querySelector("#firstBtn");
startBtn.addEventListener('click',()=>{
    intr.style.display="none";
    setTimeout(()=>{
        note.style.display="flex";
    },1000)
    
});
//note
const noteBtn=document.querySelector("#secondBtn");
noteBtn.addEventListener('click',()=>{
    note.style.display="none";
    setTimeout(()=>{
        mainques.style.display="block";
    },1000)
    
})
//check only one
const question=document.querySelector(".question");
const answers=document.querySelectorAll(".answer");
const one=document.querySelector(".one");
const two=document.querySelector(".two");
const three=document.querySelector(".three");
var answersSelected=[];
answers.forEach((answer)=>{
    answer.addEventListener("click",(e)=>{
        if (answer.classList.contains("one")) {
            select(answer,two,three);
            answersSelected.push("one");
        } else {
            if (answer.classList.contains("two")) {
                select(answer,one,three);
                answersSelected.push("two");
            } else {
                select(answer,one,two);
                answersSelected.push("three");
            }
        }
    })
})


//submite
const btn=document.querySelector(".btn")
var num=0;
btn.addEventListener('click',()=>{
    answers.forEach((answer)=>{ 
        if (answer.classList.contains("choisen")) {
            if (num<quiestions.length) {
                nextQuest(num);
                answer.classList.remove("choisen")
                num++                
            } else {
                question.textContent= "Your a "+result(answersSelected); 
                one.textContent=null;
                two.textContent=null;
                three.textContent=null;
                btn.style.display="none";
            }

        }

    })
})
 function nextQuest(num){
    let item= quiestions[num];
    question.textContent=item.quest;
    one.textContent=item.ans1;
    two.textContent=item.ans2;
    three.textContent=item.ans3;
}

function result(a=[]){
    var selfControl=0;
    var solitude=0;
    var confident=0;
    var ambition=0;
    var mindset=0;
    var living=0;
    var think=0;
    var leader=0;
    var likebale=0;
    if (a[0]=="three" && a[1]=="two")selfControl+=1;
    if (a[2]=="two")solitude+=1;
    if (a[3]=="three")solitude+=1;
    if (a[4]=="three")confident+=1;
    if (a[5]=="two")confident-=1;
    if (a[6]=="one")ambition+=1;
    if (a[7]=="one")living+=1;
    if (a[8]=="two" ||a[8]=="one" )mindset+=1;
    if (a[9]=="two" ||a[9]=="one")think+=1;
    if (a[10]=="two")ambition+=1;
    if (a[11]=="two")living+=1;
    if (a[12]=="two")living+=1;
    if (a[13]=="one")selfControl+=1;
    if (a[14]=="one")ambition+=1;
    if (a[15]=="one")solitude+=1;
    if (a[16]=="two" ||a[16]=="three")solitude+=1;
    if (a[17]=="one")solitude+=1;
    if (a[18]=="one")mindset+=1;
    if (a[19]=="one" ||a[19]=="three")think+=1;
    if (a[20]=="one")leader+=1;
    if (a[21]=="one" ||a[21]=="two" )leader+=1;
    if (a[22]=="one")likebale+=1;
    if (a[23]=="one")likebale+=1;
    if (a[24]=="one")likebale+=1;



    var sigma=0;
    var alpha=0;
    var beta=0;
    var gamma =0;
    var omega=0;
    var delta=0;
    switch (likebale) {
        case 0:
            delta++;
            break;
    
        case 1||2:
            sigma++;beta++
            break;
    }
    switch (leader) {
        case 0:
            gamma++;delta++
            break;
    
        case 1||2:
            alpha++;
            break;
    }
    switch (think) {
        case 0:
            delta++;gamma++
            break;
    
        case 1||2:
            omega++;sigma++
            break;
    }
    switch (living) {
        case 0||1:
            beta++;
            break;
    
        case 3||2:
            omega++;sigma++;
            break;
    }
    switch (mindset) {
        case 0:
            gamma++;beta++;
            break;
    
        case 1||2:
            delta++;
            break;
    }
    switch (ambition) {
        case  0||1:
            delta++;
            break;
    
        case 2||3:
            gamma++;
            break;
    }
    switch (confident) {
        case 0:
            omega++;gamma;
            break;
    
        case 1||2:
            alpha++;sigma++;
            break;
    }
    switch (solitude) {
        case 1 || 0:
            beta++;alpha++;omega++;
            break;
    
        case 2:
            delta++;sigma++
            break;
    }
    switch (selfControl) {
        case 0:
            sigma++;
            break;
        case 1||2:
            gamma++;delta++;
            break;
    }

    var prsnlt=[];
    prsnlt.push(sigma,alpha,beta,gamma ,omega,delta);
    
    var max=0;
    for (let i = 1; i < prsnlt.length-1; i++) {
        if(prsnlt[0]<prsnlt[i])max=i;
        
    }
    switch (max) {
        case 0:
            return "Sigma";break;
        case 1:
                return "Alpha";
            break;
        case 2:
            return "Beta";break;
        case 3:
                return "Gamma";break;
        case 4:
            return "Omega"; break;
    
        default:
            return "Delta";
            break;
    }
    return max;
}