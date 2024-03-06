function getShippingCost(country) {
    switch (country) {
        case "Australia":
            return "Shipping to Australia will cost 170 credits";
        case "China":
            return "Shipping to China will cost 100 credits";
        case "Chile":
            return "Shipping to Chile will cost 250 credits";
        case "Jamaica":
            return "Shipping to Jamaica will cost 120 credits";
        default:
            return "Sorry, there is no delivery to your country";
    }
}

// Приклади викликів функції для перевірки
console.log(getShippingCost("Australia")); // Повертає: "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // Повертає: "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // Повертає: "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // Повертає: "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // Повертає: "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // Повертає: "Sorry, there is no delivery to your country"
