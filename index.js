export default class CleverArray {
  constructor(...args){
    this.array = args
  }
  sum(){
    return this.array.reduce( (accum, x) => accum + x )
  }
}

// non babel implementation
// module.exports = { CleverArray }
