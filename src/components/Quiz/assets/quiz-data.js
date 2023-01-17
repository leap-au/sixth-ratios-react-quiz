const quizData = {
  title: 'LEAPing into Mathematics: Ratios and Proportional Relationships',
  description: 'Ratios and Proportional Relationships is a branch of mathematics that deals with analyzing proportional relationships and using them to solve real-world and mathematical problems.  This interactive, multiple-choice quiz is great to test your ratios and proportional relatinships knowledge in a fun way.  Press START to LEAP into the fun!',
  img: 'leap-orange-navy-brand.png',
  questions: [
    {
      id: 1,
      text: 'Ratios are _______',
	  img: 'question-example.jpg',
      alternatives: [
        {
          id: 1,
          text: 'useless',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'fractions',
          isCorrect: true,
        },
		{
          id: 3,
          text: 'colorful',
          isCorrect: false,
        },
		{
          id: 4,
          text: 'happy',
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: 'A class has 12 boys and 9 girls.  What is the ratio of boys to girls?',
      alternatives: [
        {
          id: 1,
          text: '12/9 or 4/3',
          isCorrect: true,
        },
        {
          id: 2,
          text: '9/12 or 3/4',
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: 'What is the ratio of squares to triangles?',
      img: 'question-example-2.jpg',
      alternatives: [
        {
          id: 1,
          text: '3:2',
          isCorrect: false,
        },
        {
          id: 2,
          text: '2:3',
          isCorrect: false,
        },
        {
          id: 3,
          text: '2:6',
          isCorrect: true,
        },
        {
          id: 4,
          text: '6:2',
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: 'A farmer has 20 cows and 30 chickens.  What is the ratio of cows to chickens?',
      img: 'question-example.jpg',
      alternatives: [
        {
          id: 1,
          text: '30/20 or 3/2',
          isCorrect: false,
        },
        {
          id: 2,
          text: '20/30 or 2/3',
          isCorrect: true,
        },
      ],
    },
	{
      id: 5,
      text: 'What is the ratio 2:3 equivalent to:',
      alternatives: [
        {
          id: 1,
          text: '4:3',
          isCorrect: false,
        },
        {
          id: 2,
          text: '4:5',
          isCorrect: false,
        },
		{
          id: 3,
          text: '4:6',
          isCorrect: true,
        },
		{
          id: 4,
          text: '4:7',
          isCorrect: false,
        },
      ],
    },
	{
      id: 6,
      text: 'What is the ratio 1:5 equivalent to:',
      alternatives: [
        {
          id: 1,
          text: '2:10',
          isCorrect: false,
        },
        {
          id: 2,
          text: '3:15',
          isCorrect: false,
        },
		{
          id: 3,
          text: '4:20',
          isCorrect: false,
        },
		{
          id: 4,
          text: 'All of the above',
          isCorrect: true,
        },
      ],
    },
	{
      id: 7,
      text: 'Which of the ratios are proportional to each other:',
      alternatives: [
        {
          id: 1,
          text: '1:2 = 4:8',
          isCorrect: true,
        },
        {
          id: 2,
          text: '1:3 = 2:5',
          isCorrect: false,
        },
		{
          id: 3,
          text: '2:3 = 3:6',
          isCorrect: false,
        },
		{
          id: 4,
          text: '2:5 = 4:9',
          isCorrect: false,
        },
      ],
    },
	{
      id: 8,
      text: 'Which of the ratios are proportional to each other:',
      alternatives: [
        {
          id: 1,
          text: '3:2 = 5:7',
          isCorrect: false,
        },
        {
          id: 2,
          text: '3:4 = 8:9',
          isCorrect: false,
        },
		{
          id: 3,
          text: '4:2 = 6:4',
          isCorrect: false,
        },
		{
          id: 4,
          text: '4:5 = 8:10',
          isCorrect: true,
        },
      ],
    },
	{
      id: 9,
      text: 'If it takes 2 cups of oil to cook 1 pot of soup, how many cups of oil is needed to cook 3 pots of soup?',
      alternatives: [
        {
          id: 1,
          text: '2',
          isCorrect: false,
        },
        {
          id: 2,
          text: '4',
          isCorrect: false,
        },
		{
          id: 3,
          text: '6',
          isCorrect: true,
        },
		{
          id: 4,
          text: '8',
          isCorrect: false,
        },
      ],
    },
	{
      id: 10,
      text: 'If 3/4 = x/16, then x = ?',
      alternatives: [
        {
          id: 1,
          text: '12',
          isCorrect: true,
        },
        {
          id: 2,
          text: '14',
          isCorrect: false,
        },
		{
          id: 3,
          text: '16',
          isCorrect: false,
        },
		{
          id: 4,
          text: '18',
          isCorrect: false,
        },
      ],
    },
  ],
  results: [
    {
      id: 1,
      range: {
        from: 0,
        to: 6,
      },
      title: 'You only got a few questions right.',
      description:
        'Please restart the Quiz to achieve 70% or higher.',
	  img: 'result-example.jpg',
    },
	{
      id: 2,
      range: {
        from: 7,
        to: 7,
      },
      title: 'Congratulations, you scored 70%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },

	{
      id: 3,
      range: {
        from: 8,
        to: 8,
      },
      title: 'Congratulations, you scored 80%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
    {
      id: 4,
      range: {
        from: 9,
        to: 9,
      },
      title: 'Congratulations, you scored 90%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
    {
      id: 5,
      range: {
        from: 10,
        to: 10,
      },
      title: 'Congratulations, you got everything right!',
      description:
        'Please accelerate to the next quiz.',
      img: 'result-example.jpg',
    },
  ],
};

export default quizData;
