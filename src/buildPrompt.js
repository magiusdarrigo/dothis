
//--- Import dependencies.
const _ = require('lodash')

module.exports = (input) => {
    //--- Return the prompt.
    return`Give me a linux shell command that can perform the following task:\n"${input}"`
}
