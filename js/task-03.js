function checkForSpam(message) {
    const spamWords = ["sale", "spam"];
    const lowerCaseMessage = message.toLowerCase();
    
    for (let word of spamWords) {
        if (lowerCaseMessage.includes(word)) {
            return true;
        }
    }
    
    return false;
}

// Приклади викликів функції для перевірки
console.log(checkForSpam("Latest technology news")); // Повертає: false
console.log(checkForSpam("JavaScript weekly newsletter")); // Повертає: false
console.log(checkForSpam("Get best sale offers now!")); // Повертає: true
console.log(checkForSpam("Amazing SalE, only tonight!")); // Повертає: true
console.log(checkForSpam("Trust me, this is not a spam message")); // Повертає: true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // Повертає: true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // Повертає: true
