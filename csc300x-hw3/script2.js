const loc1_item1 = document.querySelectorAll("button");

const map = new Map();
for (let i = 0; i < loc1_item1.length; i++) {
    const element = loc1_item1[i];
    element.addEventListener("click", clickAdd);

}

function clickAdd(event) {
    const ele = event.currentTarget;
    if (map.get(ele.parentElement.classList[0]) == null) {
        map.set(ele.parentElement.classList[0], 1);
    } else {
        map.set(ele.parentElement.classList[0], map.get(ele.parentElement.classList[0]) + 1);
    }
    refresh();
}

function refresh() {
    const elements = document.querySelectorAll("#temp");
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }

    for (let [key, value] of map) {
        if (value === 0) continue;
        const newE = document.createElement("p");
        newE.id = "temp";
        let newKey = key.split("_");
        let ke = newKey[0] + " " + newKey[1];
        const node = document.createTextNode(ke + " x " + value);
        newE.appendChild(node);

        document.getElementById("right_section").appendChild(newE);

        const removebutton = document.createElement("button");
        removebutton.textContent = "Remove item";
        removebutton.id = "temp";
        removebutton.classList.add(key);
        document.getElementById("right_section").appendChild(removebutton);

        removebutton.addEventListener("click", function (event) {
            const key = removebutton.classList[0];
            map.set(key, map.get(key) - 1);
            refresh();
        });

    }

    const total = document.createElement("h3");
    total.id = "temp"
    total.textContent = "Total Cost: $" + calculate();
    document.getElementById("right_section").appendChild(total);

}

function calculate() {
    let total = 0;
    for (let [key, value] of map) {
        switch (key) {
            case "the_tim":
                total += value * 10
                break;
            case "the_timmy":
                total += value * 11
                break;
            case "the_timothy":
                total += value * 12
                break;
            case "rice_bowl":
                total += value * 8
                break;
            case "noodle_bowl":
                total += value * 8
                break;
            case "egg_roll":
                total += value * 3
                break;
            case "cookie_dough":
                total += value * 3
                break;
            case "vanilla_milkshake":
                total += value * 4
                break;
            case "hot_dog":
                total += value * 2
                break;
        }
    }
    return total;
}