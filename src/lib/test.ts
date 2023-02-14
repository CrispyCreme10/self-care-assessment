import { Category, Form } from "./types";

interface LineItem {
  description: string
}

interface InfoSection {
  categoryName: string,
  lineItems: LineItem[]
}

const lineItems1: LineItem[] = [
  {
    description: "Eat healthy foods"
  },
  {
    description: "Take care of personal hygiene"
  },
  {
    description: "Exercise"
  },
  {
    description: "Wear clothes that help me feel good about myself"
  },
  {
    description: "Eat regularly"
  },
  {
    description: "Participate in fun activities (e.g. walking, swimming, dancing, sports)"
  },
  {
    description: "Get enough sleep"
  },
  {
    description: "Go to preventative medical appointments (e.g. checkups, teeth cleanings)"
  },
  {
    description: "Rest when sick"
  },
  {
    description: "Overall physical self-care"
  },
];

const lineItems2: LineItem[] = [
  {
    description: "Take time off from work, school, and other obligations"
  },
  {
    description: "Participate in hobbies"
  },
  {
    description: "Get away from distractions (e.g. phone, email)"
  },
  {
    description: "Learn new things, unrelated to work or school"
  },
  {
    description: "Express my feelings in a healthy way (e.g. talking, creating art, journaling)"
  },
  {
    description: "Recognize my own strengths and achievements"
  },
  {
    description: "Go on vacations or day-trips"
  },
  {
    description: "Do something comforting (e.g. re-watch a favorite movie, take a long bath)"
  },
  {
    description: "Find reasons to laugh"
  },
  {
    description: "Talk about my problems"
  },
  {
    description: "Overall psychological and emotional self-care"
  },
];

const lineItems3: LineItem[] = [
  {
    description: "Spend time with people who I like"
  },
  {
    description: "Call or write to friends and family who are far away"
  },
  {
    description: "Have stimulating conversations"
  },
  {
    description: "Meet new people"
  },
  {
    description: "Spend time alone with my romantic partner"
  },
  {
    description: "Ask others for help, when needed"
  },
  {
    description: "Do enjoyable activities with other people"
  },
  {
    description: "Have intimate time with my romantic partner"
  },
  {
    description: "Keep in touch with old friends"
  },
  {
    description: "Overall social self-care"
  },
];

const lineItems4: LineItem[] = [
  {
    description: "Spend time in nature"
  },
  {
    description: "Meditate"
  },
  {
    description: "Pray"
  },
  {
    description: "Recognize the things that give meaning to my"
  },
  {
    description: "life Act in accordance with my morals and values"
  },
  {
    description: "Set aside time for thought and reflection"
  },
  {
    description: "Participate in a cause that is important to me"
  },
  {
    description: "Appreciate art that is impactful to me (e.g. music, film, literature)"
  },
  {
    description: "Overall spiritual self-care"
  },
];

const lineItems5: LineItem[] = [
  {
    description: "Improve my professional skills"
  },
  {
    description: "Say \"no\" to excessive new responsibilities"
  },
  {
    description: "Take on projects that are interesting or rewarding"
  },
  {
    description: "Learn new things related to my profession"
  },
  {
    description: "Make time to talk and build relationships with colleagues"
  },
  {
    description: "Take breaks during work"
  },
  {
    description: "Maintain balance between my professional and personal life"
  },
  {
    description: "Keep a comfortable workspace that allows me to be successful"
  },
  {
    description: "Advocate for fair pay, benefits, and other needs"
  },
  {
    description: "Overall professional self-care"
  },
];

const infoSections: InfoSection[] = [
  { categoryName: "Physical Self-Care", lineItems: lineItems1 },
  { categoryName: "Psychological / Emotional Self-Care", lineItems: lineItems2 },
  { categoryName: "Social Self-Care", lineItems: lineItems3 },
  { categoryName: "Spiritual Self-Care", lineItems: lineItems4 },
  { categoryName: "Professional Self-Care", lineItems: lineItems5 },
]

// const createCategory = (infoSection: InfoSection, categoryId: number, isRandom: boolean): Category => {
//   return {
//     CategoryId: -1,
//     CreateAt: new Date,
//     Category: infoSection.categoryName,
//     questions: infoSection.lineItems.map((lineItem, index) => {
//       return {
//         id: index,
//         createAt: new Date(),
//         categoryId: categoryId,
//         text: lineItem.description,
//         rank: isRandom ? Math.floor(Math.random() * (3 - 1) + 1) : 0, // 0-3
//         star: isRandom ? Math.random() < 0.5 : false // true or false
//       }
//     })
//   }
// }

// const generateRandomDate = () => {
//   const rndDay = Math.floor(Math.random() * (28 - 1) + 1);
//   const rndMonth = Math.floor(Math.random() * (12 - 1) + 1);
//   const rndYear = Math.floor(Math.random() * (2022 - 2000) + 2000);

//   return new Date(rndYear, rndMonth, rndDay);
// }

// const generateForm = (createAt: Date | null, isRandom: boolean): Form => {
//   return {
//     FormId: -1,
//     CreateAt: createAt,
//     Categories: infoSections.map((infoSection, index) => {
//       return createCategory(infoSection, index, isRandom);
//     })
//   }
// }

// export const generateRandomAssessment = () => {
//   return generateForm(generateRandomDate(), true);
// }

// export const generateBlankAssessment = () => {
//   return generateForm(null, false);
// }