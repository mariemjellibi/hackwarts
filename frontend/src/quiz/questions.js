const questions = [
    {
      id: 1,
      question: "What does this command show?",
      code: 'print("Hello, World!")',
      options: [
        { id: "A", text: "🎉 Hello, World!" },
        { id: "B", text: "🙊 “Hello, World!”" },
      ],
      correct: "A",
    },
    {
      id: 2,
      question: "Solve this math puzzle:",
      code: "2 + 2 * 2",
      options: [
        { id: "A", text: "🧩 8" },
        { id: "B", text: "🎈 6" },
      ],
      correct: "B",
    },
    {
      id: 3,
      question: "How do you make a variable in JavaScript?",
      code: 'let x = 5;',
      options: [
        { id: "A", text: "🌟 let" },
        { id: "B", text: "🛑 variable" },
      ],
      correct: "A",
    },
  ];
  
  export default questions;
  