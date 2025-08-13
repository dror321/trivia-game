const questions = [
  {
    question: "מהי עיר הבירה של ישראל?",
    answers: ["ירושלים", "תל אביב", "חיפה", "באר שבע"],
    correct: 0
  },
  {
    question: "כמה זה 9 × 8?",
    answers: ["72", "81", "64", "89"],
    correct: 0
  },
  {
    question: "איזה כוכב לכת הכי קרוב לשמש?",
    answers: ["ונוס", "חמה", "מאדים", "שבתאי"],
    correct: 1
  },
  {
    question: "מהי בירת צרפת?",
    answers: ["מדריד", "רומא", "פריז", "קהיר"],
    correct: 2
  },
  { question: "כמה ימים יש בשנה מעוברת?",
    answers: ["365", "366", "376", "כרגיל אין שינוי"],
    correct: 1
  },
  { question: "מי צייר את המונה ליזה?",
    answers: ["פאבלו פיקאסו", "קלוד מונה", "נחום גוטמן", "לאונרדו דה וינצ'י"],
    correct: 3
  },
  { question: "איזה כוכב לכת הוא הגדול ביותר במערכת השמש?",
    answers: ["כדור הארץ", "צדק", "שבתאי", "השמש"],
    correct: 1
  },
  { question: "מהי המדינה הכי גדולה בעולם בשטחה?",
    answers: ["ארצות הברית", "קנדה", "רוסיה", "סין"],
    correct: 2
  },
  { question: "מי כתב את הספר הארי פוטר ואבן החכמים?",
    answers: ["ג'יי. קיי. רולינג", "צ'ארלס דיקנס", "אגתה כריסטי", "אתגר קרת "],
    correct: 0
  },
  { question: "מהי המתכת היקרה ביותר בעולם?",
    answers: ["יהלום", "ברזל", "רודיום", "נחושת"],
    correct: 2
  },
  { question: "מי היה ראש הממשלה הראשון של מדינת ישראל?",
    answers: ["בינימין נתניהו", "יצחק רבין", "גולדה מאיר", "דוד בן-גוריון"],
    correct: 3
  },
  { question: "איך נקרא המדבר הגדול ביותר בעולם?",
    answers: ["מדבר סהרה", "מדבר יהודה", "אנטארקטיקה", "המדבר הסורי"],
    correct: 2  
  },





































];

let currentQuestion = 0;

let answered= false;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => checkAnswer(i);
    answersDiv.appendChild(btn);
  });
  document.getElementById("result").innerText = "";
answered =false;

}

function checkAnswer(i) {
  const q = questions[currentQuestion];
  const result = document.getElementById("result");
  if (i === q.correct) {
    result.innerText = "נכון!";
    result.style.color = "green";
  } else {
    result.innerText = "טעות!";
    result.style.color = "red";
  }
answered =true;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerText = "סיימת את הטריוויה!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("result").innerText = "";
  }
   if (!answered) {
    document.getElementById("result").innerText = "קודם תענה על השאלה!";
    document.getElementById("result").style.color = "orange";
    return; 
  }
}

showQuestion();
