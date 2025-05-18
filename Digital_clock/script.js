function time() {
    
    const now = new Date();

    document.querySelector("#clock").innerHTML = `${now.toLocaleTimeString()}`
    document.querySelector("#date").innerHTML = `${now.toDateString()}`

}

setInterval(time,1000);

time();