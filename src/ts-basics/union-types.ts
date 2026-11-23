function kgsToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

console.log(kgsToLbs(10));
console.log(kgsToLbs("10"));