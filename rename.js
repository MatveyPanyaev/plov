const translitMap = {
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y',
    'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F',
    'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ы': 'Y', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya',
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y',
    'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya'
};

function transliterate(text) {
    return text.split('').map(c => translitMap[c] || c).join('');
}

function rename() {
    console.log("Функция rename вызвана!");
    
    const elements = [
        'secondName', 'name', 'fatherName', 'year', 'number', 'issuedBy'
    ];
    
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            const original = element.innerText;
            element.innerText = transliterate(original);
            console.log(`${id}: ${original} → ${element.innerText}`);
        }
    });
}

// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    const clickElement = document.getElementById("for_click");
    if (clickElement) {
        clickElement.addEventListener("click", rename);
        console.log("Обработчик события добавлен!");
    } else {
        console.error("Элемент for_click не найден!");
    }
});