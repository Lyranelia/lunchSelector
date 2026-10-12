let meals = JSON.parse(localStorage.getItem("meals")) || []     // [] weil ich sonst, wenn im localStorage nix drin ist, wenn ich also null zurückbekomme, nichts sehe

class Meal {
    name;               // string
    category;           // string
    ingredients;        // array ["Zutat 1", "Zutat 2"]
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


function saveMeals() {
    localStorage.setItem("meals", JSON.stringify(meals))
}

const mealform = document.querySelector("form");
const importFileInput = document.querySelector("#importFile");


function showDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}
// Dropdown öffnen, wenn Button geklickt wird; schließen, wenn irgendwo geklickt wird
window.onclick = function(event) {
    if (!event.target.matches('.drpdwnBtn')) {
        let openDropdown = document.getElementById("dropdownContent");       // "dropdowns" holt alle Elemente mit der Klasse "dropdownContent"
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

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

// direkt beim Laden erste Zeile anzeigen
if (mealform) {
    window.addEventListener("DOMContentLoaded", () => {
    addIngredientRow();
});}

function addMeal(name, category, ingredients) {
    let newMeal = new Meal (name, category, ingredients);
    meals.push(newMeal);
    saveMeals();
    console.log(`Meal added: ${JSON.stringify(newMeal)}`);
    return meals;
}

if (importFileInput) {
    document.getElementById("importFile").addEventListener("change", function(event) {  // change tut Dinge, sobald eine Datei ausgewählt wird
        console.log("Change-Event ausgelöst, Datei:", event.target.files[0]);

        const file = event.target.files[0];     // falls mehrere Dateien ausgewähöt sind, nur die erste nehmen

        if (!file) return;


        const reader = new FileReader();
        reader.onload = function(event) {
            let importedMeals;
            try {
                importedMeals = JSON.parse(event.target.result);
            }
            catch (error) {
                alert("Die Datei hat kein gültiges JSON-Format.");
                console.error(error);
                return;
            }

            if (!Array.isArray(importedMeals)) {
                alert("Die Datei hat nicht das erwartete Format.\nErwartet: Array aus Rezepten.");
                return;
            }

            importedMeals.forEach(meal => {
                addMeal(meal.name, meal.category, meal.ingredients);
            });

            alert(`${importedMeals.length} Rezepte importiert!`);
        };
        reader.readAsText(file);
    });
}


// Submit-Button funktional
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
        addIngredientRow(); // eine leere Zeile bereitstellen
        document.getElementById("drpdwnBtnAddMeal").textContent = "Kategorie";
        selectedCategory = null;

        alert("Rezept hinzugefügt!");
    });
}


if (meals.length === 0) {
    let pumpkinSoup = addMeal("Kürbissuppe", "Suppen", ["500 g Kürbis", "200 g Kartoffel", "150 g Süßkartoffel", "1 Möhre", "1 TL Salz", "1/2 TL Muskat", "2 TL Pfeffer", "1 daumengroßes Stück Ingwer"]);
    let muesli = addMeal("Müsli", "Frühstück", ["Müsli", "Milch", "Früchte"]);
}



function getRandomMeal(category) {

    // wegen Kategorie bzw. Button "Haupmahlzeit", da brauchen wir mehrere Kategorien:
    const categories = Array.isArray(category)
        ? category
        : [category];

    const filteredMeals = categories.includes("all")
        ? meals
        : meals.filter(meal => categories.includes(meal.category));
    

    if (filteredMeals.length === 0) {
        document.getElementById("output").textContent = `Keine Mahlzeiten in der Kategorie "${categories.join(", ")}" verfügbar.`;
        return;
    }

    const random = filteredMeals[Math.floor(Math.random() * filteredMeals.length)];
    console.log(random.category + " - " + random.name + ": " + JSON.stringify(random.ingredients));

    const ingredientsList = random.ingredients
        .map(ingredient => `<li>${ingredient}</li>`)    // map wandelt die ingredient in html um
        .join("");                                      // join joint eben zusammen

    document.getElementById("output").innerHTML = `
        <h2>${random.name}</h2>
        <p>Kategorie: ${random.category}</p>
        <ul>${ingredientsList}</ul>
    `;

    return random;    
}

