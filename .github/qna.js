let qnaData = JSON.parse(localStorage.getItem("qnaData")) || [];

function addQuestion() {
    const input = document.getElementById("question-input");
    const questionText = input.value.trim();

    if (questionText === "") return;

    const answerText = prompt("Answer the question:");
    
    if (answerText === null || answerText.trim() === "") return;

    qnaData.push({ question: questionText, answer: answerText });
    localStorage.setItem("qnaData", JSON.stringify(qnaData)); // Save to storage
    input.value = "";
    updateQnAList();
}

function updateQnAList() {
    const qnaList = document.getElementById("qna-list");
    qnaList.innerHTML = "";

    qnaData.forEach((qna, index) => {
        const qnaItem = document.createElement("div");
        qnaItem.classList.add("qna-item");
        qnaItem.innerHTML = `
            <p><strong>Q:</strong> ${qna.question}</p>
            <p><strong>A:</strong> ${qna.answer}</p>
            <button onclick="deleteQuestion(${index})">🗑️ Delete</button>
        `;
        qnaList.appendChild(qnaItem);
    });
}

function deleteQuestion(index) {
    qnaData.splice(index, 1);
    localStorage.setItem("qnaData", JSON.stringify(qnaData)); // Update storage
    updateQnAList();
}

// Load questions on page load
updateQnAList();
