async function asyncHelloWorld() {
    return "Hello world!";
}

async function asyncCaller() {
    const result = await asyncHelloWorld();
    console.log(result); // will print "Hello world!"
}

asyncCaller();