const array = [
    {
        "id": 1,
        "name": "Msi Monitor",
        "description": "This is a Monitor.",
        "price": 299,
        "category": "electronics"

    },
    {
        "id": 2,
        "name": "Bluetooth Headphones",
        "description": "This is another product.",
        "price": 69,
        "category": "electronics"
    },
    {
        "id": 3,
        "name": "Weight For Training",
        "description": "This is another product.",
        "price": 225,
        "category": "sport"
    },
    {
        "id": 4,
        "name": "Shoes For Men",
        "description": "This is another product.",
        "price": 140,
        "category": "fashion"
    },
    {
        "id": 5,
        "name": "Gaming Mouse Razer",
        "description": "This is another product.",
        "price": 110,
        "category": "electronics"
    },
    {
        "id": 6,
        "name": "Gym Equipement",
        "description": "This is another product.",
        "price": 200,
        "category": "sport"
    },
    {
        "id": 7,
        "name": "360 Camera",
        "description": "This is another product.",
        "price": 599,
        "category": "sport"
    },
    {
        "id": 8,
        "name": "GoPro Camera",
        "description": "This is another product.",
        "price": 79,
        "category": "sport"
    }
]
export default function handler(req, res) {
    res.status(200).json(array)

}