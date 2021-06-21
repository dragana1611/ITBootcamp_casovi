export class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    set room(room) {
        this._room = room;
    }
    get room() {
        return this._room
    }

    set username(username) {
        if (username.trim() != "" && username != /\s/) {
            if (username.length >= 2 && username.length <= 10) {
                this._username = username;
            }
            else {
                alert('Pogresan unos');
            }
        }
        else {
            alert('Pogresan unos');
        }
    }
    get username() {
        return this._username
    }

    updateUsername(unUpdate) {
        this.username = unUpdate;
        localStorage.setItem('username', unUpdate);
    }

    updateRoom(rUpdate) {
        this.room = rUpdate;
        if (this.unsub) {
            this.unsub();
        }
    }

    async addChat(mess) {
        let d = new Date();
        let chat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(d)
        }
        let response = await this.chats.add(chat);
        return response;
    }

    getChats(callback) {
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at', 'asc')
            .onSnapshot(snapshot => {
                //console.log(snapShot.docChanges())
                snapshot.docChanges().forEach(change => {
                    if (change.type == 'added') {
                        // console.log('Promena u bazi');
                        //console.log(change.doc.data()); //ispis dokumenata koji su dodati u bazu
                        callback(change.doc.data());
                    }
                });
            });
    }
}



