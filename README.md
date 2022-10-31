# dothis

**dothis** - a GPT-3 powered shell command generator. It translates natural language commands into shell commands. Project originally inspired by @shorwood's **gptsh**.

## • Installation
Install node and npm if you don't have it already: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
Then, **do this:**
```bash
npm i -g @magius18/dothis
```

You will then have the `dothis` executable in your bin directory.

## • Installation Troubleshooting
Are you getting a node_modules permissions error like this?
```bash
Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/@magius18/dothis'
```
**do this:**
```bash
sudo chown -R $USER /usr/local/lib/node_modules
```

## • Getting started
To use this tool, you will need to set [OpenAI API key](https://beta.openai.com/) as an environment variable.
**do this:**
```bash
export OPENAI_SECRET_KEY=<YOUR_SECRET_KEY>
```

To persist it across sessions, add it to your bash config file (e.g. ~/.zshrc).

## • Usage
```
Usage: dothis <input> [options]

Options:
      --version         Show version number                               [boolean]
      --max             Maximum number of tokens to consume 
                                                            [number] [default: 100]
      --temperature     Higher values means the model will take more risks
                                                            [number] [default: 0.6]
      --model           the GPT-3 model                     
                                             [string] [default: "text-davinci-002"]
      --help            Show help                                         [boolean]
```

## • Example Usage
```bash
$ dothis ssh into pod giraffe22 and container poptart73563
> 🧠 Thinking...
$ kubectl exec -it giraffe22 -c poptart73563 -- /bin/bash
```

```bash
$ dothis give the file frog836.txt read and write permissions
> 🧠 Thinking...
$ chmod a+rw frog836.txt
```

```bash
$ dothis add the contents of ./hello.txt to ../testdir/world.sh
> 🧠 Thinking...
$ cat ./hello.txt >> ../testdir/world.sh
```

## • Pay attention!
GPT-3 generated commands will not always be correct. Make sure to read/edit the generated command before executing.

## • Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## • License
[MIT](https://choosealicense.com/licenses/mit/)
