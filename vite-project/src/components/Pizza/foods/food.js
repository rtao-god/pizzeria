const pizzasArray = [
    {
        id: 1,
        img: "9wuyjOz5zn60sLQjh3rgE5swzBAZT4QDManeUkcM",
        title: "Pizza Venice",
        ingredients: "Tomato sauce, ham, Mozzarella cheese and olives",
        change: true,
        rec: false,
        count: 1,
        price: 200,
        defaultPrice: 200,
        filter: [
            { withoutMeat: false, withoutMushrooms: false, withoutOnion: false, meat: false, mushrooms: false, onion: false }
        ],
    },
    {
        id: 2,
        img: "aNzF1GqcK8sQnzsMECKy7hjNP8ih8Vhd9R0udmiC",
        title: "Pizza mediterranean",
        ingredients: "Summer pizza with shrimps, tomato sauce, vegetables, mozzarella cheese, iceberg lettuce with Asian sauce.",
        rec: false,
        count: 1,
        price: 300,
        defaultPrice: 300,
        filter: [
            { withoutMeat: true, withoutMushrooms: true, withoutOnion: true, meat: false, mushrooms: false, onion: false }
        ],
    },
    {
        id: 3,
        img: "kZ5wUJjs4Udt6vtzFX542PzjYrVugLXZ9vu2DtJY",
        title: "Pizza julienne",
        ingredients: "Alfredo sauce, mozzarella cheese, mushrooms and parmesan",
        change: true,
        rec: false,
        count: 1,
        price: 200,
        defaultPrice: 200,
        filter: [
            { withoutMeat: false, withoutMushrooms: false, withoutOnion: false, meat: false, mushrooms: false, onion: false }
        ],
    },
    {
        id: 4,
        img: "M0YzXo6kNQt1ssUXibSBzSDAGN5w6N1T4JL3ysAO",
        title: "Pizza Italiano Classic",
        ingredients: "Tomato sauce, mozzarella cheese, ham, pepperoni and tomatoes",
        rec: true,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: false, withoutOnion: true, meat: true, mushrooms: true, onion: true }
        ],
    },
    {
        id: 5,
        img: "NX7IVVF79GsG6QoJdcz86ry3nfcLPyveNtAaLcP1",
        title: "Pizza Easy Cheesy",
        ingredients: "Cream sauce, extra mozzarella cheese and tomatoes",
        rec: false,
        count: 1,
        price: 600,
        defaultPrice: 600,
        filter: [
            { withoutMeat: false, withoutMushrooms: true, withoutOnion: true, meat: false, mushrooms: false, onion: false }
        ],
    },
    {
        id: 6,
        img: "O2OSpJ7WU3U6eHTOiCw3m5UkBYxeaRCSVH2nDNZy",
        title: "Pizza Double Cheese",
        ingredients: "Mozzarella, cheddar, pepperoni, ham, pickled cucumbers, fried onions, Bavarian sauce, tomato sauce",
        rec: false,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: false, withoutOnion: true, meat: true, mushrooms: true, onion: false }
        ],
    },
    {
        id: 7,
        img: "TdEOeBQwsngkUlAgZnt4eaMPtYb2V6Q8DlX01sul",
        title: "Pizza Bavarian",
        ingredients: "Cream sauce, Mozzarella cheese, Cheddar cheese, tomatoes",
        rec: true,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: false, withoutOnion: true, meat: true, mushrooms: false, onion: true }
        ],

    },
    {
        id: 8,
        img: "TJBaJz9R00Ofm9QZ7CEDl6Gdw6Ul2vywCmpsa2jt",
        title: "Country",
        ingredients: "Tomato sauce, Mozzarella cheese, meat mixture, onion",
        rec: false,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: true, withoutOnion: true, meat: true, mushrooms: true, onion: false, }
        ],
    },
    {
        id: 9,
        img: "uKubuQ4cULQ06fdfItjfgXdywoTKp3BepoPCc0Av",
        title: "Roman pizza Carbonara",
        ingredients: "Roman dough, Alfredo sauce, mozzarella cheese, bacon, tomatoes, parmesan",
        change: true,
        rec: false,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: false, withoutOnion: true, meat: false, mushrooms: false, onion: false }
        ],

    },
    {
        id: 10,
        img: "uMUKrClyPhVAJt0DnIa9ydYoBqAneyzYztymnmEq",
        title: "Roman Pizza Da Vinci Ham",
        ingredients: "Roman pastry, tomato sauce, mozzarella cheese, ham, mushrooms, 'Tomatoes and olives' seasoning",
        rec: false,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: false, withoutOnion: true, meat: false, mushrooms: true, onion: false }
        ],

    },
    {
        id: 11,
        img: "Y6UbBXgLazrqmZhP94GOfcmYuDE2IyncGybvykKX",
        title: "Roman pizza 4 cheeses",
        ingredients: "Roman pastry, tomato sauce, Mozzarella cheese, Parmesan cheese, Cheddar cheese, blue cheese",
        change: true,
        rec: false,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: true, withoutOnion: true, meat: false, mushrooms: false, onion: false }
        ],

    },
    {
        id: 12,
        img: "ZH193SwhuuuFK0LB0qg9e4DdxaEgp5KDmZ8hBCPj",
        title: "Roman Pepperoni pizza with bacon",
        ingredients: "Roman dough, tomato sauce, Mozzarella cheese, Pepperoni, pickled cucumbers, bacon, BBQ sauce",
        rec: false,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: false, withoutOnion: true, meat: true, mushrooms: false, onion: true }
        ],
    },
    {
        id: 13,
        img: "zP1D6fABPIX0KJ0cJ5eCA4ukV0kZ4yULRRpaV2WW",
        title: "Roman Pizza Margherita",
        ingredients: "Roman dough, tomato sauce, Mozzarella cheese, tomatoes, spices tomatoes-olives",
        rec: true,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: true, withoutOnion: true, meat: true, mushrooms: true, onion: true }
        ],
    }
]

const burgersArray = [
    {
        id: 14,
        img: "cQbV7laWSZaAiehJ8lOLntfR3ePfvT7ontTMSrPt",
        title: "Pepperoni Pizza Classic",
        ingredients: "Tomato sauce, Mozzarella cheese, pepperoni, tomatoes",
        rec: true,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: false, withoutOnion: true, meat: true, mushrooms: true, onion: false }
        ],
    },
    {
        id: 15,
        img: "F6mJbOlOQmJrsna5CCcjVCImoSiqpSn3K1gLXIoP",
        title: "Pizza Cheeseburger",
        ingredients: "Tomato sauce, Mozzarella cheese, pepperoni, pickled cucumbers, bacon, BBQ sauce",
        rec: false,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: true, withoutOnion: true, meat: false, mushrooms: false, onion: false }
        ],
    },
    {
        id: 16,
        img: "GhHNm1W1KFRQ753nlEYdK6cEqZmtph5bIUm7lDH7",
        title: "Pepperoni pizza with bacon",
        ingredients: "Tomato sauce, cheeses: Mozzarella, cheddar, blue cheese, Parmesan",
        rec: true,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: false, withoutOnion: true, meat: false, mushrooms: false, onion: false }
        ],
    },
]

const wingsArray = [
    {
        id: 17,
        img: "EThWF8iKpPsjBsbUbWqZ37JoObQ2eukCHN50aOwD",
        title: "Pizza Big Chicken",
        ingredients: "Pepperoni, ham, tomato sauce, Mozzarella cheese, green pepper",
        rec: false,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: true, withoutOnion: true, meat: false, mushrooms: false, onion: false }
        ],
    },
    {
        id: 18,
        img: "NUNs76WMkq8hdJMUhvOaIGWZH4zuiwGABYoWVGsQ",
        title: "Pizza Chicken Lovers",
        ingredients: "Tomato sauce, Mozzarella cheese, pepperoni, pork, beef, ham, green pepper, mushrooms, red onion",
        rec: true,
        count: 1,
        price: 400,
        defaultPrice: 400,
        filter: [
            { withoutMeat: true, withoutMushrooms: false, withoutOnion: true, meat: false, mushrooms: true, onion: true }
        ],
    }
]

export const allFoods = pizzasArray.concat(burgersArray, wingsArray)
