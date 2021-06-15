const LeftTrim = (str) => {
    if(typeof str != "string")
        throw new Error("Type should be string");
    return str.replace(/^\s+/, "");
}

module.exports = LeftTrim;