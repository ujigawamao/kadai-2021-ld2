const profile = {
    name: "田中",
    age: "30",
    hobby: "書道",
    major: "歴史都市"
}
const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻"
}

const keys = Object.keys(profile)
for (const key of keys) {
const value = profile[key]
const key_in_japanese  = dictionary[key]
console.log(`私の${key_in_japanese}は${value}です。`)
}

