function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022  ) { 
        return income * 0.1;
    }
    return income * 0.2;
}

console.log(calculateTax(10000, 2021));
