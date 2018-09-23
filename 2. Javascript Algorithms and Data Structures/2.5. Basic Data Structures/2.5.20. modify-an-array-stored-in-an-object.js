let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: ['Sam', 'Kira', 'Tomo'],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // change code below this line  
    let friends = userObj.data.friends;
    friends.push(friend);
    userObj.data.friends = friends;
    return userObj.data.friends;
    // change code above this line
}
console.log(addFriend(user, 'Pete'));