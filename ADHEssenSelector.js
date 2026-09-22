let lunches = []

class Mahlzeit {
    name;
    category;
    ingredients;
    id = 1;
    static nextId = 1;

    constructor(name, category, ingredients) {
        this.name = name,
        this.category = category,
        this.id = Mahlzeit.nextId,
        Mahlzeit.nextId += 1
    }
}