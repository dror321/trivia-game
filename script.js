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
  { question: "איזה ים הוא המלוח ביותר בעולם?",
  answers: ["ים המלח", "ים סוף", "ים ארל", "הים הכספי"],
  correct: 0
},
{ question: "באיזו שנה האדם הראשון נחת על הירח?",
  answers: ["1965", "1969", "1971", "1975"],
  correct: 1
},
{ question: "מהי בירת קנדה?",
  answers: ["טורונטו", "אוטווה", "ונקובר", "מונטריאול"],
  correct: 1
},
{ question: "איזו מדינה ידועה בכינוי 'ארץ השמש העולה'?",
  answers: ["סין", "יפן", "תאילנד", "קוריאה הדרומית"],
  correct: 1
},
{ question: "כמה שיניים יש לאדם בוגר בדרך כלל?",
  answers: ["28", "30", "32", "34"],
  correct: 2
},
{ question: "מי המציא את נורת החשמל?",
  answers: ["תומס אדיסון", "אלברט איינשטיין", "ניקולה טסלה", "גראהם בל"],
  correct: 0
},
{ question: "מהו ההר הגבוה ביותר בעולם?",
  answers: ["קילימנג'רו", "אוורסט", "אלברוס", "אנדים"],
  correct: 1
},
{ question: "איזה איבר בגוף האדם מייצר אינסולין?",
  answers: ["כבד", "לבלב", "לב", "כליה"],
  correct: 1
},
{ question: "מהי בירת ברזיל?",
  answers: ["סאו פאולו", "ריו דה ז'ניירו", "ברזיליה", "בלם"],
  correct: 2
},
{ question: "באיזו מדינה הומצא הסושי?",
  answers: ["סין", "יפן", "קוריאה", "וייטנאם"],
  correct: 1
},
{ question: "מהי המולקולה שמספקת אנרגיה לתאי הגוף?",
  answers: ["DNA", "ATP", "RNA", "GTP"],
  correct: 1
},
{ question: "מי היה נשיא ארה\"ב בזמן מלחמת האזרחים?",
  answers: ["ג'ורג' וושינגטון", "אברהם לינקולן", "תיאודור רוזוולט", "ג'ון אדמס"],
  correct: 1
},
{ question: "כמה יבשות יש בעולם?",
  answers: ["5", "6", "7", "8"],
  correct: 2
},
{ question: "מהו שמו של כוכב הלכת האדום?",
  answers: ["מאדים", "נוגה", "שבתאי", "צדק"],
  correct: 0
},
{ question: "מי כתב את הספר '1984'?",
  answers: ["ג'ורג' אורוול", "ארנסט המינגוויי", "ג'ורג' מרטין", "ג'ון סטיינבק"],
  correct: 0
},
{ question: "באיזו מדינה נמצא מגדל אייפל?",
  answers: ["ספרד", "צרפת", "איטליה", "בלגיה"],
  correct: 1
},
{ question: "מהי הציפור הגדולה ביותר בעולם?",
  answers: ["נשר", "יען", "אלבטרוס", "פלמינגו"],
  correct: 1
},
{ question: "באיזו עיר שוכן מוזיאון הלובר?",
  answers: ["פריז", "לונדון", "רומא", "ברלין"],
  correct: 0
},
{ question: "מהי השפה המדוברת ביותר בעולם?",
  answers: ["אנגלית", "מנדרינית", "הינדית", "ספרדית"],
  correct: 1
},
{ question: "איזו חיה נחשבת למלכה של הג'ונגל?",
  answers: ["נמר", "טיגריס", "אריה", "פנתר"],
  correct: 2
},
{ question: "מהו היבשת הקטנה ביותר?",
  answers: ["אירופה", "אוסטרליה", "אנטרקטיקה", "דרום אמריקה"],
  correct: 1
},
{ question: "באיזו שנה נוסדה מדינת ישראל?",
  answers: ["1945", "1948", "1950", "1952"],
  correct: 1
},
{ question: "איזה גז מהווה את רוב האטמוספירה?",
  answers: ["חמצן", "פחמן דו-חמצני", "חנקן", "מימן"],
  correct: 2
},
{ question: "כמה מיתרים יש בגיטרה רגילה?",
  answers: ["4", "5", "6", "7"],
  correct: 2
},
{ question: "איזה צבע מתקבל מערבוב כחול וצהוב?",
  answers: ["סגול", "ירוק", "כתום", "חום"],
  correct: 1
},
{ question: "מי כתב את התנ\"ך?",
  answers: ["משה רבנו", "קבוצת סופרים לאורך דורות", "שלמה המלך", "דוד המלך"],
  correct: 1
},
{ question: "מהו המטבע של בריטניה?",
  answers: ["אירו", "לירה שטרלינג", "דולר", "פרנק"],
  correct: 1
},
{ question: "באיזו מדינה נערכה אולימפיאדת 2008?",
  answers: ["סידני", "לונדון", "בייג'ינג", "אתונה"],
  correct: 2
},
{ question: "איזו מתכת היא הנפוצה ביותר בקרום כדור הארץ?",
  answers: ["ברזל", "אלומיניום", "נחושת", "אבץ"],
  correct: 1
},
{ question: "כמה לבבות יש לתמנון?",
  answers: ["1", "2", "3", "4"],
  correct: 2
},
{ question: "מהי עיר הבירה של מצרים?",
  answers: ["קהיר", "אלכסנדריה", "גיזה", "לוקסור"],
  correct: 0
},
{ question: "באיזו שנה פרצה מלחמת העולם השנייה?",
  answers: ["1914", "1939", "1945", "1929"],
  correct: 1
},
{ question: "מהו הנהר הארוך ביותר באירופה?",
  answers: ["הדנובה", "הוולגה", "הריין", "הפאו"],
  correct: 1
},
{ question: "מי המציא את המטוס?",
  answers: ["האחים רייט", "תומס אדיסון", "צ'רלס לינדברג", "אלברט איינשטיין"],
  correct: 0
},
{ question: "איזה איבר בגוף אחראי על שאיבת הדם?",
  answers: ["ריאות", "לב", "מוח", "כבד"],
  correct: 1
},
{ question: "באיזו יבשת נמצאת מדינת קניה?",
  answers: ["אסיה", "אפריקה", "דרום אמריקה", "אירופה"],
  correct: 1
},
{ question: "מי היה הצייר ההולנדי שצייר את 'כוכב הלילה'?",
  answers: ["פאבלו פיקאסו", "קלוד מונה", "ואן גוך", "רמברנדט"],
  correct: 2
},
{ question: "מהי בירת איטליה?",
  answers: ["מדריד", "רומא", "מילאנו", "פירנצה"],
  correct: 1
},
{ question: "איזו חיה יכולה לישון בעמידה?",
  answers: ["פרה", "סוס", "ג'ירפה", "כל התשובות נכונות"],
  correct: 3
},
{ question: "מהו שמו של הכוכב המרכזי במערכת השמש?",
  answers: ["שמש", "צדק", "מאדים", "כדור הארץ"],
  correct: 0
},
{ question: "כמה ימים יש בשבועות?",
  answers: ["5", "6", "7", "8"],
  correct: 2
},
{ question: "מי היה ראש הממשלה של בריטניה בזמן מלחמת העולם השנייה?",
  answers: ["ווינסטון צ'רצ'יל", "מרגרט תאצ'ר", "נבילה צ'מברליין", "דיוויד קמרון"],
  correct: 0
},
{ question: "מהו הים הגדול ביותר בעולם?",
  answers: ["הים התיכון", "הים הכספי", "הים הערבי", "ים סין הדרומי"],
  correct: 1
},
{ question: "איזה איבר אחראי על עיכול המזון?",
  answers: ["קיבה", "כבד", "ריאות", "לב"],
  correct: 0
},
{ question: "מהו היסוד הכימי עם הסימול H?",
  answers: ["הליום", "מימן", "חמצן", "חנקן"],
  correct: 1
},
{ question: "איזו עיר מכונה 'התפוח הגדול'?",
  answers: ["לוס אנג'לס", "ניו יורק", "שיקגו", "סן פרנסיסקו"],
  correct: 1
},
{ question: "מי המציא את מכונת הדפוס?",
  answers: ["ג'והנס גוטנברג", "תומס אדיסון", "אלכסנדר בל", "לאונרדו דה וינצ'י"],
  correct: 0
},
{ question: "מהו שמה של המוזה של המדע במיתולוגיה היוונית?",
  answers: ["קליאו", "אורניה", "תאליה", "פוליהימניה"],
  correct: 1
},
{ question: "איזו מדינה מחוברת ליבשת אסיה ואירופה?",
  answers: ["רוסיה", "טורקיה", "קזחסטן", "כל התשובות נכונות"],
  correct: 3
}





































];

let currentQuestion = 0;

let answered= false;
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(questions); 

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
     setTimeout(() => {
        nextQuestion();
    }, 1000);
  } else {
    result.innerText = "טעות!";
    result.style.color = "red";
    setTimeout(() => {
        nextQuestion();
    }, 1000);
}
  
answered =true;
}

function nextQuestion() {
if (!answered) {
    document.getElementById("result").innerText = "קודם תענה על השאלה!";
    document.getElementById("result").style.color = "orange";
    return; 
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerText = "סיימת את הטריוויה!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("result").innerText = "";
  }
   
  }


showQuestion();
