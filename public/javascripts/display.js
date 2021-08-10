// DOM manipulation with fetch api
const cur1Select = document.querySelector("#cur1Select");
const cur2Select = document.querySelector("#cur2Select");
const curInput = document.querySelector("input");
const curResult = document.querySelector("h4");

let cur1 = cur1Select.value;
let cur2 = cur2Select.value;

// fetching api and updating text
function fetchApiAndUpdate(cur1, cur2) {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur1}/${cur2}.json`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            let curValue = curInput.value * data[cur2];
            curValue = Math.round(curValue * 100) / 100;
            const cur2Upper = cur2.toUpperCase();
            curResult.innerText = `${curValue} ${cur2Upper}`;
        })
        .catch(e => {
            console.log("Error: ", e);
        })
}

// getting currency select values
cur1Select.addEventListener("change", (inputCur1) => {
    cur1 = inputCur1.target.value;
    if (curInput.innerText != "Enter in your amount") {
        fetchApiAndUpdate(cur1, cur2);
    }
});
cur2Select.addEventListener("change", (inputCur2) => {
    cur2 = inputCur2.target.value;
    if (curResult.innerText != "Enter in your amount") {
        fetchApiAndUpdate(cur1, cur2);
    }
});

// fetch api and DOM to give value
curInput.addEventListener("input", (e) => {
    if (!curInput.value) {
        curResult.innerText = "Enter in your amount";
    } else if (!parseInt(curInput.value)) {
        curResult.innerText = "Please enter a non-zero number";
    } else {
        fetchApiAndUpdate(cur1, cur2)
    }
});




