const sleep = ms => new Promise(resolve => {
    setTimeout(resolve, ms)
})

const greet = () => {
    console.log('おやすみ')

    // sleep()関数がPromiseクラスオブジェクトを返す
    // これを、then()のメソッドチェーンでつなぐことで、非同期処理をひとつひとつ処理が終わるのを待って順番に実行していくことができるようになる
    // then()は複数つないでいくことができる
    sleep(2000).then(() => {
        console.log('起きた')
        console.log('おはよう！')
    }).catch(err => {
        console.error('睡眠例外です:', err)
    })
}

greet()
// おやすみ
// 起きた
// おはよう！