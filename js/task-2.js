function formatMessage(message, maxLength) {
    if (message.length > maxLength) {
        return message.slice(0, maxLength) + "...";
    } else {
        return message;
    }
}

// Приклади викликів функції для перевірки
console.log(formatMessage("Curabitur ligula sapien", 16)); // Повертає: "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // Повертає: "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // Повертає: "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // Повертає: "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // Повертає: "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // Повертає: "Nunc sed turpis a felis in nunc fringilla"