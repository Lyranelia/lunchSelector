let meals = []

class Meal {
    name;               // string
    category;           // string
    ingredients;        // object {"Zutat": "Mengenangabe"} - ne doch nicht, Array reicht
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
    ingredientInput.placeholder = "500 g Kürbis";
    ingredientInput.className = "ingredientName";

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "✕";
    removeBtn.className = "removeIngredientBtn";
    removeBtn.onclick = () => row.remove();

    row.appendChild(ingredientInput);
    row.appendChild(removeBtn);
    container.appendChild(row);
}

function collectIngredients() {
    const rows = document.querySelectorAll(".ingredientRow");
    const ingredients = [];

    rows.forEach(row => {
        const name = row.querySelector(".ingredientName").value.trim();
        if (name) { // leere/nicht ausgefüllte Zeilen ignorieren
            ingredients.push(name); // amount kann leer sein
        }
    });

    return ingredients;
}

// Direkt beim Laden schon eine erste Zeile anzeigen
if (mealform) {
    window.addEventListener("DOMContentLoaded", () => {
    addIngredientRow();
});}

function addMeal(name, category, ingredients) {
    let newMeal = new Meal (name, category, ingredients);
    meals.push(newMeal);
    console.log(`Meal added: ${JSON.stringify(newMeal)}`)
    return meals;
}

if (mealform) {
    mealform.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        if (!name) {
            alert("Bitte trag einen Titel ein.");
            return;
        }
        if (!selectedCategory) {
            alert("Bitte wähle eine Kategorie aus.");
            return;
        }

        const ingredients = collectIngredients();
        if (Object.keys(ingredients).length === 0) {
            alert("Bitte trag mindestens eine Zutat ein.");
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



let pumpkinSoup = new Meal("Kürbissuppe", "Suppen", ["500 g Kürbis", "200 g Kartoffel", "150 g Süßkartoffel", "1 Möhre", "1 TL Salz", "1/2 TL Muskat", "2 TL Pfeffer", "1 daumengroßes Stück Ingwer"])
let muesli = addMeal("Müsli", "Frühstück", ["Müsli", "Milch", "Früchte"]);
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
        .map(ingredient => `<li>${ingredient}</li>`)
        .join("");

        document.getElementById("output").innerHTML = `
        <h2>${random.name}</h2>
        <p>Kategorie: ${random.category}</p>
        <ul>${ingredientsList}</ul>
        `;

        return random
    }
}

