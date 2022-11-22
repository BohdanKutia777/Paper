const callbackPrompt = {
    message : 'Enter your phone number',
    showPrompt () {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt (ms) {
        setTimeout(() =>this.showPrompt(), ms); // and another opation setTimeout(this.showPrompt.bind(this), ms);
    }    
}

callbackPrompt.showDeferredPrompt(1000);