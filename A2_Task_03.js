const products = [
    { id: 1, BrandName: 'Apple', price: 60000 },
    { id: 2, BrandName: 'Samsung', price: 75000 },
    { id: 3, BrandName: 'Sony', price: 45000 },
    { id: 4, BrandName: 'Apple', price: 80000 },
    { id: 5, BrandName: 'LG', price: 35000 }
];

function AppleProducts(data) {
    return data.filter(product => product.BrandName === 'Apple');
}

function ProdAbove50k(data) {
    return data.filter(product => product.price > 50000);
}

function FASAbove70k(data) {
    return data.filter(product => (product.BrandName === 'Apple' || product.BrandName === 'Samsung') && product.price > 70000);
}

const AppleProd = AppleProducts(products);
console.log("Apple Products:", AppleProd);

const HighPriceProd = ProdAbove50k(products);
console.log("High Price Products:", HighPriceProd);

const HighPriceAppleSamProd = FASAbove70k(products);
console.log("High Price Apple and Samsung Products:", HighPriceAppleSamProd);