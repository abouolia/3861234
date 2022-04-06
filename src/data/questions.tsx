export const Questions = [
  {
    question:
      "You're headed to the airport for an early morning flight. What are you wearing?",
    image:
      "https://news.airbnb.com/wp-content/themes/pressbnb/static/tripmatcher_site/assets/images/quiz_questions/icon-01-t.png",
    options: [
      {
        value: "Sweat pants. Duh.",
        personalities: [{ name: "pop_culture_junkie", value: 1 }]
      },
      {
        value: "Security lines be damned, I'm rocking boots.",
        personalities: [{ name: "fashion_guru", value: 1 }]
      },
      {
        value: "Workout clothes, just in case there's a yoga room somewhere.",
        personalities: [
          { name: "nature_lover", value: 0.5 },
          { name: "daredevil", value: 0.5 }
        ]
      },
      {
        value: "Same outfit I was wearing last night. Oops.",
        personalities: [{ name: "scenester", value: 1 }]
      },
      {
        value: "Who cares, as long as it's comfortable.",
        personalities: [
          { name: "change_agent", value: 0.5 },
          { name: "time_traveler", value: 0.5 }
        ]
      }
    ]
  },
  {
    question: "Settling in for a long flight, what movie would you choose?",
    image:
      "https://news.airbnb.com/wp-content/themes/pressbnb/static/tripmatcher_site/assets/images/quiz_questions/icon-02-t.png",
    options: [
      {
        value: "A comedy",
        personalities: [{ name: "pop_culture_junkie", value: 1 }]
      },
      {
        value: "An action movie",
        personalities: [{ name: "daredevil", value: 1 }]
      },
      {
        value: "A documentary",
        personalities: [{ name: "change_agent", value: 1 }]
      },
      {
        value: "A historical drama",
        personalities: [{ name: "time_traveler", value: 1 }]
      },
      { value: "A musical", personalities: [{ name: "maestro", value: 1 }] }
    ]
  },
  {
    question: "Which best describes your perfect first date?",
    image:
      "https://news.airbnb.com/wp-content/themes/pressbnb/static/tripmatcher_site/assets/images/quiz_questions/icon-03-t.png",
    options: [
      {
        value: "A 5-course dinner",
        personalities: [{ name: "bon_vivant", value: 1 }]
      },
      {
        value: "Hiking and smoothies",
        personalities: [{ name: "nature_lover", value: 1 }]
      },
      {
        value: "Cocktails and dancing",
        personalities: [
          { name: "scenester", value: 0.5 },
          { name: "maestro", value: 0.5 }
        ]
      },
      {
        value: "Catching a movie",
        personalities: [{ name: "pop_culture_junkie", value: 1 }]
      },
      {
        value: "Browsing an art show",
        personalities: [{ name: "artiste", value: 1 }]
      }
    ]
  },
  // {
  //   question: "Nature makes me…",
  //   image:
  //     "https://news.airbnb.com/wp-content/themes/pressbnb/static/tripmatcher_site/assets/images/quiz_questions/icon-04-t.png",
  //   options: [
  //     {
  //       value: "Feel so alive",
  //       personalities: [
  //         { name: "nature_lover", value: 0.5 },
  //         { name: "daredevil", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "Itchy",
  //       personalities: [
  //         { name: "scenester", value: 0.5 },
  //         { name: "maestro", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "Inspired",
  //       personalities: [
  //         { name: "artiste", value: 0.5 },
  //         { name: "change_agent", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "Meh, sneakers aren’t my thing",
  //       personalities: [{ name: "fashion_guru", value: 1 }]
  //     },
  //     { value: "Hungry!", personalities: [{ name: "bon_vivant", value: 0.5 }] }
  //   ]
  // },
  // {
  //   question: "Pick one item for your bucket list",
  //   image:
  //     "https://news.airbnb.com/wp-content/themes/pressbnb/static/tripmatcher_site/assets/images/quiz_questions/icon-05-t.png",
  //   options: [
  //     {
  //       value: "Hiking Machu Picchu",
  //       personalities: [
  //         { name: "daredevil", value: 0.5 },
  //         { name: "nature_lover", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "Seeing the Louvre",
  //       personalities: [
  //         { name: "artiste", value: 0.5 },
  //         { name: "time_traveler", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "Crashing a Hollywood premiere",
  //       personalities: [
  //         { name: "pop_culture_junkie", value: 0.5 },
  //         { name: "fashion_guru", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "Going backstage with your favorite band",
  //       personalities: [{ name: "maestro", value: 1 }]
  //     },
  //     {
  //       value: "Tasting your way through Italy",
  //       personalities: [{ name: "bon_vivant", value: 1 }]
  //     }
  //   ]
  // },
  // {
  //   question: "Saturdays are for...",
  //   image:
  //     "https://news.airbnb.com/wp-content/themes/pressbnb/static/tripmatcher_site/assets/images/quiz_questions/icon-06-t.png",
  //   options: [
  //     {
  //       value: "Mimosa brunch",
  //       personalities: [{ name: "bon_vivant", value: 1 }]
  //     },
  //     {
  //       value: "Hitting up a flea market",
  //       personalities: [
  //         { name: "fashion_guru", value: 0.5 },
  //         { name: "time_traveler", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "Volunteering",
  //       personalities: [{ name: "change_agent", value: 1 }]
  //     },
  //     {
  //       value: "Sleeping late",
  //       personalities: [{ name: "scenester", value: 1 }]
  //     },
  //     {
  //       value: "Binging on movies",
  //       personalities: [{ name: "pop_culture_junkie", value: 1 }]
  //     }
  //   ]
  // },
  // {
  //   question:
  //     "If you could have dinner with one historical figure, who would it be?",
  //   image:
  //     "https://news.airbnb.com/wp-content/themes/pressbnb/static/tripmatcher_site/assets/images/quiz_questions/icon-07-t.png",
  //   options: [
  //     {
  //       value: "A genius composer",
  //       personalities: [{ name: "maestro", value: 1 }]
  //     },
  //     {
  //       value: "A notorious celebrity",
  //       personalities: [
  //         { name: "scenester", value: 0.5 },
  //         { name: "artiste", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "A famous biologist",
  //       personalities: [{ name: "nature_lover", value: 1 }]
  //     },
  //     {
  //       value: "A decadent socialite",
  //       personalities: [
  //         { name: "bon_vivant", value: 0.5 },
  //         { name: "fashion_guru", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "A game-changing inventor",
  //       personalities: [{ name: "change_agent", value: 1 }]
  //     }
  //   ]
  // },
  // {
  //   question: "What do you never leave home without?",
  //   image:
  //     "https://news.airbnb.com/wp-content/themes/pressbnb/static/tripmatcher_site/assets/images/quiz_questions/icon-08-t.png",
  //   options: [
  //     { value: "A book", personalities: [{ name: "time_traveler", value: 1 }] },
  //     { value: "A scarf", personalities: [{ name: "fashion_guru", value: 1 }] },
  //     {
  //       value: "Sneakers",
  //       personalities: [
  //         { name: "nature_lover", value: 0.5 },
  //         { name: "daredevil", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "A charger, earbuds and my playlist",
  //       personalities: [
  //         { name: "scenester", value: 0.5 },
  //         { name: "maestro", value: 0.5 }
  //       ]
  //     },
  //     {
  //       value: "A camera",
  //       personalities: [
  //         { name: "artiste", value: 0.5 },
  //         { name: "pop_culture_junkie", value: 0.5 }
  //       ]
  //     }
  //   ]
  // }
];
