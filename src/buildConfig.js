//--- Import dependencies.
const defaults = require('lodash/defaults')

//--- Build the default options.
const defaultOptions = {
    secret: undefined,
    model: 'text-davinci-002',
    max_tokens: 100,
    temperature: 0.6,
    top_p: undefined,
    n: undefined,
    stream: undefined,
    logprobs: undefined,
    echo: false,
    stop: undefined,
    presence_penalty: undefined,
    frequency_penalty: undefined,
    best_of: undefined,
    logit_bias: undefined,
}

//--- Get options from environment variables.
const environmentOptions = {
    secret: process.env.OPENAI_SECRET_KEY,
}

//--- Export the compiled options.
module.exports = (localOptions = {}) => defaults(
    localOptions,
    environmentOptions,
    defaultOptions,
)
