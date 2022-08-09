function foobar() {
    let foobar = 0
    for (let i = 0; i <= 50; i++) {
        const foo = i;
        if (foo % 3 === 0 && foo % 5 === 0) {
            console.log('Foobar')
        }
        else if (foo % 5 === 0) {
            console.log("bar")
        }
        else if (foo % 3 === 0) {
            console.log("Foo")
        }
        else {
            console.log(i)
        }

    }
}
foobar()
