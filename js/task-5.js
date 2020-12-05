const checkForSpam = function(message) {
    const phrase = message.toLowerCase();
    const isInMessage = phrase.includes('spam') || phrase.includes('sale');
    return isInMessage;
};

console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 