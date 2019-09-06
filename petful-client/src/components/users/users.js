import React from 'react'
import Queue from "./Queue";

export default class Users extends React.Component {
  state = {
    user: '',
    others: []
  }
  loadUsers(userQueue) {

    let userData = ["Frodo", "Samwise", "Gandalf", "Galadriel", "Bilbo"];
    let randomNumberOfUsers = 4
    //let randomNumberOfUsers = Math.floor(Math.random() * userData.length);
    console.log('USER LIST', randomNumberOfUsers)
    for (let i = 0; i < randomNumberOfUsers; i++) {
      userQueue.enqueue(userData[i]);
    }
    userQueue.enqueue('Me')
    console.log(userQueue)
    return userQueue;
  }

  queueTimer(list){
    if(list.first !== null){
    list.dequeue();
    return this.grabCurrentUser(list)
    }
    else {
      this.loadUsers(list)
      return this.grabCurrentUser(list)
    }
  }
  grabCurrentUser(users){
    if(users.first){
    let currentUser = users.first.value
    let otherUsers = []
    let user = users.first.next
   
    while(user !== null){
      otherUsers.push(user.value)
      user = user.next
    }
    this.setState({
      user: currentUser,
      others: otherUsers
    })
    }
    else { return 'Loading list...'}
  }
  componentDidMount() {
    let users = new Queue()
     this.loadUsers(users) //1/2/3
    this.grabCurrentUser(users) //2--set state
  //let userQueue = this.loadUsers()
    this.timerID = setInterval(()=>this.queueTimer(users), 5000) //2 3 
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
   
    return (<>
    
    <p>Current User: {this.state.user}</p>
    Up Next: <ul>{this.state.others.map(user => <li>${user}</li>)}</ul>
    </>);
  }
}
