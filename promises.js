/*
 +-------------------------------+
 |                               |
 |   +----+    +---+   +         |
 |   |        +        |         |
 |   |        +        |         |
 |   +----+    +--+    +-----+   |
 |   |             +   |     |   |
 |   |             +   |     |   |
 |   +----+   +---+    +-----+   |
 |                               |
 +-------------------------------+
 |            PROMISES           |
 +-------------------------------+
 */
////Promises are an important concept in asyncronous JavaScript
////The basic principle behind a promise is that you define some code that you want to run
////after an action is completed (exact concept of a callback)
////This is some example syntax

function ranSuccessful(response){
    console.log(response);
}
function ranUnsuccessful(response){
    console.log(response);
}

asyncFunction(true).then(ranSuccessful, ranUnsuccessful); //Runs the success function
asyncFunction('').then(ranSuccessful, ranUnsuccessful); //Runs the unsuccess function
asyncFunction(null).then(ranSuccessful, ranUnsuccessful); //Throws error


////This is how you create your own promise handler
function asyncFunction(something) {
    return new Promise((fulfill, reject) => {
        ////You will need to wrap this code in a try, and the catch runs the rejection
        ////One of the guarantees of a promise, is that it WILL run either the good callback, or the bad callback
        try {
            //do something meaningful
            if (!something.toString()) {
                reject('Something went wrong');
            } else {
                fulfill('Worked');
            }

        } catch (exception) {
            reject(exception);
        }
    });
}