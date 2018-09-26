export default class CleverArray {
  constructor(...args){
    this.array = args
  }
  sum(){
    return this.array.reduce( (accum, x) => accum + x )
  }
  push(...args){
    this.array = this.array.concat(args)
    // args.map(x => (this.array.push(x), x))
  }
}

// non babel implementation
// module.exports = { CleverArray }
