"use strict";
console.log('/nsorry we can not arrange big table, only two people will be invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log('sorry mr. ${remove_Guest}, you are not invited for dinner. ');
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',/n/nyou are still invited. /n/nThankYou! /n/n');
}
Guest_List.splice(0.2);
console.log(Guest_List);
