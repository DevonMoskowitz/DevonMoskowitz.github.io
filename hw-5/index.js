
let loaded = false;
document.addEventListener("submit", (ev) => {
    ev.preventDefault()
    if (!loaded) {
        console.log(document.getElementById("input").value)
        loadPage(document.getElementById("input").value).then(r => {
        })
        loaded = true;
    } else {
        let counter = 1
        for (const elem of document.body.getElementsByClassName("boxes")) {
                setTimeout(() => {
                    elem.remove();
                }, (10) * counter);
                counter += 1;
            }
        setTimeout(() => {
            loadPage(document.getElementById("input").value).then(r => {
            })
        }, 5 * 1000)
    }
})

async function make(string) {
    try {
        return await fetch("https://api.github.com/users/" + string + "/repos")
    } catch (e) {
        console.log("Error: " + e)
    }
}

async function getCommits(string) {
    try {
        const response = await fetch(string);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();

        return result.length;
    } catch (error) {
        console.error('Error fetching data:', error);
        return "Error";
    }
}

async function getLang(string) {
    try {
        const response = await fetch(string);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        let lang = " ";
        for (const key in result) {
            lang = lang + key + " ";
        }
        const newString = lang.trim();
        if (newString === "") return "None";
        return newString;
    } catch (error) {
        console.error('Error fetching data:', error);
        return "Error"; // Or throw the error if you want to handle it outside this function
    }

    if (newString === " ") return "None"
    console.log(newString)
    return newString;
}

async function loadPage(str) {
    make(str).then(result => {
        if (!result.ok) {
            throw new Error("There was an error")
        }
        return result.json()
    }).then(result => {
        console.log(result)
        for (let i = 0; i < result.length; ++i) {
            let element = document.createElement("div")
            let top = document.createElement("div")
            element.setAttribute("class", "boxes")
            element.id = "box"
            top.setAttribute("class", "top")
            top.innerHTML = '<i id="icon" class="fa-brands fa-square-github"></i>' + "<p>" + result[i].name + "</p>"
            getLang(result[i].languages_url).then(string => {
                getCommits(result[i].commits_url.substring(0, result[i].commits_url.length - 6)).then(number => {
                    let desc = result[i].description === null ? "No set description." : result[i].description
                    element.innerHTML = '<p>' + desc + "\n</p><p>Languages: " + string + "</p> <p>Watchers: " + result[i].watchers + '</p>' +
                        "<p>" + "Created at: " + new Date(result[i].created_at).toDateString() + "</p>" +
                        "<p>" + "Commits: " + number + "</p>" +
                        "<p>" + "Update Date: " + new Date(result[i].updated_at).toDateString() + "</p>"
                    document.getElementById("parent").appendChild(element)
                    element.firstChild.before(top)
                })
            })


        }
    }).catch(e => {
        let el = document.createElement("p")
        el.setAttribute("id", "temp")
        el.innerHTML = "This user does not exist.";
        document.body.appendChild(el)
        setTimeout(() => {
            el.remove();
        }, 2 * 1000)
    })



}