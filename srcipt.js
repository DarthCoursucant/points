async function populate() {
    const api = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    const response = await fetch(api);
    const superHeroesText = await response.text();

    const superHeroes = JSON.parse(superHeroesText);
    console.log(superHeroes);
    populateHeader(superHeroes)
    poplateHeroes(superHeroes)
}

populate();

function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);

    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown}; // Formed: ${obj.formed}`;
    header.appendChild(myPara)
}

function poplateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;

    for (const hero of heroes) {
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myList = document.createElement("ul");

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = "Superpowers: ";

        const superPowers = hero.powers; 
        for (const power of superPowers) {
            const listItem = document.createElement("li");
            listItem.textContent = power;
            myList.appendChild(listItem)
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2)
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

class SuperHero {
    // properties (opt);

    // construcotr
    constructor (name, age, secretIdentity, powers) {
        this.name = name;
        this.age = age;
        this.secretIdentity = secretIdentity;
        this.powers = powers;
    }
}