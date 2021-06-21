import { Chatroom } from './chats.js';
import { ChatUI } from './ui.js';

let chatroom1 = new Chatroom('general', 'Uros');
let chatroom2 = new Chatroom('js', 'Ana');
let chatroom3 = new Chatroom('homework', 'Vuk');
let chatroom4 = new Chatroom('tests', 'Nikola');

//let chatrooms = [chatroom1, chatroom2, chatroom3, chatroom4];
// console.log(chatrooms);
// console.log(chatroom1);
//console.log(chatroom3.addChat('Test poruka'));

//Poziv asinhrone metode addChat
// chatroom1.addChat('Test poruka :)')
// .then(() =>{
// console.log('Chat je upesno dodat');
// })
// .catch(err =>{
// console.log(err);
// });
// chatroom2.addChat('Zdravo svima!');
// .then(() =>{
// console.log('Chat je upesno dodat');
// })
// .catch(err =>{
// console.log(err);
// });

//Poziv nase callback f-je getChats
// chatroom1.getChats(data => {
//     console.log(data);
// });

let username = () => {
    if (localStorage.username) {
        return localStorage.username;
    }
    else {
        return 'anonymus';
    }
}

let room = () => {
    if (localStorage.room){
        return localStorage.room;
    }
    else{
        return'general'
    }
}

let chatroom5 = new Chatroom(room(), username());
// chatroom5.addChat('Nemamo test')
//     .then(() => {
// console.log('Chat je upesno dodat');
// })
// .catch(err =>{
// console.log(err);
// });
chatroom5.getChats(data => {
    console.log(data);
});
//chatroom5.updateUsername('Milijana');
//    chatroom5.updateRoom('general');
// chatroom5.getChats(data => {
//     console.log(data);
// });

let ulChatList = document.querySelector('ul');
let chatui1 = new ChatUI(ulChatList)
console.log(chatui1);
console.log(chatui1.list)

chatroom5.getChats(data => {
    chatui1.templateLI(data);
});


let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');

//let btnSend = document.querySelector('#btnSend');

formMessage.addEventListener('submit', elem => {
    elem.preventDefault();
    let message = inputMessage.value;
    if (message.trim() != "" && message != /\s/) {
        chatroom5.addChat(message)
            .then(() => formMessage.reset())
            .catch(err => console.log(err));
    setTimeout(()=>{
        location.reload();
    }, 1000);
    }
    else {
        alert('Polje za poruku ne sme biti prazno');
    }
});

let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');
let pUsername = document.querySelector('#alertUser');

formUsername.addEventListener('submit', elem => {
    elem.preventDefault();
    let user = inputUsername.value;
    chatroom5.updateUsername(user);
    formUsername.reset();

    pUsername.innerHTML = user;
    setTimeout(()=>{
        pUsername.innerHTML = '';
    }, 3000);
});

let rooms = document.querySelector('nav');
//console.log(rooms);

rooms.addEventListener('click', elem => {
    if (elem.target.tagName == 'BUTTON') {
        //izbrisati sve prethodne poruke
        chatui1.clearList();
        //pozvati promenu sobe
        let newRoom = elem.target.id;
        chatroom5.updateRoom(newRoom);
        //prikazati chatove
        chatroom5.getChats(data => {
            chatui1.templateLI(data);
        });
        //postaviti u LS da smo presli u neku drugu sobu
        localStorage.setItem('room', newRoom);

    }
});

