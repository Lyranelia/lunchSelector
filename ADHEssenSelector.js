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

const mealform = document.querySelector("form")

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

let selectedCategory = null;
function selectCategory(category) {
    selectedCategory = category;
    document.querySelector('.drpdwnBtn').textContent = category; // zeigt Auswahl im Button
    document.getElementById("dropdownContent").classList.remove("show");
}

function addIngredientRow() {
    const container = document.getElementById("ingredientsContainer");

    const row = document.createElement("div");
    row.className = "ingredientRow";

    const ingredientInput = document.createElement("input");
    ingredientInput.type = "text";
    ingredientInput.placeholder = "Zutat";
    ingredientInput.className = "ingredientName";

    const amountInput = document.createElement("input");
    amountInput.type = "text";
    amountInput.placeholder = "Menge (optional)";
    amountInput.className = "ingredientAmount";

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "✕";
    removeBtn.className = "removeIngredientBtn";
    removeBtn.onclick = () => row.remove();

    row.appendChild(ingredientInput);
    row.appendChild(amountInput);
    row.appendChild(removeBtn);
    container.appendChild(row);
}

function collectIngredients() {
    const rows = document.querySelectorAll(".ingredientRow");
    const ingredients = {};

    rows.forEach(row => {
        const name = row.querySelector(".ingredientName").value.trim();
        const amount = row.querySelector(".ingredientAmount").value.trim();
        if (name) { // leere/nicht ausgefüllte Zeilen ignorieren
            ingredients[name] = amount; // amount kann leer sein
        }
    });

    return ingredients;
}

// Direkt beim Laden schon eine erste Zeile anzeigen
if (mealform) {
    window.addEventListener("DOMContentLoaded", () => {
    addIngredientRow();
});}

function addMeal(name, category, ingredients, isLunch) {
    let newMeal = new Meal (name, category, ingredients, isLunch);
    meals.push(newMeal);
    console.log(`Meal added: ${JSON.stringify(newMeal)}`)
    return meals;
}

if (mealform) {
    mealform.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        if (!name) {
            alert("Bitte einen Titel eingeben!");
            return;
        }
        if (!selectedCategory) {
            alert("Bitte eine Kategorie auswählen!");
            return;
        }

        const ingredients = collectIngredients();
        if (Object.keys(ingredients).length === 0) {
            alert("Bitte mindestens eine Zutat eintragen!");
            return;
        }

        addMeal(name, selectedCategory, ingredients);

        // Formular zurücksetzen
        mealform.reset();
        document.getElementById("ingredientsContainer").innerHTML = "";
        addIngredientRow(); // wieder eine leere Zeile bereitstellen
        document.getElementById("drpdwnBtnAddMeal").textContent = "Kategorie";
        selectedCategory = null;

        alert("Rezept hinzugefügt!");
    });
}



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

