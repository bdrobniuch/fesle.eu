
//var audio = new Audio('./resources/wav/click.flac');

var interval = 1000;
var myVar = setInterval(myTimer, 1000);

var chromaticScale = [
    
    //XP Dojo for Dev-Teams
    ["workshops.html#ssfat", "How to encourage people to do <span>pair programming</span>?"], 
    ["workshops.html#ssfat", "How to run a <span>mob programming</span> session remotely?"],
    ["workshops.html#ssfat", "How to introduce <span>TDD</span> and <span>BDD</span> approach in my team?"],
    ["workshops.html#ssfat", "How to move from acceptance criteria towards <span>specification by example</span>?"],
    ["workshops.html#ssfat", "How to involve <span>testers</span> in the initial stages of software development?"],
    ["workshops.html#ssfat", "How to talk with users and stakeholders to uncover <span>hidden assumptions</span>?"],
    ["workshops.html#ssfat", "How to work online collaboratively on an <span>outcome based product backlog</span>?"],
    ["workshops.html#ssfat", "How to run an <span>example mapping</span> session remotely?"],
    ["workshops.html#ssfat", "How to document your product using <span>live executable documentation</span> in Gherkin?"],
    ["workshops.html#ssfat", "How to better scale automated tests for web applications with <span>Screenplay Pattern</span>?"],
    

    //Product Coaching Dojo: eCommerce Sparring

    ["workshops.html#pc", "What <span>questions</span> work best when talking with clients?"],
    ["workshops.html#pc", "How to identify the right <span>business goals</span>?"],
    ["workshops.html#pc", "How to define (leading) <span>KPIs</span>?"],
    ["workshops.html#pc", "How to <span>align</span> business with tech people?"],
    ["workshops.html#pc", "How to design <span>experiments</span> helping validate your ideas?"],
    ["workshops.html#pc", "How to propose alternative and <span>better</span> solutions?"],

    //Buisnes Product Backlog

    ["workshops.html#bpb", "What is (and what isn't) a <span>Product Backlog</span>?"],
    ["workshops.html#bpb", "How to build a <span>Product Backlog</span> to best meet its goal?"],
    ["workshops.html#bpb", "What can we put (and what shouldn't we) inside a <span>Product Backlog</span>?"],
    ["workshops.html#bpb", "How to define <span>Product Backlog</span> elements to make them valuable on their own?"],
    ["workshops.html#bpb", "What does <span>Product Coaching</span> mean?"],
    ["workshops.html#bpb", "How to deliver <span>business value</span> as early as possible?"],
    ["workshops.html#bpb", "When to <span>stop investing</span> in a given functionality?"],
    ["workshops.html#bpb", "Who and how is responsible for the <span>Product Backlog</span> on different levels?"],
    ["workshops.html#bpb", "How to order a <span>Product Backlog</span> while working with stakeholders and development teams?"],
    ["workshops.html#bpb", "How to move from running <span>500 concurrent projects</span> in your organization?"],
    
    //How to recruit for Agile roles?
    ["workshops.html#htrfar", "What is a <span>competency</span>?"],
    ["workshops.html#htrfar", "How to build a candidate's <span>competency profile</span>?"],
    ["workshops.html#htrfar", "What recruitment techniques can help to check a <span>candidate's experience</span>?"],
    ["workshops.html#htrfar", "Which <span>recruitment techniques</span> are ineffective and harmful?"],
    ["workshops.html#htrfar", "How to formulate proper <span>recruitment questions</span>?"],
    ["workshops.html#htrfar", "What is the <span>STAR</span> model?"],
    ["workshops.html#htrfar", "What are the advantages of <span>internal</span> vs. <span>external</span> recruiting?"],
    ["workshops.html#htrfar", "What aspects distinguish a <span>professional</span> recruitment process?"],

    //Fear and Anxiety in organizations
    ["workshops.html#faaio", "What are <span>emotions</span>?"],
    ["workshops.html#faaio", "What is the <span>chemistry</span> behind 'how do you feel'?"],
    ["workshops.html#faaio", "What are typical <span>symptoms</span> and <span>defense mechanisms</span> of anxiety?"],
    ["workshops.html#faaio", "How to deal with <span>anxiety</span>?"],
    ["workshops.html#faaio", "How to help others to deal with <span>anxiety</span>?"],
    ["workshops.html#faaio", "How to pay attention to <span>projective identification</span>?"],
    ["workshops.html#faaio", "What are the <span>systemic</span> sources of anxiety in the organization?"],
    ["workshops.html#faaio", "What are the <span>psychodynamic</span> sources of anxiety in the organization?"],
    ["workshops.html#faaio", "What are the approaches for <span>prevention</span> and <span>intervention</span>?"],

    //Agile Transformation Workshop
    ["workshops.html#atw", "What are common <span>fail patterns</span> organizations encounter while moving towards Agile?"],
    ["workshops.html#atw", "What are the differences between various <span>Scaling Agile</span> and <span>Scrum Frameworks</span>?"],
    ["workshops.html#atw", "How to build your <span>product</span> with multiple Scrum Teams?"],
    ["workshops.html#atw", "What are the crucial steps in successful <span>Agile Transformation</span>?"],
    ["workshops.html#atw", "How to provoke <span>action</span> on higher management?"],
    ["workshops.html#atw", "How to model <span>conversations</span> with Causal Loop Diagrams?"],
    ["workshops.html#atw", "How to <span>avoid</span> working on different tasks than planned?"],
    ["workshops.html#atw", "How to deal with <span>no time</span> for improvements?"],
    ["workshops.html#atw", "How to handle <span>integration</span> issues?"],
    ["workshops.html#atw", "How to fight with a low <span>bus factor</span>?"],
    ["workshops.html#atw", "What to do with <span>bugs</span> no team wants to resolve?"],
    ["workshops.html#atw", "How to foster <span>multi teams</span> cooperation?"],

    //How to boost motivation with your Onboarding?
    ["workshops.html#onb", "What is <span>Onboarding</span>?"],
    ["workshops.html#onb", "What are the most important steps in <span>Onboarding</span>?"],
    ["workshops.html#onb", "How to build <span>employee motivation</span> in the first months?"],
    ["workshops.html#onb", "What <span>onboarding techniques</span> can help to check an employees experience?"],
    ["workshops.html#onb", "Which <span>onboarding techniques</span> are ineffective and harmful?"],
    ["workshops.html#onb", "How to prepare the <span>Onboarding</span> process and implement it?"],
    ["workshops.html#onb", "How to measure <span>Onboarding effectiveness</span>?"],

    //How to Offboard so that employees recommend us
    ["workshops.html#off", "What is <span>Offboarding</span>?"],
    ["workshops.html#off", "How to <span>dismiss an employee</span> from your organization?"],
    ["workshops.html#off", "What are the most important steps when <span>Offboarding</span>?"],
    ["workshops.html#off", "How to prepare your <span>Exit Interview</span>?"],
    ["workshops.html#off", "How to guide your employee during his <span>last weeks</span> in the company?"],
    ["workshops.html#off", "What <span>offboarding techniques</span> can help to check your employees experience?"],
    ["workshops.html#off", "Which <span>offboarding techniques</span> are ineffective and harmful?"],
    ["workshops.html#off", "How to prepare your <span>Offboarding process</span> and implemented it?"],

    //Feedback, why we don't like it and how to change it?
    ["workshops.html#fee", "Why <span>feedback</span> is so important?"],
    ["workshops.html#fee", "What is most important in <span>feedback</span>?"],
    ["workshops.html#fee", "Which <span>feedback techniques</span> can help to take care of yourself and others?"],
    ["workshops.html#fee", "Which <span>feedback techniques</span> are ineffective and harmful?"],
    ["workshops.html#fee", "How to prepare for <span>feedback</span>?"],
    ["workshops.html#fee", "What are the challenges in giving <span>feedback</span>?"],

    //Agile in HR
    ["workshops.html#ahr", "Why <span>Agile</span> in HR?"],
    ["workshops.html#ahr", "What can be found in an <span>Agile Toolbox</span>?"],
    ["workshops.html#ahr", "What is the difference between <span>agile HR</span> and <span>HR for agile</span> organization?"],
    ["workshops.html#ahr", "How to make <span>Agile decisions</span>?"],
    ["workshops.html#ahr", "How to understand a particular <span>problem</span> and find a <span>vision</span> for a solution?"],
    ["workshops.html#ahr", "What are the useful <span>agile tools</span> for HR?"],
    ["workshops.html#ahr", "How to work as a <span>self-organising</span> team?"],

    //Scrum in 120 minutes
    ["workshops.html#scrumsixty", "What makes some teams more <span>effective</span> than others?"],
    ["workshops.html#scrumsixty", "What is the difference between <span>empirical process control</span> and <span>defined process control?</span>"],
    ["workshops.html#scrumsixty", "What is the <span>heart</span> of Scrum?"],
    ["workshops.html#scrumsixty", "What are the <span>reasons</span> for each Scrum element?"],
    ["workshops.html#scrumsixty", "When <span>NOT</span> to choose Scrum?"],
    ["workshops.html#scrumsixty", "Ok, we have Scrum .. <span>what's next?</span>"]
]

var notePool = [];
var beat = 2;

function myTimer() {
  if (beat==0) {
    let questionPicked = pickANote();
    document.getElementById("questionlink").setAttribute('href',  questionPicked[0]); 
    document.getElementById("questionlink").innerHTML =  questionPicked[1];
    beat = 4;
  }
  beat--;
  //document.getElementById("bar").value = beat;
  updateInterval();
}

function updateInterval()
{   
    var bpm = 60;
    var newInterval = Math.round(1000*60/bpm);
 
    if ((bpm >= 10)&&(bpm <= 400)) {      
  
        if (newInterval != interval) {
            interval = newInterval;
            clearInterval(myVar);
            myVar = setInterval(myTimer, interval);
        }
    }
}

function pickANote () {
  
    if (notePool.length ==0) {
        notePool = [...chromaticScale];
        shuffleArray(notePool);
    }
    return notePool.pop();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
