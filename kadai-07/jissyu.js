class Person {
    constructor(name, favoritefood) {
        this.name = name
        this.favoritefood = favoritefood
    }
    hello(){
        console.log(`こんにちは、${this.name}です。好きな食べ物は${this.favoritefood}です。`)
    }
}
const tanaka = new Person("田中", "たこ焼き")
const kimoto = new Person("木元","チーズ")
tanaka.hello()
kimoto.hello()