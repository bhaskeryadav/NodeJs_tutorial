import * as fs from 'fs';
import * as os from 'os';

export class RequireFsDemo{

  appenFile(){
    fs.appendFile('test.txt',' bhasker yadav.');
  }

  printCurrentUser(){
    let usr=os.userInfo();
    console.log(usr);
    console.log(`Hello ${usr.username}`);
  }

}

let rf = new RequireFsDemo();
rf.appenFile();
rf.printCurrentUser();
