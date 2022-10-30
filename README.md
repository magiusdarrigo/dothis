# dothis

**dothis** - a GPT-3 powered shell command generator. It translates natural language commands into shell commands. Repository originally forked from @shorwood's **gptsh**.

## • Installation
Install node and npm if you don't have it already: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Run this
```bash
npm i -g dothis@npm:@magius18/dothis
```

## • Getting started
To use this tool, you will need to set [OpenAI API key](https://beta.openai.com/) either as an environment variable.
```bash
OPENAI_SECRET_KEY=<YOUR_SECRET_KEY>
```

Or in the `~/.dothis` config file placed in your home directory.
```ini
secret=<YOUR_SECRET_KEY>
```


## • Usage


```
Usage: dothis <input> [options]

Options:
      --version         Show version number                               [boolean]
      --max             Maximum number of tokens to consume [number] [default: 100]
      --temperature  Higher values means the model will take more risks
                                                            [number] [default: 0.6]
      --model        the GPT-3 model                                       [string]
  -n                 Number of completions to generate                     [number]
      --help         Show help                                            [boolean]
```

## • Examples
```bash
$ dothis ssh into pod giraffe22 and container poptart73563
kubectl exec -it giraffe22 -c poptart73563 -- /bin/bash
```

## • Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## • License
[MIT](https://choosealicense.com/licenses/mit/)
