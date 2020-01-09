// 省略できるときは省略する
// functionでの関数宣言とアロー関数式での宣言は this の挙動が変わる

const obj1 = {
    num: 444,
    // functionによる関数宣言では、その文脈における直上のオブジェクトがthisになる -> obj1が直上のオブジェクト
    // 直上に定義したオブジェクトがない場合はグローバルオブジェクト
    fn: function() {
        console.log(this.num)
    }
};

const obj2 = {
    num: 888,
    // アロー関数式では、this はその関数それ自体
    fn: () => {
        console.log(this.num)
    }
}

obj1.fn(); // 444
obj2.fn(); // undefined
