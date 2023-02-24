/*Making an array filled with objects, and each object contains a word and a hint for it*/
const words = [
  {
word: "energy",
hint: "the capacity to do work"
},
{
word: "dominate",
hint: "to rule, govern or control by Superior authority or power"
},
{
word: "strength",
hint: "the quality or degree of being strong"
},
{
word: "Zeus",
hint: "supreme ruler of all the Greek gods, husband to Hera"
},
{
word: "destroy",
hint: "to damage beyond use or repair "
},
{
word: "Hades",
hint: "the god of the underworld and ruler of the dead, son of Chronus and Rhea"
},
{
word: "sudden",
hint: "happening quickly with little or no warning"
},
{
word: "death",
hint: "the cessation of life and all associated process of life"
},
{
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    }
]

/*Getting the h1 element, hint element, input element and both buttons*/
var head = document.querySelector('h1'), 
hin = document.querySelector('#hint');
inp = document.querySelector('input'),
refreshBtn = document.getElementById('refresh'),
checkBtn = document.getElementById('check');
 
/*And please permit my naming sense😑 sometimes i name like a drunkard 🌚*/

/*So the startIt function is the function to begin the game*/
startIt = () =>{
  //getting a random object from the array above. each object contains a word and its respective hint
  
  
  const wordAndHint = words[Math.floor(Math.random() * words.length)];
  //getting the hint from the random object we got up there and storing it in a variable
  let currentHint = wordAndHint.hint
  
  
  //then storing the word from the object in a variable and splitting it into an array so we can shuffle and rearrange it randomly 
  let wordGotArr = wordAndHint.word.split("")
  
  //swapping and rearranging the letters randomly! i hope you understand this technique i used here. i cant explain it all in a comment. i would look weird 🌚
  for (let i = wordGotArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * wordGotArr.length);
        let temp = wordGotArr[i]
        wordGotArr[i] = wordGotArr[j]
        wordGotArr[j] = temp;
    }
    
    //after scrambling our word, we display it to the h1 element in the webpage for the user to see. But since the word was converted to an array before, we have to convert it back to a string.
    head.innerText = wordGotArr.join("")
    //we update the corresponding hint for the word we got into the hint element
    hin.innerText = currentHint;
    //we telling the function to clear the input value each time this function is working
    inp.value = "";
    //and lastly for this function, we convert our word to lower case for easy use and to avoid mistakes
    realWord = wordAndHint.word.toLowerCase();
}

//this is another function to check if the user has typed in the correct word and some actions to take 
const checke= () => {
  
  //we are converting the input value into lowercase and storing it in a variable userInput
  let userInput = inp.value.toLowerCase();
  //now we use if, else ifs and else statement to make it take some actions
  if (!userInput) {
    //alert this when the user clicks the check button without typing anything in the input 
     alert("type in a word scaredycat")
  } else if (userInput !== realWord) {
    //alert this when the user input is wrong, and this will alert the corect answer
     alert(`Wrong🥴 The answer is ${realWord}`);
     //this will clear the input value and a new word and hint will be updated to the screen
  input.value = "";
  startIt();
  //and if he inputs the corect thing, alert "correct" , clear the input field and another random word will be updated
  } else{ alert(`Correct!`)
  input.value = ""
    startIt()
  }
}

//we add two event listeners. one to the refresh button and one to the check button
//the one for the refresh button will call our startIt function everytime its clicked. which means whenever we click the refresh button, a Random word and hint will be generated, the word will be scrambled then both the word and the hint will be displayed in the webpage
refreshBtn.addEventListener("click" , startIt);

//the check button will check if the user has inputed a correct answer 
checkBtn.addEventListener("click" , checke)


//that's all beauties. i wanted to try commenting so you can understand my code, cos when i was making this, i couldn't understand my code myself lol. but if the comments is confusing you, you can just delete it all and #happyCoding