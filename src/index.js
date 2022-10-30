#!/usr/bin/env node

//--- Import dependencies.
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const uniq = require('lodash/uniq')
const complete = require('./complete')
const buildConfig = require('./buildConfig')
const buildPrompt = require('./buildPrompt')

//--- Parse argv arguments using 'yargs' package.
const argv = yargs(hideBin(process.argv))
	.usage('Usage: $0 <input> [options]')
	.example('$0 List all files of this directory | bash')
	.example('$0 Install the lodash package --secret <YOUR_SECRET_KEY> | bash')
	.example('$0 Delete the root directory --engine ada')
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

//--- Compute the apporpirate shell command and output it.
complete(prompt, appConfig).then(outputs => {
	if (outputs.length == 0) {
		console.error('cmd not found')
	} else {
		console.log(outputs[0])
	}
})
