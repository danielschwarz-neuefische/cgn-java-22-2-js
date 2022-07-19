let a: number = 7;
let b: string = 'hallo';
let c: () => void = () => {}
let d: (x:number) => void = (x) => {
    console.log(x)
}
let e: string[] = ['a','b','c']
let f: {name: string, age: number} = {age: 5, name: "Rick"}
let g: number | string = 'hallo'
let h: 'hallo' | 'hello' = 'hallo'
type greeting = 'hallo' | 'hello'
let i: greeting = 'hallo'
let j: greeting = 'hello'
