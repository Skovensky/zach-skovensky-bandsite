// 1. create comments part of page
// 2. have working comments 

const userProfile= {username:"", profilePicture:"",} 

const formElement = document.querySelector ('#Comment')

const handleSubmit = (Event)=>{
event.preventDefault();
const name = event.target.name.value
const comment = event.target.comment.value
const postEl = document.querySelector('#post')
}