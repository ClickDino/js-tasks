const path = "/users/download/index.html"

const isHtml = path => {
    const requireExt = ".html";
    
    const pathExt = path.slice(-5);

    return pathExt == requireExt

    // if(pathExt == requireExt) {
    //     return true
    // }   else {
    //     return false
    // }
}



console.log(isHtml(path));