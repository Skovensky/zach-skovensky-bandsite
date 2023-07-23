// 1. create comments part of page
// 2. have working comments 

//const userProfile= {username:"", profilePicture:"",} 

//const formElement = document.querySelector ('#Comment')

//const handleSubmit = (Event)=>{
   // event.preventDefault();
   // const name = event.target.name.value
   // const comment = event.target.comment.value
   // const postEl = document.querySelector('#post')


//function baddcomment() 

/*const convoName = ['Connor Walton', 'Emilie Beach', 'Miles Acosta'];
const convoComment = ['This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what it contains.',
'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
'I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.'];

const convoHTML = "<p id='convo'>"
displayConvo();
convoHTML += "</p>"

document.getElementById('convo').innerHTML = convoHTML;

//const inputName = document.querySelector('.comments__name');
//const inputComment = document.querySelector('.comments__text');

const handleSubmit = (event) => {
const inputName = document.querySelector('.comments__name');
const inputComment = document.querySelector('.comments__text');

    event.preventDefault();
    const name = event.target.inputName.value;
    const comment = event.target.inputComment.value;
    convoName.push(name);
    convoComment.push(comment);

    for (i = convoName.length; i > 0; i++) {
        convoHTML += "<p>" + convoName[i] + "</p><p>" + convoComment[i] + "</p>"
    }
}*/

/*const convoName = ['Connor Walton', 'Emilie Beach', 'Miles Acosta'];
const convoComment = ['This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what it contains.',
    'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    'I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.'];

const convoContainer = document.getElementById('convo')

function displayConvo() {
    const convoHTML = "<p id='convo'>";
    for (let i = 0; i < convoName.length; i++) {
        convoHTML += "<p>" + convoName[i] + "</p><p>" + convoComment[i] + "</p";
    }
    convoHTML += "</p>";
    convoContainer.innerHTML = convoHTML;
}

displayConvo();

const commentForm = document.getElementById('comment');
commentForm.addEventListener('button__comment', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const inputName = document.querySelector('.comments__name');
    const inputComment = document.querySelector('.comments__text');
    const name = inputName.value;
    const comment = inputComment.value;
    convoName.push(name);
    convoComment.push(comment);
    displayConvo();
    inputName.value = '';
    inputComment.value = '';
} */

    /*const convoName = ['Connor Walton', 'Emilie Beach', 'Miles Acosta'];
    const convoComment = ['This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
        'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
        'I can\'t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.'
    ];

    const convoContainer = document.getElementById('convo');

    function displayConvo() {
        let convoHTML = "<p id='convo'>";
        for (let i = 0; i < convoName.length; i++) {
            convoHTML += "<p>" + convoName[i] + "</p><p>" + convoComment[i] + "</p>";
        }
        convoHTML += "</p>";
        convoContainer.innerHTML = convoHTML;
    }

    displayConvo(); // Display initial conversation on page load

    const commentForm = document.getElementById('comment');
    commentForm.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        const inputName = event.target.querySelector('[name="Name"]');
        const inputComment = event.target.querySelector('[name="comment"]');
        const name = inputName.value;
        const comment = inputComment.value;
        convoName.unshift(name);
        convoComment.unshift(comment);
        displayConvo(); // Update displayed conversation after form submission
        inputName.value = ''; // Clear the input fields after submission
        inputComment.value = '';
    }*/

    // {"api_key":"b155056d-905e-4bbf-92d1-ab1e6830d271"}

    const convoContainer = document.getElementById('convo');

function displayConvo(data) {
    let convoHTML = "<p id='convo'>";
    for (const comment of data) {
        convoHTML += "<p>" + comment.name + "</p><p>" + comment.comment + "</p>";
    }
    convoHTML += "</p>";
    convoContainer.innerHTML = convoHTML;
}

async function fetchConvoData() {
    try {
        const response = await axios.get('https://project-1-api.herokuapp.com/comments?api_key=<b155056d-905e-4bbf-92d1-ab1e6830d271>', {
            params: {
                _sort: 'timestamp',
                _order: 'desc',
                _limit: 3 // Limit the response to the 3 most recent comments
            }
        });
        const commentsData = response.data;
        displayConvo(commentsData);
    } catch (error) {
        console.error(error);
    }
}

fetchConvoData();
displayConvo([]); // Display initial conversation on page load

const commentForm = document.getElementById('comment');
commentForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const inputName = event.target.querySelector('[name="Name"]');
    const inputComment = event.target.querySelector('[name="comment"]');
    const name = inputName.value;
    const comment = inputComment.value;

    // send data to the api using axios
    try {
        await axios.post('https://project-1-api.herokuapp.com/comments?api_key=<b155056d-905e-4bbf-92d1-ab1e6830d271>', { name, comment});

        inputName.value = '';
        inputComment.value = '';

        fetchConvoData();
    } catch (error) {
        console.error(error);
    }
}

    


