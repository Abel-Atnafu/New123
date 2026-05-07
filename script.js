// ================================================================
//  OPEN WHEN — Gift for Naomi
//
//  TO PERSONALISE:
//  1. Edit the `letter` arrays below — write in your own words
//  2. Each string in the array becomes its own paragraph
//  3. The `photo` path points to the matching image in /images/
// ================================================================

const envelopes = [
  {
    label: "Open when you're sad",
    photo: "images/01.jpg",
    letter: [
      "Hey, you.",
      "I see you. I know today is one of those days, and I want you to know something important: it's okay. You're allowed to feel this. You don't have to hold it together all the time.",
      "On the days when everything feels too heavy, I want to be the thing that makes it a little lighter. Even when I can't be there in person, I'm thinking about you — I promise.",
      "You are not your sadness. You are the person who keeps going even when it's hard, who smiles through things most people wouldn't, who loves deeply and without apology.",
      "Take your time. I'm not going anywhere. And when you're ready, I'll be right here — always."
    ]
  },
  {
    label: "Open when you miss me",
    photo: "images/02.jpg",
    letter: [
      "I miss you too.",
      "More than you probably know. Every time my phone lights up, there's a part of me that hopes it's you. Every song, every stupid thing that happens in my day — my first thought is still you.",
      "Missing someone hurts, but it's also proof of something real. It means what we have matters enough to feel across any distance.",
      "So let yourself miss me — but know that every moment we're apart is just time we're saving up to spend together later.",
      "I'll see you soon. And when I do, I'm not letting go for a while."
    ]
  },
  {
    label: "Open when you need to know you're loved",
    photo: "images/03.jpg",
    letter: [
      "You are so, so loved.",
      "Not in a small, quiet way. In a full, certain, no-doubts-about-it way. The kind of love that doesn't need a reason or a perfect moment — it just is.",
      "I love the way you carry yourself. The way you laugh when something genuinely catches you off guard. The way you care about people even when they don't always deserve it.",
      "You don't have to earn it. You don't have to do anything. You are loved — right now, exactly as you are.",
      "I choose you. Every single day."
    ]
  },
  {
    label: "Open when you feel beautiful",
    photo: "images/04.jpg",
    letter: [
      "Good — because you are.",
      "I don't say this lightly. You are genuinely, genuinely beautiful. Not just in a way that photographs well (though absolutely that too), but in a way that makes people stop.",
      "The way you look when you don't know anyone is watching. The way your eyes light up when you're excited about something. The way you carry yourself — like you belong everywhere you walk into.",
      "Hold onto this feeling. You deserve to feel like this all the time. And on the days you can't find it — come back here.",
      "I see you. And what I see is stunning."
    ]
  },
  {
    label: "Open when it's late and you can't sleep",
    photo: "images/05.jpg",
    naturalSize: true,
    letter: [
      "Hey. Put your phone down after this — I mean it.",
      "I know what nighttime does. It makes everything feel louder. Worries that are manageable at noon become enormous at 2am. You're not broken for this — it's just quiet enough for your thoughts to show up.",
      "Here's what I want you to do: think of one thing that made you genuinely happy this week. Just one. Hold it. Let it be the last thing before you close your eyes.",
      "You're safe. Tomorrow is still coming. And I'm thinking about you right now — even from wherever I am.",
      "Sleep well, beautiful. You need it and you deserve it."
    ]
  },
  {
    label: "Open when you're having a bad day",
    photo: "images/06.jpg",
    naturalSize: true,
    letter: [
      "Ugh. I'm sorry. Bad days are the worst.",
      "Whatever happened today — the frustration, the unfairness, the exhaustion — it's valid. All of it. You don't have to be graceful about a bad day.",
      "But here's something true: you have gotten through every single bad day you've ever had. Every one. Your track record for surviving hard days is perfect.",
      "Tonight: do something that's just for you. Something small that makes you feel good. You've earned it.",
      "Tomorrow is a clean slate. And I'll be rooting for you through all of them."
    ]
  },
  {
    label: "Open when you need a laugh",
    photo: "images/07.jpg",
    letter: [
      "First: look at that photo. Go on.",
      "You are ridiculous. Completely, totally ridiculous. And I mean that as the highest compliment.",
      "You know what makes me laugh every time I think about it? You. The faces you make. The way you commit to a joke even when it's not landing. The fact that you laugh at your own stories before you even finish them.",
      "You are so much fun to be around. The world is better when you're being loud in it.",
      "Okay. Now close this and go find something that makes you actually laugh out loud. You deserve it today."
    ]
  },
  {
    label: "Open when you're overthinking",
    photo: "images/08.jpg",
    letter: [
      "Hey — slow down.",
      "I know that brain of yours. It's brilliant and it never stops. Right now it's probably running through every scenario, every possible outcome, every version of what could go wrong.",
      "But most of what you're worried about isn't happening right now. It's a future that may never arrive. And even if some of it does — you've survived hard things before. You will again.",
      "Three slow breaths. Actually do it. I'll wait.",
      "You don't have to figure everything out tonight. Some things will only become clear with time, and that's allowed. You are going to be alright. You always, always are."
    ]
  },
  {
    label: "Open when you think I'm not thinking about you",
    photo: "images/09.jpg",
    letter: [
      "I am.",
      "Right now — honestly — I am. I think about you constantly. It's a little embarrassing how often you cross my mind.",
      "Every random thing reminds me of you. I hear a song, I think of you. I see something funny, I want to send it to you. I have a good day, you're the first person I want to tell.",
      "You have taken up permanent residence in my head and I have absolutely no complaints about this.",
      "So whenever that quiet doubt creeps in — come back here and read this again: I am thinking about you. I am always thinking about you."
    ]
  },
  {
    label: "Open when you just want to smile",
    photo: "images/10.jpg",
    letter: [
      "Look at how far you've come.",
      "There was a version of you — small and wide-eyed and full of wonder — who had no idea what was ahead. Who couldn't imagine the person she'd grow into.",
      "And here you are.",
      "I want you to take a moment and actually feel good about that. You turned out really, really well. You are someone worth knowing. Someone worth loving. Someone who makes ordinary days feel like something more.",
      "I hope this made you smile. You deserve every good thing. All of it."
    ]
  },
  {
    label: "Open when you need motivation",
    photo: "images/11.jpg",
    letter: [
      "You've got this.",
      "I know it feels hard. I know the gap between where you are and where you want to be can feel enormous. But the people who close that gap aren't always the most talented — they're the ones who keep showing up.",
      "You are capable of so much more than you give yourself credit for. I've watched you push through things that would have broken someone else, and you came out the other side still standing.",
      "One step. Just one. That's all today requires.",
      "Do the thing. Even badly. Even slowly. Just start. I believe in you — not because I have to, but because I've seen what you're made of."
    ]
  },
  {
    label: "Open when you want to feel special",
    photo: "images/12.jpg",
    letter: [
      "Then feel this:",
      "Out of everyone in the world, you are the one I chose. Not by accident, not out of convenience — by choice, over and over again, every single day.",
      "You make my life better just by being in it. The way you see things, the way you love people, the way you show up — it's rare. You are rare.",
      "There is no one exactly like you. There never will be. And I am quietly, genuinely grateful every single day that I get to know you.",
      "You are not just someone I love. You are someone I admire. Feel special — because you are."
    ]
  }
];

// ================================================================
//  TILT VALUES — slight rotation for each envelope
// ================================================================
const TILTS = [-2, 1.5, -1, 2.5, -2.5, 1, -1.5, 2, -3, 0.5, -0.5, 3];

// ================================================================
//  PETALS
// ================================================================
function createPetals() {
  const container = document.getElementById('petals');
  const symbols = ['❀', '✿', '❁', '✾'];

  for (let i = 0; i < 14; i++) {
    const el = document.createElement('span');
    el.className = 'petal';
    el.textContent = symbols[i % symbols.length];
    el.style.left     = `${Math.random() * 100}%`;
    el.style.fontSize = `${9 + Math.random() * 11}px`;
    el.style.animationDuration = `${10 + Math.random() * 14}s`;
    el.style.animationDelay   = `${Math.random() * 14}s`;
    container.appendChild(el);
  }
}

// ================================================================
//  LOCAL STORAGE
// ================================================================
function getOpened() {
  try {
    return new Set(JSON.parse(localStorage.getItem('naomi-opened') || '[]'));
  } catch {
    return new Set();
  }
}

function saveOpened(id) {
  const set = getOpened();
  set.add(id);
  localStorage.setItem('naomi-opened', JSON.stringify([...set]));
}

// ================================================================
//  ENVELOPE GRID
// ================================================================
function buildGrid() {
  const grid   = document.getElementById('grid');
  const opened = getOpened();

  envelopes.forEach((env, i) => {
    const card = document.createElement('div');
    card.className = 'envelope-card';
    card.dataset.id = i;
    card.style.setProperty('--tilt', `${TILTS[i]}deg`);
    card.style.transform = `rotate(${TILTS[i]}deg)`;

    card.innerHTML = `
      <div class="env-flap"></div>
      <div class="env-fold-left"></div>
      <div class="env-fold-right"></div>
      <div class="env-seal">&#9825;</div>
      <div class="env-badge">&#10003;</div>
      <p class="env-label">${env.label}</p>
    `;

    if (opened.has(i)) card.classList.add('is-opened');

    card.addEventListener('click', () => handleClick(i, card));
    grid.appendChild(card);
  });
}

// ================================================================
//  OPEN / CLOSE
// ================================================================
function handleClick(id, card) {
  if (card.classList.contains('is-opening')) return;

  card.classList.add('is-opening');

  setTimeout(() => {
    card.classList.add('is-opened');
    card.classList.remove('is-opening');
    saveOpened(id);
    openLetter(id);
  }, 460);
}

function openLetter(id) {
  const env     = envelopes[id];
  const overlay = document.getElementById('overlay');
  const tag   = document.getElementById('letter-tag');
  const frame = document.getElementById('letter-img-frame');
  const img   = document.getElementById('letter-img');
  const text  = document.getElementById('letter-text');

  tag.textContent = env.label;

  frame.classList.toggle('natural-size', !!env.naturalSize);

  if (env.photo) {
    img.src = env.photo;
    frame.classList.add('has-photo');
    img.onerror = () => { frame.classList.remove('has-photo'); };
  } else {
    frame.classList.remove('has-photo');
  }

  text.innerHTML = env.letter.map(p => `<p>${p}</p>`).join('');

  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // scroll letter back to top on reopen
  document.getElementById('letter-wrap').scrollTop = 0;
}

function closeLetter() {
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ================================================================
//  EVENT LISTENERS
// ================================================================
document.getElementById('close-btn').addEventListener('click', closeLetter);

document.getElementById('overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLetter();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLetter();
});

// ================================================================
//  INIT
// ================================================================
createPetals();
buildGrid();
