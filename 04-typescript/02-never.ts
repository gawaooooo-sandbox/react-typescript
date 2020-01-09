const greet = (friend: 'serval' | 'caracal' | 'cheetah') => {
    switch (friend) {
        case 'serval':
            return 'Hello, Serval!'
        case 'caracal':
            return 'Hello, Caracal!'
        case 'cheetah':
            return 'Hello, Cheetah!'
        default:
            // case分の漏れを未然にチェックすることができる
            // caseのcheetahを消すと怒られる
            const check: never = friend
    }
}

console.log(greet('serval'))