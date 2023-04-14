function mutationCallback(mutations) {
    console.log("mutationCallback was called");
    mutations.forEach((mutation) => {
    console.log(mutation);
  });
}

function disconnect(){
    mutationObserverObj.disconnect();
}

const mutationObserverObj = new MutationObserver(mutationCallback);
const target = document.querySelector("#playground");

// watch addition of new child nodes or removal of existing child nodes
const options = { childList: true }; 

mutationObserverObj.observe(target, options); 

