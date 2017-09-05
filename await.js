/*
 +-------------------------------+
 |                               |
 |   +----+    +---+   +-----+   |
 |   |        +              |   |
 |   |        +              |   |
 |   +----+    +--+          +   |
 |   |             +         |   |
 |   |             +         |   |
 |   +----+   +---+          +   |
 |                               |
 +-------------------------------+
 |            PROMISES           |
 +-------------------------------+
 */

function longTask() {
    return new Promise((fulfill, reject) => {
        setTimeout(() => {
            fulfill({status: 'ok'});
        }, 2000);
    });
}

async function doLongTaskAwait() {
    const status = await longTask();
    console.log(status);
    console.log('Also takes about 2 seconds');
}

function doLongTaskPromise() {
    longTask().then((status) => {
        console.log('Takes about 2 seconds');
        console.log(status);
    });
}

//doLongTaskPromise();
doLongTaskAwait();