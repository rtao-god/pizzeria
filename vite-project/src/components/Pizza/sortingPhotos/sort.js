
const pizzasArray = [
    {
        food: "9wuyjOz5zn60sLQjh3rgE5swzBAZT4QDManeUkcM",
        ingredients: "Томатный соус, ветчина, сыр Моцарелла и маслины",
        change: true
    },
    {
        food: "aNzF1GqcK8sQnzsMECKy7hjNP8ih8Vhd9R0udmiC",
        ingredients: "Соус Альфредо, сыр Моцарелла, грибы и пармезан",
<<<<<<< HEAD
        rec: true
=======
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
    },
    {
        food: "kZ5wUJjs4Udt6vtzFX542PzjYrVugLXZ9vu2DtJY",
        ingredients: "Томатный соус, сыр Моцарелла, ветчина, пепперони и томаты",
        change: true
    },
    {
        food: "M0YzXo6kNQt1ssUXibSBzSDAGN5w6N1T4JL3ysAO",
        ingredients: "Сливочный соус, увеличенная порция сыра Моцарелла и томаты",
    },
    {
        food: "NX7IVVF79GsG6QoJdcz86ry3nfcLPyveNtAaLcP1",
        ingredients: "Моцарелла, чеддер, пепперони, ветчина, маринованные огурцы, жареный лук, баварский соус, томатный соус",
    },
    {
        food: "O2OSpJ7WU3U6eHTOiCw3m5UkBYxeaRCSVH2nDNZy",
        ingredients: "Сливочный соус, сыр Моцарелла , сыр Чеддер, томаты",
    },
    {
        food: "TdEOeBQwsngkUlAgZnt4eaMPtYb2V6Q8DlX01sul",
        ingredients: "Соус томатный, сыр Моцарелла , мясная смесь, лук",
    },
    {
        food: "TJBaJz9R00Ofm9QZ7CEDl6Gdw6Ul2vywCmpsa2jt",
        ingredients: "Римское тесто, томатный соус, сыр Моцарелла, сыр Пармезан, сыр Чеддер, сыр с плесенью",
    },
    {
        food: "uKubuQ4cULQ06fdfItjfgXdywoTKp3BepoPCc0Av",
        ingredients: "Римское тесто, томатный соус, сыр Моцарелла, Пепперони, маринованные огурцы, бекон, соус BBQ",
        change: true
    },
    {
        food: "uMUKrClyPhVAJt0DnIa9ydYoBqAneyzYztymnmEq",
        ingredients: "Римское тесто, томатный соус, сыр Моцарелла, томаты, специи томаты-оливки",
    },
    {
        food: "Y6UbBXgLazrqmZhP94GOfcmYuDE2IyncGybvykKX",
        ingredients: "Томатный соус, сыр Моцарелла, пепперони, томаты",
        change: true
    },
    {
        food: "ZH193SwhuuuFK0LB0qg9e4DdxaEgp5KDmZ8hBCPj",
        ingredients: "Сыр моцарелла, ветчина, пепперони, халапеньо, томатный",
    },
    {
        food: "zP1D6fABPIX0KJ0cJ5eCA4ukV0kZ4yULRRpaV2WW",
        ingredients: "Соус Барбекю, сыр Моцарелла, сыр Чеддер, ветчина, бекон, пепперони, свинина, говядина, жареный лук",
    },
]

const burgersArray = [
    {
        food: "cQbV7laWSZaAiehJ8lOLntfR3ePfvT7ontTMSrPt",
        ingredients: "Томатный соус, сыр Моцарелла, ветчина, ананасы",
    },
    {
        food: "F6mJbOlOQmJrsna5CCcjVCImoSiqpSn3K1gLXIoP",
        ingredients: "Боул с креветками, свежими овощами, салатом Чукка, кунжутом под пикантным соусом",
    },
    {
        food: "GhHNm1W1KFRQ753nlEYdK6cEqZmtph5bIUm7lDH7",
        ingredients: "Вок с лапшой, курицей и овощами под соусом Терияки",
    },
]

const wingsArray = [
    {
        food: "EThWF8iKpPsjBsbUbWqZ37JoObQ2eukCHN50aOwD",
        ingredients: "Булочка для бургера, соус Бургер, котлета для бургера, сыр, салат",
    },
    {
        food: "NUNs76WMkq8hdJMUhvOaIGWZH4zuiwGABYoWVGsQ",
        ingredients: "Булочка для бургера, соус Бургер, котлета для бургера, сыр, салат айсберг, томаты, огурцы ",
    },
]

export const allFoods = pizzasArray.concat(burgersArray, wingsArray)
