
//--- Import dependencies.
const rc = require('rc')
const dotenv = require('dotenv').config()
const defaults = require('lodash/defaults')
const { name: appName } = require('../package.json');

//--- Build the default options.
const defaultOptions = {
    secret: null,
    model: 'text-davinci-002',
    max_tokens: 100,
    temperature: 0.6,
    top_p: undefined,
    n: undefined,
    stream: undefined,
    logprobs: undefined,
    echo: false,
    stop: '\n',
    presence_penalty: undefined,
    frequency_penalty: undefined,
    best_of: undefined,
    logit_bias: undefined,
}

//--- Get options from environment variables.
const environmentOptions = {
    secret: process.env.OPENAI_SECRET_KEY,
}

//--- Get options from .dothis
const configOptions = rc("dothis", {})

//--- Export the compiled options.
module.exports = (localOptions = {}) => defaults(
    localOptions,
    configOptions,
    environmentOptions,
    defaultOptions,
)
