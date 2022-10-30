#!/usr/bin/env node

//--- Import dependencies.
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const robot = require('robotjs')
const complete = require('./complete')
const buildConfig = require('./buildConfig')
const buildPrompt = require('./buildPrompt')
const filterResponseTokens = require('./filterResponseTokens')

//--- Parse argv arguments using 'yargs' package.
const argv = yargs(hideBin(process.argv))
	.usage('Usage: $0 <input> [options]')
	.example('$0 list all files of this directory')
	.option('model', {type: 'string', description: 'ID of the model to use'})
	.option('max', {type: 'number', description: 'Maximum number of tokens to consume', default: 100})
	.option('temperature', {type: 'number',description: 'Higher values means the model will take more risks', default: 0.6})
	.option('n', {type: 'number', description: 'Number of completions to generate'})
	.demandCommand()
	.help()
	.argv

//--- Build the configuration object.
const appConfig = buildConfig({
	model: argv.model,
	max_tokens: argv.max,
	temperature: argv.temperature,
	n: argv.n,
})

//--- Build the prompt string.
const prompt = buildPrompt(argv._.join(' '))

//--- spinner
console.log('\x1b[1;32m%s\x1b[0m', '🧠 Thinking...')

//--- Compute the apporpirate shell command and output it.
complete(prompt, appConfig).then(outputs => {
	if (outputs.length == 0) {
		console.error('cmd not found')
	} else {
		robot.typeString(filterResponseTokens(outputs[0]));
	}
})
