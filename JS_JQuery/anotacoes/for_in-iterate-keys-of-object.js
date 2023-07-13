// simplest way
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));


const users = {
    Alan: {
      online: true
    },
    Jeff: {
      online: false
    },
    Sarah: {
      online: true
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
      let result = 0;
      
      for(let user in usersObj) {
          if(usersObj[user].online) {
              result++;
          }
      }
      return result;
  
    //  for(let user in usersObj) {
    //    console.log(user);
    //    console.log(usersObj);
    //    if(usersObj["Jeff"].online) {
    //      // console.log(user);
    //      return 1;
    //    } else if(usersObj["Alan"].online && usersObj["Sarah"].online) {
    //      // console.log(user);
    //      return 2;
    //    } else {
    //      return 0;
    //    }
  
      // return usersObj["Jeff"].online ? 1 
      // : usersObj["Alan"].online && usersObj["Sarah"].online ? 2
      // : 0;
  
  
    // }
    // Only change code above this line
  }
  
  console.log(countOnline(users));
  
  
  
  // for(var in object)