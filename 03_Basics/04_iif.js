// Immidiately Invoking function (IIF)

// IIF is used mainly to remove the pollution in the global scope

(function chai  () {
    console.log(`Hello babe`)
})();


((name)=> console.log(`DB connected${name}`))("hitesh sir")