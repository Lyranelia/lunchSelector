let lunches = []

class Meal {
    name;               // string
    category;           // string
    ingredients;        // object {"Zutat": "Mengenangabe"}
    id = 1;
    static nextId = 1;  // Instanz der Klasse, nicht des einzelnen Klässlers

    constructor(name, category, ingredients) {
        this.name = name,
        this.category = category,
        this.ingredients = ingredients,
        this.id = Meal.nextId,
        Meal.nextId += 1
    }
}

function addMeal(name, category, ingredients) {
    let newMeal = new Meal (name, category, ingredients);
    lunches.push(newMeal);
    console.log(`Meal added: ${newMeal}`)
    return lunches;
}

let pumpkinSoup = new Meal("Kürbissuppe", "Suppe", {"Kürbis": "500 g", "Kartoffel": "200 g", "Süßkartoffel": "150 g", "Möhre": "1", "Salz": "1 TL", "Muskat": "1/2 TL", "Pfeffer": "2 TL", "Ingwer": "1 daumengroßes Stück"})
lunches.push(pumpkinSoup)
// console.log(pumpkinSoup.category + ": " + pumpkinSoup.name)