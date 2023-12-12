"use server"

export default async function AllCardData() {
    const products = [
        {
            name: "iPhone 14 Pro Max",
            price: 1099,
            nextDate: "2024-01-20",
        },
        {
            name: "Samsung Galaxy S23 Ultra",
            price: 999,
            nextDate: "2024-02-01",
        },
        {
            name: "Google Pixel 7 Pro",
            price: 899,
            nextDate: "2024-03-01",
        },
        {
            name: "OnePlus 10 Pro",
            price: 799,
            nextDate: "2024-04-01",
        },
        {
            name: "Xiaomi 12S Ultra",
            price: 699,
            nextDate: "2024-05-01",
        },
    ];
    return products
}