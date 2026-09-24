let meals = []

class Meal {
    name;               // string
    category;           // string
    ingredients;        // object {"Zutat": "Mengenangabe"}
    id = 1;
    isLunch;              // true or false
    static nextId = 1;  // Instanz der Klasse, nicht des einzelnen Klässlers

    constructor(name, category, ingredients, isLunch) {
        this.name = name,
        this.category = category,
        this.ingredients = ingredients,
        this.isLunch = isLunch,
        this.id = Meal.nextId,
        Meal.nextId += 1
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
/*window.onclick = function(event) {
    if (!event.target.matches('.drpdwnBtn')) {
        let openDropdown = document.getElementById("dropdownContent");       // "dropdowns" holt alle Elemente mit der Klasse "dropdownContent"
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}*/

// let selectedCategory = null;
function selectCategory(category) {
    document.querySelector('.drpdwnBtn' || '.drpdwnBtn2').textContent = category; // zeigt Auswahl im Button
    document.getElementById("dropdownContent").classList.remove("show");
}

function addMeal(name, category, ingredients, isLunch) {
    let newMeal = new Meal (name, category, ingredients, isLunch);
    meals.push(newMeal);
    console.log(`Meal added: ${JSON.stringify(newMeal)}`)
    return meals;
}
/**
 * Wenn ich jetzt sowas wie const name = document.getElementById(hier das input-Element in addMeal)
 * nehme, funktioniert das dann?
 */

let pumpkinSoup = new Meal("Kürbissuppe", "Suppen", {"Kürbis": "500 g", "Kartoffel": "200 g", "Süßkartoffel": "150 g", "Möhre": "1", "Salz": "1 TL", "Muskat": "1/2 TL", "Pfeffer": "2 TL", "Ingwer": "1 daumengroßes Stück"}, true)
let muesli = addMeal("Müsli", "Frühstück", {"Müsli": "reichlich", "Milch": "reichlich", "Früchte": "Topping"}, false);
meals.push(pumpkinSoup)
// console.log(pumpkinSoup.category + ": " + pumpkinSoup.name)


function getRandomMeal(category) {
    if (meals.length === 0) {
        console.log("Keine Mahlzeiten verfügbar.")
        document.getElementById("output").textContent = "Keine Mahlzeiten verfügbar.";
        return;
    }
    if (category === "all") {
        const random = meals[Math.floor(Math.random() * meals.length)];
        console.log(random.category + " - " + random.name + ": " + JSON.stringify(random.ingredients))
        const ingredientsList = Object.entries(random.ingredients)
        .map(([ingredient, amount]) => `<li>${ingredient}: ${amount}</li>`)
        .join("");

        document.getElementById("output").innerHTML = `
        <h2>${random.name}</h2>
        <p>Kategorie: ${random.category}</p>
        <ul>${ingredientsList}</ul>
        `;

        return random
    }
}

