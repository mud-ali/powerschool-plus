chrome.runtime.onMessage.addListener(
    function (msg, sender, sendResponse) {
        const cat: HTMLImageElement = document.createElement('img');
        cat.src = "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D";
        document.body.appendChild(cat);
    }
);