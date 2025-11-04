const verifyBtn = document.getElementById("verify");
const submitBtn = document.getElementById("send");
const resultField = document.getElementById("result");
const taskField = document.getElementById("task");
const form = document.getElementById("UserEnter");
const searchField = document.getElementsByName("q")[0];

let canSend = false;

verifyBtn.addEventListener("click", function () {
    const D = parseFloat(document.getElementById("d").value);
    const A = parseFloat(document.getElementById("a").value);

    let resultText = "не определен";
    canSend = false;

    if (!isNaN(D) && !isNaN(A)) {
        // Диагональ квадратного бруса должна быть меньше или равна диаметру бревна
        const diagonal = A * Math.sqrt(2);

        if (diagonal <= D) {
            resultText = "Можно выпилить брус из бревна";
            canSend = true;
        } else {
            resultText = "Нельзя выпилить брус из бревна";
            canSend = false;
        }
    }

    resultField.value = resultText;
    const fullText = `Можно ли из бревна диаметром D=${D} выпилить квадратный брус шириной A=${A}. Результат: ${resultText}`;
    taskField.value = fullText;
    searchField.value = fullText;

    submitBtn.disabled = !canSend;
});

form.addEventListener("submit", function (e) {
    if (!canSend) {
        e.preventDefault();
        alert("Нельзя отправить: брус нельзя выпилить из бревна");
    }
});