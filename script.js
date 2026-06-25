const MODES = [
  { id: "affirmative", label: "Affirmative" },
  { id: "negative", label: "Negative" },
  { id: "wh", label: "W-H Question" },
  { id: "yesno", label: "Yes-No Question" },
  { id: "short", label: "Short Answer" },
];
//lista de sujetos
const SUBJECTS = [
  { text: "I", group: "first" },
  { text: "you", group: "plural" },
  { text: "he", group: "third" },
  { text: "she", group: "third" },
  { text: "it", group: "third" },
  { text: "we", group: "plural" },
  { text: "they", group: "plural" },
  { text: "my brother", group: "third" },
  { text: "the teacher", group: "third" },
  { text: "Ana and Luis", group: "plural" },
  { text: "the students", group: "plural" },
];


//lista de verbos 
const VERBS = [
  {
    base: "eat",
    past: "ate",
    present3: "eats",
    ing: "eating",
    complements: ["sushi", "rice", "breakfast", "a sandwich", "pizza", "fruit", "salad", "noodles"],
  },
  {
    base: "cook",
    past: "cooked",
    present3: "cooks",
    ing: "cooking",
    complements: ["tacos", "chicken", "dinner", "vegetables", "soup", "pasta", "fish", "eggs"],
  },
  {
    base: "play",
    past: "played",
    present3: "plays",
    ing: "playing",
    complements: ["soccer", "the guitar", "basketball", "video games", "chess", "baseball", "the piano", "tennis"],
  },
  {
    base: "buy",
    past: "bought",
    present3: "buys",
    ing: "buying",
    complements: ["groceries", "a book", "new shoes", "a ticket", "a phone", "flowers", "clothes", "school supplies"],
  },
  {
    base: "watch",
    past: "watched",
    present3: "watches",
    ing: "watching",
    complements: ["a movie", "TV", "a game", "a video", "a series", "the news", "a concert", "a lesson"],
  },
  {
    base: "study",
    past: "studied",
    present3: "studies",
    ing: "studying",
    complements: ["English", "math", "grammar", "history", "science", "music", "French", "vocabulary"],
  },
  {
    base: "drink",
    past: "drank",
    present3: "drinks",
    ing: "drinking",
    complements: ["water", "coffee", "tea", "juice", "milk", "lemonade", "hot chocolate", "a smoothie"],
  },
  {
    base: "visit",
    past: "visited",
    present3: "visits",
    ing: "visiting",
    complements: ["grandma", "a museum", "a friend", "the city", "the park", "Mexico City", "a doctor", "my family"],
  },
  {
    base: "read",
    past: "read",
    present3: "reads",
    ing: "reading",
    complements: ["a book", "the news", "a story", "an email", "a magazine", "a message", "a poem", "instructions"],
  },
  {
    base: "make",
    past: "made",
    present3: "makes",
    ing: "making",
    complements: ["breakfast", "a cake", "a plan", "coffee", "a video", "a drawing", "a list", "a mistake"],
  },
  {
    base: "write",
    past: "wrote",
    present3: "writes",
    ing: "writing",
    complements: ["a letter", "an email", "a story", "a report", "a sentence", "a note", "a poem", "homework"],
  },
  {
    base: "clean",
    past: "cleaned",
    present3: "cleans",
    ing: "cleaning",
    complements: ["the room", "the kitchen", "the car", "the table", "the house", "the board", "the floor", "the windows"],
  },
  {
    base: "open",
    past: "opened",
    present3: "opens",
    ing: "opening",
    complements: ["the door", "the window", "the box", "the book", "the app", "the store", "the file", "the backpack"],
  },
  {
    base: "close",
    past: "closed",
    present3: "closes",
    ing: "closing",
    complements: ["the door", "the window", "the book", "the store", "the app", "the file", "the bag", "the gate"],
  },
  {
    base: "call",
    past: "called",
    present3: "calls",
    ing: "calling",
    complements: ["my mom", "a friend", "the teacher", "the office", "a doctor", "Luis", "the manager", "my sister"],
  },
  {
    base: "help",
    past: "helped",
    present3: "helps",
    ing: "helping",
    complements: ["my friend", "the teacher", "my brother", "the students", "my family", "a customer", "Ana", "the team"],
  },
  {
    base: "find",
    past: "found",
    present3: "finds",
    ing: "finding",
    complements: ["my keys", "a book", "the truth", "a solution", "the way", "a friend", "the teacher", "my family"],
  },
  {
    base: "work",
    past: "worked",
    present3: "works",
    ing: "working",
    complements: ["at the office", "in the garden", "on the project", "with the team", "on the homework", "at the library", "on the computer", "in the classroom"],
  },
  {
    base: "try",
    past: "tried",
    present3: "tries",
    ing: "trying",
    complements: ["new food", "a new hobby", "to learn English", "to play the guitar", "to draw better", "to cook", "to dance", "to write a story"],
  },
];

//estructuras de los tiempos
const TENSES = {
  simplePast: {
    label: "Simple Past",
    time: ["yesterday", "last night", "last week", "two days ago", "last month", "in 2020", "this morning", "a year ago", "last weekend", "on Monday"],
    structure: {
      affirmative: "Subject + past verb + complement + past time",
      negative: "Subject + did not + base verb + complement + past time",
      wh: "W-H word + did + subject + base verb + complement + past time?",
      yesno: "Did + subject + base verb + complement + past time?",
      short: "Yes/No + subject + did/didn't",
    },
    slots: {
      affirmative: ["subject", "verbPast", "complement", "time"],
      negative: ["subject", "auxDid", "negative", "verbBase", "complement", "time"],
      wh: ["wh", "auxDid", "subject", "verbBase", "complement", "time"],
      yesno: ["auxDid", "subject", "verbBase", "complement", "time"],
      short: ["answer", "subject", "shortDid"],
    },
  },
  simplePresent: {
    label: "Simple Present",
    time: ["every day", "on Mondays", "usually", "in the morning", "after school", "every weekend", "at night", "often", "sometimes", "before class"],
    structure: {
      affirmative: "Subject + present verb + complement + routine time",
      negative: "Subject + do/does not + base verb + complement + routine time",
      wh: "W-H word + do/does + subject + base verb + complement + routine time?",
      yesno: "Do/Does + subject + base verb + complement + routine time?",
      short: "Yes/No + subject + do/does/don't/doesn't",
    },
    slots: {
      affirmative: ["subject", "verbPresent", "complement", "time"],
      negative: ["subject", "auxDo", "negative", "verbBase", "complement", "time"],
      wh: ["wh", "auxDo", "subject", "verbBase", "complement", "time"],
      yesno: ["auxDo", "subject", "verbBase", "complement", "time"],
      short: ["answer", "subject", "shortDo"],
    },
  },
  goingTo: {
    label: "Future Going To",
    time: ["tomorrow", "next week", "tonight", "soon", "next month", "next year", "later", "this weekend", "after class", "on Friday"],
    structure: {
      affirmative: "Subject + am/is/are going to + base verb + complement + future time",
      negative: "Subject + am/is/are not going to + base verb + complement + future time",
      wh: "W-H word + am/is/are + subject + going to + base verb + complement + future time?",
      yesno: "Am/Is/Are + subject + going to + base verb + complement + future time?",
      short: "Yes/No + subject + am/is/are/am not/isn't/aren't",
    },
    slots: {
      affirmative: ["subject", "be", "goingTo", "verbBase", "complement", "time"],
      negative: ["subject", "be", "negative", "goingTo", "verbBase", "complement", "time"],
      wh: ["wh", "be", "subject", "goingTo", "verbBase", "complement", "time"],
      yesno: ["be", "subject", "goingTo", "verbBase", "complement", "time"],
      short: ["answer", "subject", "shortBe"],
    },
  },
  presentProgressive: {
    label: "Present Progressive",
    time: ["now", "right now", "at the moment", "today", "this week", "these days", "this morning", "currently", "this afternoon", "tonight"],
    structure: {
      affirmative: "Subject + am/is/are + verb-ing + complement + present time",
      negative: "Subject + am/is/are not + verb-ing + complement + present time",
      wh: "W-H word + am/is/are + subject + verb-ing + complement + present time?",
      yesno: "Am/Is/Are + subject + verb-ing + complement + present time?",
      short: "Yes/No + subject + am/is/are/am not/isn't/aren't",
    },
    slots: {
      affirmative: ["subject", "be", "verbIng", "complement", "time"],
      negative: ["subject", "be", "negative", "verbIng", "complement", "time"],
      wh: ["wh", "be", "subject", "verbIng", "complement", "time"],
      yesno: ["be", "subject", "verbIng", "complement", "time"],
      short: ["answer", "subject", "shortBe"], 
    },
  },
  pastProgressive: {
    label: "Past Progressive",
    time :["yesterday", "last night", "last week", "two days ago", "last month", "in 2020", "this morning", "a year ago", "last weekend", "on Monday"],
    structure: {
       affirmative: "Subject + was/were + verb-ing + complement + past time",
      negative: "Subject + was/were not + verb-ing + complement + past time",
      wh: "W-H word + was/were + subject + verb-ing + complement + past time?",
      yesno: "Was/Were + subject + verb-ing + complement + past time?",
      short: "Yes/No + subject + was/were/wasn't/weren't",
    },
    slots:{
      affirmative: ["subject", "pastbe", "verbIng", "complement", "time"],
      negative: ["subject", "pastbe", "negative", "verbIng", "complement", "time"],
      wh: ["wh", "pastbe", "subject", "verbIng", "complement", "time"],
      yesno: ["pastbe", "subject", "verbIng", "complement", "time"],
      short: ["answer", "subject", "shortPastBe"],
    } 
  }
};
//configuracion de nivelels
const LEVEL_LIMITS = {
  basic: { subjects: 4, verbs: 5, extras: 0 },
  intermediate: { subjects: 6, verbs: 8, extras: 2 },
  advanced: { subjects: SUBJECTS.length, verbs: VERBS.length, extras: 5 },
};

//categorias gramaticales
const CATEGORY_LABELS = {
  subject: "Subject",
  verbPast: "Past Verb",
  verbPresent: "Present Verb",
  verbBase: "Base Verb",
  verbIng: "Verb-ing",
  complement: "Complement",
  time: "Time Expression",
  auxDid: "Auxiliary",
  auxDo: "Auxiliary",
  pastbe: "Past Be",
  negative: "Negative",
  wh: "W-H Word",
  be: "Be Verb",
  goingTo: "Going To",
  answer: "Answer",
  shortDid: "Short Aux",
  shortDo: "Short Aux",
  shortBe: "Short Be",
  shortPastBe: "Short Past Be"
};

//estado inicial de la pagina
const state = {
  tense: "simplePresent",
  mode: "affirmative",
  level: "basic",
  practice: "free",
  selectedCardId: null,
  selectedVerbBase: null,
  placed: {},
  goal: null,
  drag: null,
  shuffleKey: Math.random(),
  hideTime: true,
};
//referencias de html botones selectores modos etc
const els = {
  tenseSelect: document.querySelector("#tenseSelect"),
  levelSelect: document.querySelector("#levelSelect"),
  modeTabs: document.querySelector("#modeTabs"),
  goalPanel: document.querySelector("#goalPanel"),
  goalText: document.querySelector("#goalText"),
  nextGoalButton: document.querySelector("#nextGoalButton"),
  structureText: document.querySelector("#structureText"),
  sentenceBoard: document.querySelector("#sentenceBoard"),
  bankPanel: document.querySelector("#bankPanel"),
  checkButton: document.querySelector("#checkButton"),
  clearButton: document.querySelector("#clearButton"),
  feedback: document.querySelector("#feedback"),
  hideTimeToggle: document.querySelector("#hideTimeToggle"),
};


function init() {
  Object.entries(TENSES).forEach(([id, tense]) => {
    els.tenseSelect.append(new Option(tense.label, id));
  });

  MODES.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mode-tab";
    button.dataset.mode = mode.id;
    button.textContent = mode.label;
    els.modeTabs.append(button);
  });

  bindEvents();
  newGoal();
  render();
}

function bindEvents() {
  els.tenseSelect.addEventListener("change", (event) => {
    state.tense = event.target.value;
    resetBoard();
    newGoal();
    render();
  });

  els.levelSelect.addEventListener("change", (event) => {
    state.level = event.target.value;
    resetBoard();
    newGoal();
    render();
  });

  els.modeTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (!button) return;
    state.mode = button.dataset.mode;
    resetBoard();
    newGoal();
    render();
  });

  document.querySelectorAll("[data-practice]").forEach((button) => {
    button.addEventListener("click", () => {
      state.practice = button.dataset.practice;
      resetBoard();
      newGoal();
      render();
    });
  });

  els.nextGoalButton.addEventListener("click", () => {
    resetBoard();
    newGoal();
    render();
  });

  els.clearButton.addEventListener("click", () => {
    resetBoard();
    render();
  });

  els.hideTimeToggle.addEventListener("change", (event) => {
    state.hideTime = event.target.checked;
    resetBoard();
    render();
  });

  els.checkButton.addEventListener("click", checkAnswer);

}

function render() {
  const tense = TENSES[state.tense];
  els.tenseSelect.value = state.tense;
  els.levelSelect.value = state.level;
  els.structureText.textContent = getStructureText(tense);
  els.goalPanel.style.display =state.practice === "challenge" ? "grid" : "none";
  els.goalText.textContent = state.practice === "challenge" ? state.goal?.display ?? "" : "";
  els.hideTimeToggle.checked = state.hideTime;

  document.querySelectorAll("[data-practice]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.practice === state.practice);
  });

  els.modeTabs.querySelectorAll(".mode-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });

  renderBoard();
  renderBank();
  els.feedback.textContent = "";
}

function renderBoard() {
  const slots = getSlots();
  els.sentenceBoard.innerHTML = "";

  slots.forEach((slotType, index) => {
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = `slot ${categoryClass(slotType)}`;
    slot.dataset.index = String(index);
    slot.dataset.slot = slotType;
    slot.setAttribute("aria-label", CATEGORY_LABELS[slotType]);
    slot.innerHTML = `
      <span class="slot-label" aria-hidden="true">${CATEGORY_LABELS[slotType]}</span>
      <span class="slot-drop">${renderPlaced(index)}</span>
    `;
    slot.addEventListener("click", () => placeSelectedCard(index));
    slot.addEventListener("dragover", handleDragOver);
    slot.addEventListener("dragleave", handleDragLeave);
    slot.addEventListener("drop", handleDrop);
    els.sentenceBoard.append(slot);
  });
}

function renderPlaced(index) {
  const item = state.placed[index];
  if (!item) return "";
  return `<span class="placed-card">${item.text}</span>`;
}

function renderBank() {
  const slots = [...new Set(getSlots())];
  els.bankPanel.innerHTML = "";

  shuffleStable(slots, `panels:${state.shuffleKey}`).forEach((slotType) => {
    const words = shuffleStable(getWordsForSlot(slotType), `words:${state.shuffleKey}:${slotType}`);
    const category = document.createElement("article");
    category.className = `category ${categoryClass(slotType)}`;
    category.innerHTML = `
      <h2 class="category-title">${CATEGORY_LABELS[slotType]}</h2>
      <div class="word-list"></div>
    `;

    const list = category.querySelector(".word-list");
    words.forEach((word) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "word-card";
      card.draggable = true;
      card.textContent = word.text;
      card.dataset.cardId = word.id;
      card.dataset.slot = slotType;
      card.dataset.value = word.value;
      card.dataset.verbBase = word.verbBase ?? "";
      card.classList.toggle("is-selected", state.selectedCardId === word.id);
      card.classList.toggle("is-used", isCardUsed(word.id));
      card.addEventListener("click", () => selectCard(word));
      card.addEventListener("dragstart", (event) => handleDragStart(event, word));
      card.addEventListener("dragend", clearDropState);
      card.addEventListener("pointerdown", (event) => startPointerDrag(event, word));
      list.append(card);
    });

    els.bankPanel.append(category);
  });
}

function getSlots() {
  let slots = TENSES[state.tense].slots[state.mode];

  if (state.mode === "wh") {
    const whValue = currentWhValue();
    if (whValue === "what") {
      slots = slots.filter((slot) => slot !== "complement");
    }
    if (whValue === "when") {
      slots = slots.filter((slot) => slot !== "time");
    }
  }

  if (state.hideTime) {
    slots = slots.filter((slot) => slot !== "time");
  }

  return slots;
}

function getWordsForSlot(slotType) {
  const level = LEVEL_LIMITS[state.level];
  const verbs = VERBS.slice(0, level.verbs);
  const subjects = SUBJECTS.slice(0, level.subjects);
  const selectedVerb = getSelectedVerb();

  const wordsBySlot = {
    subject: subjects.map((subject) => word(slotType, subject.text, subject.text)),
    verbPast: verbs.map((verb) => word(slotType, verb.past, verb.past, verb.base)),
    verbBase: verbs.map((verb) => word(slotType, verb.base, verb.base, verb.base)),
    verbIng: verbs.map((verb) => word(slotType, verb.ing, verb.ing, verb.base)),
    verbPresent: verbs.flatMap((verb) => [
      word(slotType, verb.base, verb.base, verb.base),
      word(slotType, verb.present3, verb.present3, verb.base),
    ]),
    complement: getComplements(selectedVerb, verbs).map((item) => word(slotType, item, item)),
    time: TENSES[state.tense].time.map((item) => word(slotType, item, item)),
    auxDid: [word(slotType, "did", "did")],
    auxDo: ["do", "does"].map((item) => word(slotType, item, item)),
    pastbe: ["was", "were"].map((item) => word(slotType, item, item)),
    negative: ["not"].map((item) => word(slotType, item, item)),
    wh: ["what", "where", "when", "why", "how"].map((item) => word(slotType, item, item)),
    be: ["am", "is", "are"].map((item) => word(slotType, item, item)),
    goingTo: [word(slotType, "going to", "going to")],
    answer: ["Yes,", "No,"].map((item) => word(slotType, item, item)),
    shortDid: ["did", "didn't"].map((item) => word(slotType, item, item)),
    shortDo: ["do", "does", "don't", "doesn't"].map((item) => word(slotType, item, item)),
    shortBe: ["am", "is", "are", "am not", "isn't", "aren't"].map((item) => word(slotType, item, item)),
    shortPastBe: ["was", "were", "wasn't", "weren't"].map((item)=> word(slotType, item, item))
  };

  return wordsBySlot[slotType] ?? [];
}

function getComplements(selectedVerb, verbs) {
  if (selectedVerb) return selectedVerb.complements;
  const complementSet = new Set();
  verbs.slice(0, 4).forEach((verb) => {
    verb.complements.slice(0, 2).forEach((item) => complementSet.add(item));
  });
  return [...complementSet];
}

function word(slot, text, value, verbBase = "") {
  return {
    id: `${slot}:${value}:${verbBase}`,
    text,
    value,
    verbBase,
    slot,
  };
}

function selectCard(wordItem) {
  state.selectedCardId = state.selectedCardId === wordItem.id ? null : wordItem.id;
  if (wordItem.verbBase) state.selectedVerbBase = wordItem.verbBase;
  renderBank();
}

function placeSelectedCard(index) {
  if (!state.selectedCardId) return;
  const wordItem = findWordById(state.selectedCardId);
  if (!wordItem) return;
  placeWord(index, wordItem);
}

function placeWord(index, wordItem) {
  const previousSlots = getSlots();
  const slotType = getSlots()[index];
  state.placed[index] = { ...wordItem, expectedSlot: slotType };
  if (wordItem.verbBase) state.selectedVerbBase = wordItem.verbBase;
  state.selectedCardId = null;
  reconcilePlaced(previousSlots, getSlots());
  render();
}

function findWordById(id) {
  const uniqueSlots = [...new Set(getSlots())];
  return uniqueSlots.flatMap(getWordsForSlot).find((wordItem) => wordItem.id === id);
}

function isCardUsed(id) {
  return Object.values(state.placed).some((item) => item.id === id);
}

function handleDragStart(event, wordItem) {
  event.dataTransfer.setData("text/plain", wordItem.id);
  event.dataTransfer.effectAllowed = "move";
  if (wordItem.verbBase) state.selectedVerbBase = wordItem.verbBase;
}

function handleDragOver(event) {
  event.preventDefault();
  event.currentTarget.classList.add("is-over");
}

function handleDragLeave(event) {
  event.currentTarget.classList.remove("is-over");
}

function handleDrop(event) {
  event.preventDefault();
  const slot = event.currentTarget;
  const wordItem = findWordById(event.dataTransfer.getData("text/plain"));
  if (wordItem) placeWord(Number(slot.dataset.index), wordItem);
  clearDropState();
}

function startPointerDrag(event, wordItem) {
  if (event.pointerType === "mouse") return;
  event.preventDefault();
  event.stopPropagation();
  const source = event.currentTarget;
  source.setPointerCapture(event.pointerId);

  const ghost = source.cloneNode(true);
  ghost.classList.add("drag-ghost");
  document.body.append(ghost);

  state.drag = { wordItem, ghost, pointerId: event.pointerId };
  moveGhost(event);

  source.addEventListener("pointermove", movePointerDrag);
  source.addEventListener("pointerup", endPointerDrag, { once: true });
  source.addEventListener("pointercancel", cancelPointerDrag, { once: true });
}

function movePointerDrag(event) {
  if (!state.drag || state.drag.pointerId !== event.pointerId) return;
  moveGhost(event);
  const slot = getSlotFromPoint(event.clientX, event.clientY);
  clearDropState();
  if (slot) slot.classList.add("is-over");
}

function endPointerDrag(event) {
  if (!state.drag) return;
  event.preventDefault();
  const slot = getSlotFromPoint(event.clientX, event.clientY);
  if (slot) placeWord(Number(slot.dataset.index), state.drag.wordItem);
  cancelPointerDrag();
}

function cancelPointerDrag() {
  state.drag?.ghost.remove();
  state.drag = null;
  clearDropState();
}

function moveGhost(event) {
  state.drag.ghost.style.left = `${event.clientX}px`;
  state.drag.ghost.style.top = `${event.clientY}px`;
}

function getSlotFromPoint(x, y) {
  const element = document.elementFromPoint(x, y);
  return element?.closest?.(".slot") ?? null;
}

function clearDropState() {
  document.querySelectorAll(".slot").forEach((slot) => slot.classList.remove("is-over"));
}

function checkAnswer() {
  const slots = getSlots();
  let correctCount = 0;

  els.sentenceBoard.querySelectorAll(".slot").forEach((slot) => {
    const index = Number(slot.dataset.index);
    const result = validateSlot(index, slots[index]);
    slot.classList.toggle("is-correct", result);
    slot.classList.toggle("is-wrong", !result);
    if (result) correctCount += 1;
  });

  els.feedback.textContent =
    correctCount === slots.length ? "Great work!" : `${correctCount}/${slots.length} correct`;
}

function validateSlot(index, slotType) {
  const item = state.placed[index];
  if (!item) return false;
  if (item.slot !== slotType) return false;

  if (state.practice === "challenge") {
    return item.value === state.goal.parts[index]?.value;
  }

  return validateGrammar(index, item);
}

function validateGrammar(index, item) {
  const slots = getSlots();
  const subject = getPlacedBySlot("subject");
  const verb = getSelectedVerb();

  if (item.slot === "complement" && verb) {
    return verb.complements.includes(item.value);
  }

  if (item.slot === "verbPresent" && subject) {
    const group = findSubject(subject.value)?.group;
    return group === "third" ? item.value.endsWith("s") : !item.value.endsWith("s");
  }

  if (item.slot === "auxDo" && subject) {
    const group = findSubject(subject.value)?.group;
    return group === "third" ? item.value === "does" : item.value === "do";
  }

  if (item.slot === "be" && subject) {
    return item.value === beForSubject(subject.value);
  }
  if (item.slot === "pastbe" && subject) {
    return item.value === pastBeForSubject(subject.value);
  } 

  if (["shortDid", "shortDo", "shortBe", "shortPastBe"].includes(item.slot)) {
    const answer = getPlacedBySlot("answer")?.value;
    if (!subject || !answer) return true;
    return shortAuxIsValid(item.value, subject.value, answer);
  }

  if (item.slot === "answer") {
    const shortSlot = slots.find((slot) => slot.startsWith("short"));
    const shortAux = getPlacedBySlot(shortSlot)?.value;
    return shortAux ? shortAuxIsValid(shortAux, subject?.value, item.value) : true;
  }

  return true;
}

function shortAuxIsValid(aux, subjectText, answer) {
  if (!subjectText || !answer) return false;
  const isYes = answer === "Yes,";

  if (state.tense === "simplePast") return isYes ? aux === "did" : aux === "didn't";
  if (state.tense === "simplePresent") {
    const third = findSubject(subjectText)?.group === "third";
    if (isYes) return third ? aux === "does" : aux === "do";
    return third ? aux === "doesn't" : aux === "don't";
  };
  if (state.tense === "pastProgressive"){
    const affirmative = pastBeForSubject(subjectText);
  const negative = negativePastBeForSubject(subjectText);
  return isYes ? aux === affirmative : aux === negative;
  };

  const affirmative = beForSubject(subjectText);
  const negative = negativeBeForSubject(subjectText);
  return isYes ? aux === affirmative : aux === negative;
}

function newGoal() {
  const tense = TENSES[state.tense];
  const goalWh = state.mode === "wh" ? randomFrom(["what", "where", "when", "why", "how"]) : "";
  const slots =
    state.mode === "wh" && goalWh
      ? tense.slots[state.mode].filter((slot) => {
          if (goalWh === "what") return slot !== "complement";
          if (goalWh === "when") return slot !== "time";
          return true;
        })
      : tense.slots[state.mode];
  const level = LEVEL_LIMITS[state.level];
  const subject = randomFrom(SUBJECTS.slice(0, level.subjects));
  const verb = randomFrom(VERBS.slice(0, level.verbs));
  const answer = Math.random() > 0.5 ? "Yes," : "No,";

  const parts = slots.map((slot) => {
    const value = goalValue(slot, subject, verb, answer, goalWh);
    return word(slot, value, value, verbSlotHasVerb(slot) ? verb.base : "");
  });

  state.goal = {
    parts,
    display: formatSentence(parts.map((part) => part.text), state.mode),
  };
}

function goalValue(slot, subject, verb, answer, goalWh = "") {
  const values = {
    subject: subject.text,
    verbPast: verb.past,
    verbPresent: subject.group === "third" ? verb.present3 : verb.base,
    verbBase: verb.base,
    verbIng: verb.ing,
    complement: randomFrom(verb.complements),
    time: randomFrom(TENSES[state.tense].time),
    auxDid: "did",
    auxDo: subject.group === "third" ? "does" : "do",
    negative: "not",
    wh: goalWh || randomFrom(["what", "where", "when", "why", "how"]),
    be: beForSubject(subject.text),
    pastbe: pastBeForSubject(subject.text),
    goingTo: "going to",
    answer,
    shortDid: answer === "Yes," ? "did" : "didn't",
    shortDo: answer === "Yes," ? (subject.group === "third" ? "does" : "do") : subject.group === "third" ? "doesn't" : "don't",
    shortBe: answer === "Yes," ? beForSubject(subject.text) : negativeBeForSubject(subject.text),
    shortPastBe: answer === "Yes," ? pastBeForSubject(subject.text) : negativePastBeForSubject(subject.text),
  };
  return values[slot];
}

function formatSentence(parts, mode) {
  const sentence = parts.join(" ");
  if (mode === "wh" || mode === "yesno") return `${capitalize(sentence)}?`;
  if (mode === "short") return `${sentence}.`;
  return `${capitalize(sentence)}.`;
}

function resetBoard() {
  state.placed = {};
  state.selectedCardId = null;
  state.selectedVerbBase = null;
  state.shuffleKey = Math.random();
}

function getSelectedVerb() {
  const verbBase =
    state.selectedVerbBase ||
    Object.values(state.placed).find((item) => item.verbBase)?.verbBase ||
    state.goal?.parts.find((part) => part.verbBase)?.verbBase;
  return VERBS.find((verb) => verb.base === verbBase);
}

function getPlacedBySlot(slotType) {
  return Object.values(state.placed).find((item) => item.slot === slotType);
}

function findSubject(text) {
  return SUBJECTS.find((subject) => subject.text === text);
}

function beForSubject(subjectText) {
  const group = findSubject(subjectText)?.group;
  if (group === "first") return "am";
  if (group === "third") return "is";
  return "are";
}

function negativeBeForSubject(subjectText) {
  const group = findSubject(subjectText)?.group;
  if (group === "first") return "am not";
  if (group === "third") return "isn't";
  return "aren't";
}
function pastBeForSubject(subjectText){
  const group = findSubject(subjectText)?.group;
  if (group === "plural") return "were";
  return "was";
}

function negativePastBeForSubject(subjectText) {
  const group = findSubject(subjectText)?.group;
  if (group === "plural") return "weren't";
  return "wasn't";
}
function verbSlotHasVerb(slot) {
  return ["verbPast", "verbPresent", "verbBase", "verbIng"].includes(slot);
}

function categoryClass(slotType) {
  if (slotType.includes("verb")) return "verb";
  if (slotType.startsWith("aux")) return "auxiliary";
  if (slotType.startsWith("short")) return "auxiliary";
  if (slotType === "goingTo") return "auxiliary";
  return slotType;
}

function shuffleStable(items, key) {
  return [...items].sort((first, second) => hash(`${key}:${first.id ?? first}`) - hash(`${key}:${second.id ?? second}`));
}

function hash(text) {
  let value = 0;
  for (let index = 0; index < text.length; index += 1) {
    value = (value << 5) - value + text.charCodeAt(index);
    value |= 0;
  }
  return value;
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function capitalize(text) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

function currentWhValue() {
  const placedWh = getPlacedBySlot("wh")?.value;
  if (placedWh) return placedWh;
  if (state.practice === "challenge") {
    return state.goal?.parts.find((part) => part.slot === "wh")?.value || "";
  }
  return "";
}

function getStructureText(tense) {
  let structure = tense.structure[state.mode];
  if (state.hideTime) {
    structure = structure.replace(/ ?\+ [^+]*time/, "");
  }
  if (state.mode === "wh") {
    const whValue = currentWhValue();
    if (whValue === "what") {
      structure = structure.replace(" + complement", "");
    }
    if (whValue === "when") {
      structure = structure.replace(/ \+ [a-z]+ time/, "");
    }
  }
  return structure;
}

function reconcilePlaced(previousSlots, nextSlots) {
  if (previousSlots.join("|") === nextSlots.join("|")) return;
  const items = Object.values(state.placed);
  state.placed = {};
  nextSlots.forEach((slotType, index) => {
    const item = items.find((candidate) => candidate.slot === slotType);
    if (item) state.placed[index] = item;
  });
}

init();
