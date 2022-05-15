
function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while(Date.now() < wakeUp) {}
};

