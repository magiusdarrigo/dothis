module.exports = tokenResponse => {
    //--- remove new line characters.
    tokenResponse = tokenResponse.replace(/(\r\n|\n|\r)/gm, "")
    return tokenResponse
}
