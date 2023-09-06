const array = [
    {
        "id": 1,
        "name": "Msi Monitor",
        "description": "Envision your triumph with the MSI MAG342CQR Curved Gaming monitor. With a 3440x1440 resolution, 144Hz refresh rate, and 1ms response time panel, the MAG342CQR provides the competitive edge you need to defeat your opponents. Equipped with adaptive sync, this monitor can match the display's refresh rate with your GPU for ultra-smooth gameplay. With all the latest technologies built-in, the MSI Curved Gaming monitor ensures you hit your mark for competitive play.",
        "price": "369.99",
        "category": "electronics",
        "images": ["https://res.cloudinary.com/dizjoy6v5/image/upload/v1693216055/ecommerce/msi_pe2l9f.png",
            "https://res.cloudinary.com/dizjoy6v5/image/upload/v1693216063/ecommerce/msi2_aqtkhp.png"]

    },
    {
        "id": 2,
        "name": "Bluetooth Headset",
        "description": "JBL PURE BASS SOUND: For over 70 years, JBL has engineered the precise, impressive sound found in big venues around the world. These headphones reproduce that same JBL sound, punching out bass that’s both deep and powerful.",
        "price": 69,
        "category": "electronics",
        "images": ["https://res.cloudinary.com/dizjoy6v5/image/upload/v1693216050/ecommerce/headset2_f1gp6k.png",
            "https://res.cloudinary.com/dizjoy6v5/image/upload/v1693215987/ecommerce/headset_s7yz5p.png"]

    },
    {
        "id": 3,
        "name": "Dumbbell for gym",
        "description": "Weight training dumbbells made of best quality rubber. \n  A combination of professional dumbbells for the perfect workout & can be used in home or in gym Long lasting & durable material.",
        "price": 225,
        "category": "sport",
        "images": ["https://res.cloudinary.com/dizjoy6v5/image/upload/v1693218719/ecommerce/dumbell_2_ffmfsv.png",
            "https://res.cloudinary.com/dizjoy6v5/image/upload/v1693218708/ecommerce/dumbell_1_dcicku.png"]

    },
    {
        "id": 4,
        "name": "Nike Shoes for men",
        "description": "The Air Jordan 1 High 85 “Black/Red” is the modern re-issue of an original colorway of Michael Jordan’s first signature shoe. The Jordan 1 High ‘85 debuted in 2020 as an alternate version of the retro basketball shoe that’s based on its original silhouette from 1985. The model has been released in several vintage-inspired colorways over the past few years, including this “Black/White” style that brings back one of the Jordan 1’s most popular, albeit somewhat rare colorways. Details specific to the original Jordan 1 from ‘85 are found throughout the design, including accurate-to-original panel shapes, and texture on the rubber midsole. The shoe features a white leather base with black leather overlays and Swoosh branding. A white “Wings” logo is found on the collar and “Nike Air” branding appears on the tongue tag. Release date: February 15, 2023",
        "price": 309,
        "category": "fashion",
        "images": ["https://res.cloudinary.com/dizjoy6v5/image/upload/v1693231025/ecommerce/Nike_kcwkav.png",
            "https://res.cloudinary.com/dizjoy6v5/image/upload/v1693231033/ecommerce/nike2_ttgqku.png"]


    },
    {
        "id": 5,
        "name": "Gaming Mouse Razer",
        "description": "High-Precision 16,000 DPI Optical Sensor: Offers on-the-fly sensitivity adjustment through dedicated DPI buttons (reprogrammable) for gaming. Ridged, Rubberized Scroll Wheel for Maximum Accuracy: Small, tactile bumps increases grip and allows for more controlled scrolling in high-stakes gaming situations.",
        "price": 110,
        "category": "electronics",
        "images": ["https://res.cloudinary.com/dizjoy6v5/image/upload/v1693231343/ecommerce/razer_2_n4hgq3.png",
            "https://res.cloudinary.com/dizjoy6v5/image/upload/v1693231368/ecommerce/razer_1_vp563m.png"]

    }
]
export default function handler(req, res) {
    res.status(200).json(array)

}