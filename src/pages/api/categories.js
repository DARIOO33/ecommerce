const categories = [
    {
        id_cat: "1",
        name: "electronics",
    },
    {
        id_cat: "2",
        name: "sport",
    },
    {
        id_cat: "3",
        name: "decor",
    },
    {
        id_cat: "4",
        name: "fashion",
    },

]
export default function handler(req, res) {
    res.status(201).json(categories)

}