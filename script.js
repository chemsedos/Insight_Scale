// Variables & Classes Declaration
let form = document.querySelector(".form");

class QuestionItem {
  constructor(question_text, ansewers_text, answers_scores) {
    this.question_text = question_text;
    this.ansewers_text = ansewers_text;
    this.answers_scores = answers_scores;
  }
}

class Scale {
  constructor(QuestionItem, ScoreItem) {
    this.QuestionItem = QuestionItem;
    this.ScoreItem = ScoreItem;
  }

  ScaleScoreTotalCalcul() {
    let scaleST = 0;
    for (let i in this.ScoreItem) {
      scaleST = scaleST + this.ScoreItem[i];
    }
    return scaleST;
  }
}

const isScaleAnsersTexts = ["D'accord", "Pas d'accord ", "incertain"];
const isScaleAnsersScors = [
  [2, 0, 1],
  [0, 2, 1],
  [0, 2, 1],
  [2, 0, 1],
  [2, 0, 1],
  [0, 2, 1],
  [2, 0, 1],
  [0, 2, 1],
];

//Creation des classe des question concernant la sous Section Panss POSITIVE
const q1 = new QuestionItem(
  "1. Certaines de mes difficultés psychologiques proviennent de mon cerveau.",
  isScaleAnsersTexts,
  isScaleAnsersScors[0]
);

const q2 = new QuestionItem(
  "2. Je vais bien mentalement.",
  isScaleAnsersTexts,
  isScaleAnsersScors[1]
);

const q3 = new QuestionItem(
  "3. Je n’ai pas besoin de médicaments.",
  isScaleAnsersTexts,
  isScaleAnsersScors[2]
);

const q4 = new QuestionItem(
  "4. Mon séjour à l’hôpital était nécessaire.",
  isScaleAnsersTexts,
  isScaleAnsersScors[3]
);

const q5 = new QuestionItem(
  "5. Le médecin a raison de me prescrire des médicaments.",
  isScaleAnsersTexts,
  isScaleAnsersScors[4]
);
const q6 = new QuestionItem(
  "6. Je n’ai pas besoin de voir un médecin ou un psychiatre.",
  isScaleAnsersTexts,
  isScaleAnsersScors[5]
);

const q7 = new QuestionItem(
  "7. Si quelqu’un disait que j’avais une maladie nerveuse ou mentale alors il aurait raison.",
  isScaleAnsersTexts,
  isScaleAnsersScors[6]
);
const q8 = new QuestionItem(
  "8. Mes difficultés psychologiques ne sont pas liées à une maladie. ",
  isScaleAnsersTexts,
  isScaleAnsersScors[7]
);
console.log("dfgsdfgsdfg  :  " + q1.answers_scores[1]);
//let panssScale_P = [p1, p2, p3, p4, p5, p6, p7];
let IS_Scale = new Scale(
  [q1, q2, q3, q4, q5, q6, q7, q8],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
IS_Scale.ScoreItem = [0, 0, 0, 0, 0, 1, 2, 2];

// console.log(IS_Scale.ScaleScoreTotalCalcul());
// console.log(IS_Scale.QuestionItem.lentgh);

for (let i = 0; i < 8; i++) {
  const div = document.createElement("div");
  div.classList.add("question_bloc");

  const qDom = document.createElement("h4");
  const qDomTxt = document.createTextNode(
    IS_Scale.QuestionItem[i].question_text
  );

  console.log(i);
  //console.log(panssScale_P.question_text);
  form.appendChild(div);
  div.appendChild(qDom);
  qDom.appendChild(qDomTxt);
  for (let nb = 0; nb < 3; nb++) {
    const div_answers = document.createElement("div");
    const radioAnswerChoice = document.createElement("input");
    const label_radioAnswerChoice = document.createElement("label");

    radioAnswerChoice.setAttribute("type", "radio");
    radioAnswerChoice.setAttribute("id", `q0${i + 1}_Answer0${nb + 1}`);
    radioAnswerChoice.setAttribute("name", `q0${i + 1}`);
    radioAnswerChoice.setAttribute(
      "value",
      IS_Scale.QuestionItem[i].answers_scores[nb]
    );

    if (nb === 0) {
      radioAnswerChoice.setAttribute("checked", true);
    }

    label_radioAnswerChoice.setAttribute("for", `q0${i + 1}_Answer0${nb + 1}`);
    label_radioAnswerChoice.innerText =
      IS_Scale.QuestionItem[i].ansewers_text[nb];
    // radioAnswerChoice.type = "radio";
    // radioAnswerChoice.name = `q0${i + 1}`;
    // radioAnswerChoice.id = `q0${i + 1}_Answer0${nb + 1}`;

    div.appendChild(div_answers);
    div_answers.appendChild(radioAnswerChoice);
    div_answers.appendChild(label_radioAnswerChoice);

    //label_radioAnswerChoice.setAttribute("for", radioAnswerChoice.id);
    //label_radioAnswerChoice.innerHTML = "Daccord";

    //radioAnswerChoice.value = IS_Scale.QuestionItem[i].ScoreItem[nb];
    //div.appendChild(radioAnswerChoice);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(document.querySelector(`input[name="q02"]:checked`).value);
  ClalculScoreTotal();
});

function ClalculScoreTotal() {
  let scoreTotal;
  for (let i = 0; i < 8; i++) {
    let tag = `input[name=q0${i + 1}]:checked`;
    IS_Scale.ScoreItem[i] = Number(document.querySelector(tag).value);
    console.log(
      IS_Scale.QuestionItem[i].answers_scores + "::" + IS_Scale.ScoreItem[i]
    );
  }

  console.log(IS_Scale.ScaleScoreTotalCalcul());
  afficherScoreScale();
  analyseScore();
}

function afficherScoreScale() {
  let note_show = document.querySelector(".note");
  note_show.innerText = IS_Scale.ScaleScoreTotalCalcul();
  console.log(note_show);
  //note_show.setAttribute("",)
  //note_show.innerText = String(note_show);
}
function analyseScore() {
  let analyseScoreMessage = [false, false, false];
  let m01_CS = "Conscience des symptômes";
  let M02_CM = "Conscience de la maladie";
  let M03_NT = "Nécessiter un traitement";

  console.log(IS_Scale.ScoreItem[0] + IS_Scale.ScoreItem[7]);
  // console.log(IS_Scale.ScoreItem[1] + IS_Scale.ScoreItem[6]);
  // console.log(
  //   IS_Scale.ScoreItem[2] +
  //     IS_Scale.ScoreItem[3] +
  //     IS_Scale.ScoreItem[4] +
  //     IS_Scale.ScoreItem[5]
  // );
  if (Number(IS_Scale.ScoreItem[0]) + Number(IS_Scale.ScoreItem[7] <= 2)) {
    analyseScoreMessage[0] = false;
    document.querySelector(".m_cs").innerText = "Mauvais Insight";
  } else {
    analyseScoreMessage[0] = true;
    document.querySelector(".m_cs").innerText = "Bon Insight";
  }

  if (IS_Scale.ScoreItem[1] + IS_Scale.ScoreItem[6] <= 2) {
    analyseScoreMessage[1] = false;
    document.querySelector(".m_cm").innerText = "Mauvais Insight";
  } else {
    analyseScoreMessage[1] = true;
    document.querySelector(".m_cm").innerText = "Bon Insight";
  }

  if (
    (IS_Scale.ScoreItem[2] +
      IS_Scale.ScoreItem[3] +
      IS_Scale.ScoreItem[4] +
      IS_Scale.ScoreItem[5]) /
      2 <=
    2
  ) {
    analyseScoreMessage[2] = false;
    document.querySelector(".m_nt").innerText = "Mauvais Insight";
  } else {
    analyseScoreMessage[2] = true;
    console.log((analyseScoreMessage[2] = true));
    document.querySelector(".m_nt").innerText = "Bon Insight";
  }
  console.log(analyseScoreMessage);
}
