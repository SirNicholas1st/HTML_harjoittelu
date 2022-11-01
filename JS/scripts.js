const handleonmousemove = e => {
    const { currentTarget: target } = e;


    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}


for(const job of document.querySelectorAll(".job")) {
    job.onmousemove = e => handleonmousemove(e);
}



const handleonmousemove1 = e => {
    const { currentTarget: target } = e;


    const rect = target.getBoundingClientRect(),
        x2 = e.clientX - rect.left,
        y2 = e.clientY - rect.top;

    
    target.style.setProperty("--mouse-x2", `${x2}px`);
    target.style.setProperty("--mouse-y2", `${y2}px`);
}


for(const info of document.querySelectorAll(".info")) {
    info.onmousemove = e => handleonmousemove1(e);
}


const handleonmousemove2 = e => {
    const { currentTarget: target } = e;


    const rect = target.getBoundingClientRect(),
        x3 = e.clientX - rect.left,
        y3 = e.clientY - rect.top;

    
    target.style.setProperty("--mouse-x3", `${x3}px`);
    target.style.setProperty("--mouse-y3", `${y3}px`);
}

for(const skill of document.querySelectorAll(".skill")) {
    skill.onmousemove = e => handleonmousemove2(e);
}
