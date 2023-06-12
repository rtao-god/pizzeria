
const pizzasArray = [
    {
        id: 1,
        food: "9wuyjOz5zn60sLQjh3rgE5swzBAZT4QDManeUkcM",
        ingredients: "Томатный соус, ветчина, сыр Моцарелла и маслины",
        change: true,
        rec: false
    },
    {
        id: 2,
        food: "aNzF1GqcK8sQnzsMECKy7hjNP8ih8Vhd9R0udmiC",
        ingredients: "Соус Альфредо, сыр Моцарелла, грибы и пармезан",
        rec: false
    },
    {
        id: 3,
        food: "kZ5wUJjs4Udt6vtzFX542PzjYrVugLXZ9vu2DtJY",
        ingredients: "Томатный соус, сыр Моцарелла, ветчина, пепперони и томаты",
        change: true,
        rec: false,

    },
    {
        id: 4,
        food: "M0YzXo6kNQt1ssUXibSBzSDAGN5w6N1T4JL3ysAO",
        ingredients: "Сливочный соус, увеличенная порция сыра Моцарелла и томаты",
        rec: true,

    },
    {
        id: 5,
        food: "NX7IVVF79GsG6QoJdcz86ry3nfcLPyveNtAaLcP1",
        ingredients: "Моцарелла, чеддер, пепперони, ветчина, маринованные огурцы, жареный лук, баварский соус, томатный соус",
        rec: false,

    },
    {
        id: 6,
        food: "O2OSpJ7WU3U6eHTOiCw3m5UkBYxeaRCSVH2nDNZy",
        ingredients: "Сливочный соус, сыр Моцарелла , сыр Чеддер, томаты",
        rec: false,

    },
    {
        id: 7,
        food: "TdEOeBQwsngkUlAgZnt4eaMPtYb2V6Q8DlX01sul",
        ingredients: "Соус томатный, сыр Моцарелла , мясная смесь, лук",
        rec: true,

    },
    {
        id: 8,
        food: "TJBaJz9R00Ofm9QZ7CEDl6Gdw6Ul2vywCmpsa2jt",
        ingredients: "Римское тесто, томатный соус, сыр Моцарелла, сыр Пармезан, сыр Чеддер, сыр с плесенью",
        rec: false,

    },
    {
        id: 9,
        food: "uKubuQ4cULQ06fdfItjfgXdywoTKp3BepoPCc0Av",
        ingredients: "Римское тесто, томатный соус, сыр Моцарелла, Пепперони, маринованные огурцы, бекон, соус BBQ",
        change: true,
        rec: false,

    },
    {
        id: 10,
        food: "uMUKrClyPhVAJt0DnIa9ydYoBqAneyzYztymnmEq",
        ingredients: "Римское тесто, томатный соус, сыр Моцарелла, томаты, специи томаты-оливки",
        rec: false,

    },
    {
        id: 11,
        food: "Y6UbBXgLazrqmZhP94GOfcmYuDE2IyncGybvykKX",
        ingredients: "Томатный соус, сыр Моцарелла, пепперони, томаты",
        change: true,
        rec: false,

    },
    {
        id: 12,
        food: "ZH193SwhuuuFK0LB0qg9e4DdxaEgp5KDmZ8hBCPj",
        ingredients: "Сыр моцарелла, ветчина, пепперони, халапеньо, томатный",
        rec: false,

    },
    {
        id: 13,
        food: "zP1D6fABPIX0KJ0cJ5eCA4ukV0kZ4yULRRpaV2WW",
        ingredients: "Соус Барбекю, сыр Моцарелла, сыр Чеддер, ветчина, бекон, пепперони, свинина, говядина, жареный лук",
        rec: true,

    },
]

const burgersArray = [
    {
        id: 14,
        food: "cQbV7laWSZaAiehJ8lOLntfR3ePfvT7ontTMSrPt",
        ingredients: "Томатный соус, сыр Моцарелла, ветчина, ананасы",
        rec: true,

    },
    {
        id: 15,
        food: "F6mJbOlOQmJrsna5CCcjVCImoSiqpSn3K1gLXIoP",
        ingredients: "Боул с креветками, свежими овощами, салатом Чукка, кунжутом под пикантным соусом",
        rec: false,

    },
    {
        id: 16,
        food: "GhHNm1W1KFRQ753nlEYdK6cEqZmtph5bIUm7lDH7",
        ingredients: "Вок с лапшой, курицей и овощами под соусом Терияки",
        rec: true,

    },
]

const wingsArray = [
    {
        id: 17,
        food: "EThWF8iKpPsjBsbUbWqZ37JoObQ2eukCHN50aOwD",
        ingredients: "Булочка для бургера, соус Бургер, котлета для бургера, сыр, салат",
        rec: false,

    },
    {
        id: 18,
        food: "NUNs76WMkq8hdJMUhvOaIGWZH4zuiwGABYoWVGsQ",
        ingredients: "Булочка для бургера, соус Бургер, котлета для бургера, сыр, салат айсберг, томаты, огурцы ",
        rec: true,

    },
]

export const allFoods = pizzasArray.concat(burgersArray, wingsArray)
