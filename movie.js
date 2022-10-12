const movies = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Secrets Of Dumbledore',
    image: '/images/Fantastic_Beasts.png',
    genre: 'Adventure, Family, Fantasy',
    starring:
      ' Alison Sudol, Callum Turner, Dan Fogler, Eddie Redmayne, Ezra Miller, Fiona Glascott, Jude Law, Katherine',
    price: 2000,
    duration: '2hrs 24mins',
    description:
      'Professor Albus Dumbledore knows the powerful Dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts Magizoologist Newt Scamander to lead an intrepid team of wizards, witches and one brave Muggle baker on a dangerous mission, where they encounter old and new beasts and clash with Grindelwald’s growing legion of followers. But with the stakes so high, how long can Dumbledore remain on the sidelines?',
    rating: 'PG-1',
    trailer: 'https://youtu.be/Y9dr2zw-TXQ',
    availableTicket: 310,
    showingDate: ['aug 2nd,2021', 'aug 4th 2022'],
    showingTime: ['7:00pm', '4:0pm'],
  },
  {
    id: 2,
    title: 'Strange Soldier',
    image: '/images/StrangeSoldier.png',
    genre: 'Drama',
    starring:
      'Belinda Effah, Eddie Watson, Eke Osoechi, Felix Omokhodion, Fiona Garba, Linda Osifo, Vincent Opurum, Wole Ojo',
    price: 1500,
    duration: '1hr 50mins',
    description:
      'A Nigerian pilot runs into trouble after rescuing five homeless African girls, a strange Military officer comes to her aid from a Military base outside town.',

    trailer: 'https://youtu.be/gJG_0rEYX2c',
    rating: 'PG-13',
    availableTicket: 120,
    showingDate: ['aug 2nd,2021', 'aug 4th 2022'],
    showingTime: ['7:00pm', '4:0pm'],
  },

  {
    id: 3,
    title: 'The Perfect Arrangement',
    image: '/images/PerfectArrangement.png',
    genre: 'Drama',
    starring:
      'Adunni Ade, Bovi Ugboma, Debo “Mr Macaroni” Adedayo, Dorcas Shola Fapson, Funsho Adeolu, Mimi Chaka,',
    price: 1500,
    duration: '1hr 50mins',
    description:
      'Tade, a free-spirited scion of a respected political family, is living her best life and without a care in the world. Things get complicated when she develops feelings for Chidi (Pere Egbi), and Cheta (Bovi Ugboma), not knowing both are brothers. Chidi happens to be her ex and Cheta, her best friend.',
    rating: 'PG-13',
    trailer: 'https://youtu.be/lzJLV7OZOMk',
    availableTicket: 110,
    showingDate: ['aug 2nd,2021', 'aug 4th 2022'],
    showingTime: ['7:00pm', '4:0pm'],
  },

  {
    id: 4,
    title: 'Ben From Downstairs',
    image: '/images/Ben_from_Downstairs.png',
    genre: 'Drama',
    starring:
      'Abayomi Alvin, Ame Anthonia Aiyejina, Emeka Okoye, George Chux, Juliet Njemanze, Patricia Nkechi Egbon, Samira',
    price: 1500,
    duration: '1hr 50mins',
    description:
      'Muna, a young lady in her 20s who is disinterested in dating recently moves into a new apartment to enjoy her independence, but Ben, her neighbor is determined to befriend her.',
    rating: 'PG-13',
    trailer: 'https://youtu.be/fOQKLVV0dX0',
    availableTicket: 110,
    showingDate: ['aug 2nd,2021', 'aug 4th 2022'],
    showingTime: ['7:00pm', '4:0pm'],
  },

  {
    id: 5,
    title: 'Dr Strange: In The Multiverse Of Madness',
    image: '/images/Dr_Strange.png',
    genre: 'Action, Adventure, Fantasy',
    starring:
      'Benedict Cumberbatch, Benedict Wong, Bruce Campbell, Chiwetel Ejiofor, Elizabeth Olsen, Julian Hilliard, Michael',
    price: 2500,
    duration: '2hrs 06mins',
    description:
      'Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.',
    rating: 'PG-13',
    trailer: 'https://youtu.be/aWzlQ2N6qqg',
    availableTicket: 310,
    showingDate: ['aug 2nd,2021', 'aug 4th 2022'],
    showingTime: ['7:00pm', '4:0pm'],
  },
  {
    id: 6,
    title: 'Memory',
    image: '/images/Memory.png',
    genre: 'Action, Thriller',
    starring:
      'Guy Pearce, Lee Boardman, Liam Neeson, Louis Mandylor, Monica Bellucci, Ray Fearon, Ray Stevenson',
    price: 2000,
    duration: '1hrs 54mins',
    description:
      'Alex Lewis (Liam Neeson) is an expert assassin with a reputation for discreet precision. Caught in a moral quagmire, Alex refuses to complete a job that violates his code and must quickly hunt down and kill the people who hired him before they and FBI agent Vincent Serra (Guy Pearce) find him first. Alex is built for revenge but, with a memory that is beginning to falter, he is forced to question his every action, blurring the line between right and wrong.',
    rating: 'PG-13',
    trailer: 'https://youtu.be/ye63hQLDj4k',
    availableTicket: 310,
    showingDate: ['aug 2nd,2021', 'aug 4th 2022'],
    showingTime: ['7:00pm', '4:0pm'],
  },
  {
    id: 7,
    title: 'Memory',
    image: '/images/Memory.png',
    genre: 'Action, Thriller',
    starring:
      'Guy Pearce, Lee Boardman, Liam Neeson, Louis Mandylor, Monica Bellucci, Ray Fearon, Ray Stevenson',
    price: 2000,
    duration: '1hrs 54mins',
    description:
      'Alex Lewis (Liam Neeson) is an expert assassin with a reputation for discreet precision. Caught in a moral quagmire, Alex refuses to complete a job that violates his code and must quickly hunt down and kill the people who hired him before they and FBI agent Vincent Serra (Guy Pearce) find him first. Alex is built for revenge but, with a memory that is beginning to falter, he is forced to question his every action, blurring the line between right and wrong.',
    rating: 'PG-13',
    trailer: 'https://youtu.be/ye63hQLDj4k',
    availableTicket: 310,
    showingDate: ['aug 2nd,2021', 'aug 4th 2022'],
    showingTime: ['7:00pm', '4:0pm'],
  },
]

export default movies
