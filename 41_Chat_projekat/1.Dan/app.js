import {Chatroom} from './chats.js';

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
let chatroom5 = new Chatroom('tests', 'Milica');
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
chatroom5.updateUsername('Milijana');
chatroom5.updateRoom('general');
chatroom5.getChats(data => {
    console.log(data);
});