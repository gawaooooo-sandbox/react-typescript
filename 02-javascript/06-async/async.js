const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

const greet = async () => {
    console.log('おやすみ')

    try {
        // asyncで定義された Async関数は、本文中にawaitを前置きすることで、他のAsync関数の実行結果を待ってくれるようになる
        await sleep(2000)
        console.log('起きた')
        console.log('おはよう！')
    } catch(err) {
        console.error('睡眠例外です:', err)
    }
}

greet()