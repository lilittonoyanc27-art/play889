import { TheoryPoint, PhraseQuestion } from './types';

export const THEORY_POINTS: TheoryPoint[] = [
  {
    title: "Quedar (Հանդիպել, Մնալ, Սազել)",
    explanation: "Quedar-ը սովորական բայ է, որն ունի մի քանի իմաստ. 1. Հանդիպել (պայմանավորվել), 2. Մնալ (որպես քանակ), 3. Սազել (հագուստի մասին):",
    example: "Quedamos a las 5. Me queda un euro. Te queda bien.",
    translation: "Հանդիպում ենք ժամը 5-ին: Ինձ մնացել է մեկ եվրո: Քեզ սազում է:"
  },
  {
    title: "Quedarse (Մնալ մի տեղում, Վերցնել)",
    explanation: "Quedarse-ն անդրադարձ բայ է (reflexive). 1. Մնալ ինչ-որ տեղում (տանը, հյուրանոցում), 2. Իրեն պահել (վերցնել):",
    example: "Me quedo en casa. Se queda con el libro.",
    translation: "Ես մնում եմ տանը: Նա վերցնում է (իրեն է պահում) գիրքը:"
  },
  {
    title: "Quedar (Խոնարհում - Presente)",
    explanation: "Yo quedo\nTú quedas\nÉl / Ella / Usted queda\nNosotros / Nosotras quedamos\nVosotros / Vosotras quedáis\nEllos / Ellas / Ustedes quedan",
    example: "Nosotros quedamos a las seis.",
    translation: "Մենք հանդիպում ենք ժամը վեցին:"
  },
  {
    title: "Quedarse (Խոնարհում - Presente)",
    explanation: "Yo me quedo\nTú te quedas\nÉl / Ella / Usted se queda\nNosotros / Nosotras nos quedamos\nVosotros / Vosotras os quedáis\nEllos / Ellas / Ustedes se quedan",
    example: "Yo me quedo en casa hoy.",
    translation: "Ես այսօր մնում եմ տանը:"
  }
];

export const QUEDAR_QUESTIONS: PhraseQuestion[] = [
  { id: 1, sentence: "Nosotros ___ en el parque a las seis.", translation: "Մենք հանդիպում ենք այգում ժամը վեցին:", options: ["quedamos", "nos quedamos", "quedas"], correctAnswer: "quedamos" },
  { id: 2, sentence: "Yo ___ en casa hoy.", translation: "Ես այսօր մնում եմ տանը:", options: ["me quedo", "quedo", "te quedas"], correctAnswer: "me quedo" },
  { id: 3, sentence: "Esa camisa te ___ muy bien.", translation: "Այդ վերնաշապիկը քեզ շատ լավ է սազում:", options: ["queda", "quedan", "se queda"], correctAnswer: "queda" },
  { id: 4, sentence: "Solo me ___ un euro.", translation: "Ինձ մնացել է միայն մեկ եվրո:", options: ["queda", "quedo", "quedamos"], correctAnswer: "queda" },
  { id: 5, sentence: "Ellos ___ con el perro.", translation: "Նրանք մնում են (իրենց մոտ են պահում) շանը:", options: ["se quedan", "quedan", "nos quedamos"], correctAnswer: "se quedan" },
  { id: 6, sentence: "¿Dónde ___ mañana?", translation: "Որտե՞ղ ենք հանդիպում վաղը:", options: ["quedamos", "nos quedamos", "quedáis"], correctAnswer: "quedamos" },
  { id: 7, sentence: "Tú ___ en el hotel.", translation: "Դու մնում ես հյուրանոցում:", options: ["te quedas", "quedas", "se queda"], correctAnswer: "te quedas" },
  { id: 8, sentence: "Mis amigos ___ para estudiar.", translation: "Ընկերներս հանդիպում են սովորելու համար:", options: ["quedan", "se quedan", "quedamos"], correctAnswer: "quedan" },
  { id: 9, sentence: "Ella ___ sorprendida.", translation: "Նա մնաց (եղավ) զարմացած:", options: ["se queda", "queda", "me quedo"], correctAnswer: "se queda" },
  { id: 10, sentence: "Nosotros ___ con la duda.", translation: "Մենք մնացինք կասկածանքով:", options: ["nos quedamos", "quedamos", "quedan"], correctAnswer: "nos quedamos" },
  { id: 11, sentence: "¿Te ___ lejos la tienda?", translation: "Խանութը քեզանից հեռո՞ւ է գտնվում (մնում):", options: ["queda", "quedas", "se queda"], correctAnswer: "queda" },
  { id: 12, sentence: "Él ___ en Madrid un mes.", translation: "Նա մնում է Մադրիդում մեկ ամիս:", options: ["se queda", "queda", "me quedo"], correctAnswer: "se queda" }
];
