class Bird {
    constructor(name) {
        this.name = name
    }
    chirp() {
        console.log(`${this.name}が鳴きました`)
    }

    static explain(name) {
        console.log(`${name}は翼があって卵を生みます`)
    }
}

class FlyableBird extends Bird {
    constructor(name) { // コンストラクタは継承されないので、 constructor() と明示的に書く必要がある
        super(name)
    }

    fly() {
        console.log(`${this.name}が飛びました`)
    }
}

const bd1 = new Bird('ペンギン')
bd1.chirp() // ペンギンが鳴きました
Bird.explain('カラス') // カラスは翼があって卵を生みます

const bd2 = new FlyableBird('スズメ')
bd2.fly() // スズメが飛びました
bd2.chirp() // スズメが鳴きました