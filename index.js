export default class CleverArray {
  constructor(...args){
    this.array = args
  }

  sum(){
    return this.validArray() ? this.array.reduce( (accum, x) => accum + x ) : NaN
  }

  push(...args){
    return this.array = this.validArray(args) ? this.array.concat(args) : NaN
    // args.map(x => (this.array.push(x), x))
  }

  validArray(...args){
    return this.array.length > 0 || args.length > 0
  }
}

// non babel implementation
// module.exports = { CleverArray }
