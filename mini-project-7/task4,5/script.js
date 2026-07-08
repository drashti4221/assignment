function validateURL(url) {
    return url.startsWith("https://") && url.includes(".");
}

// Testing
console.log(validateURL("https://google.com"));
console.log(validateURL("http://google.com"));
console.log(validateURL("https://website"));
console.log(validateURL("hello"));