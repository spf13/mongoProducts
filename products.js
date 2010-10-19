/*
 * Sample Data for Presentation on MongoDB and Ecommerce
 *
 * Copyright 2010 Steve Francia (http://spf13.com)
 *
 * This work is licensed under the Creative Commons
 * Attribution-Noncommercial-Share Alike 3.0 United States License. To
 * view a copy of this license, visit
 * http://creativecommons.org/licenses/by-nc-sa/3.0/us/ or send a
 * letter to Creative Commons, 171 Second Street, Suite 300, San
 * Francisco, California, 94105, USA.
 *
 *
 * To use: run `mongo --shell products.js`
 */

// set db and clean up
db = db.getSisterDB("mongoProducts");
db.dropDatabase();

// Setup some functions for convience
db.products.vfind = function ($query) {
    var cursor = db.products.find($query);
    while (cursor.hasNext()) {
        print(tojson(cursor.next()));
    }
}

var vfind = db.products.vfind;


// "slides"
db.products.save( {
  sku: "00e8da9b",
  type: "Audio Album",
  title: "A Love Supreme",
  description: "by John Coltrane",
  asin: "B0000A118M",

  shipping: {
    weight: 6,
    dimensions: {
      width: 10,
      height: 10,
      depth: 1
    },
  },

  pricing: {
    list: 1200,
    retail: 1100,
    savings: 100,
    pct_savings: 8
  },

  details: {
    title: "A Love Supreme [Original Recording Reissued]",
    artist: "John Coltrane",
    genre: [ "Jazz", "General" ],
    label: "Impulse Records",
    number_of_discs: 1,
    issue_date: "December 9, 1964",
    format: "CD",
    alternate_formats: [ 'Vinyl', 'MP3' ],
    tracks: [
      "A Love Supreme Part I: Acknowledgement",
      "A Love Supreme Part II - Resolution",
      "A Love Supreme, Part III: Pursuance",
      "A Love Supreme, Part IV-Psalm"
    ],
  },
});

db.products.save( {
  sku: "00e8da9c",
  type: "Audio Album",
  title: "Hoss",
  description: "by Lagwagon",
  asin: "B0000007QG",

  shipping: {
    weight: 6,
    dimensions: {
      width: 10,
      height: 10,
      depth: 1
    },
  },

  pricing: {
    list: 1000,
    retail: 800,
    savings: 200,
    pct_savings: 20
  },

  details: {
    title: "Hoss",
    artist: "Lagwagon",
    genre: [ "Punk", "Hardcore", "Indie Rock" ],
    label: "Fat Wreck Chords",
    number_of_discs: 1,
    issue_date: "November 21, 1995",
    format: "CD",
    alternate_formats: [ 'Vinyl', 'MP3' ],
    tracks: [
      "Kids Don't Like To Share",
      "Violins",
      "Name Dropping",
      "Bombs Away",
      "Move The Car",
      "Sleep",
      "Sick",
      "Rifle",
      "Weak",
      "Black Eye",
      "Bro Dependent",
      "Razor Burn",
      "Shaving Your Head",
      "Ride The Snake",
    ],
  },
});


db.products.save( {
  sku: "00e8da9c",
  type: "Audio Album",
  title: "Stone Cold Rhymin", 
  description: "by Young MC",
  asin: "B0000589TO",

  shipping: {
    weight: 6,
    dimensions: {
      width: 10,
      height: 10,
      depth: 1
    },
  },

  pricing: {
    list: 1300,
    retail: 1100,
    savings: 200,
    pct_savings: 15
  },

  details: {
    title: "Stone Cold Rhymin",
    artist: "Young MC",
    genre: [ "Hip Hop", "Rap", "Old School" ],
    label: "Delicious Vinyl",
    number_of_discs: 1,
    issue_date: "February 20, 2001",
    original_release_date: "1989",
    format: "MP3",
    alternate_formats: [ 'Vinyl', 'CD', 'Cassette' ],
    tracks: [
      "I Come Off",
      "Principal's Office",
      "Bust a Move",
      "Non Stop",
      "Fastest Rhyme",
      "My Name Is Young",
      "Know How",
      "Roll with the Punches",
      "I Let 'Em Know",
      "Pick Up the Pace",
      "Got More Rhymes",
      "Stone Cold Buggin'",
      "Just Say No"
    ],
  },
});


db.products.save( {
  sku: "00e8da9d",
  type: "Film",
  title: "The Matrix",
  description: "Set in the 22nd century, The Matrix tells of a computer hacker (Reeves) who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth. The computers are powered by human beings...",
  asin: "B000P0J0AQ",

  shipping: {
    weight: 6,
    dimensions: {
      width: 10,
      height: 10,
      depth: 1
    },
  },

  pricing: {
    list: 1200,
    retail: 1100,
    savings: 100,
    pct_savings: 8.5
  },

  details: {
    title: "The Matrix",
    director: [ "Andy Wachowski", "Larry Wachowski" ],
    writer: [ "Andy Wachowski", "Larry Wachowski" ],
    actor: [ "Keanu Reeves" , "Lawrence Fishborne", "Carrie Anne Moss", "Hugo Weaving" ],
    genre: [ "Science Fiction", "Action" ],
    number_of_discs: 1,
    issue_date: "May 15 2007",
    original_release_date: "1999",
    disc_format: "DVD",
    rating: "R",
    alternate_formats: [ 'VHS', 'Bluray' ],
    run_time: "136",
    studio: "Warner Bros",
    language: "English",
    format: [ "AC-3", "Closed-captioned", "Color", "Dolby", "DVD", "Subtitled", "Widescreen", "NTSC" ],
    aspect_ratio: "1.66:1"
  },
});

db.products.save( {
  sku: "00e8da9e",
  type: "Film",
  title: "A Night at the Opera",
  description: "A near riot on a ship, a New York scandal and an evening of insanity in a concert hall are just some of the fall out from Groucho's outrageous business schemes to bring Milan's finest opera stars to Manhattan. ",
  asin: "B0001HAINQ",

  shipping: {
    weight: 6,
    dimensions: {
      width: 10,
      height: 10,
      depth: 1
    },
  },

  pricing: {
    list: 1000,
    retail: 800,
    savings: 200,
    pct_savings: 20
  },

  details: {
    title: "A Night at the Opera",
    director: "Sam Wood",
    actor: [ "Groucho Marx" , "Chico Marx", "Harpo Marx", "Kitty Carlisle" ],
    genre: "Comedy",
    number_of_discs: 1,
    issue_date: "May 4 2004",
    original_release_date: "1935",
    disc_format: "DVD",
    rating: "NR",
    alternate_formats: [ 'VHS' ],
    run_time: "96",
    studio: "Warner Bros",
    language: "English",
    format: [ "Black & White", "Closed-captioned", "Color", "DVD", "Subtitled", "NTSC" ],
    aspect_ratio: "1.33:1"
  },
});

db.products.save( {
  sku: "00e8da9f",
  type: "Film",
  title: "Mr. Smith goes to Washington",
  description: "A naive man is appointed to fill a vacancy in the US Senate. His plans promptly collide with political corruption, but he doesn't back down.",
  asin: "B001GLX6UI",

  shipping: {
    weight: 6,
    dimensions: {
      width: 10,
      height: 10,
      depth: 1
    },
  },

  pricing: {
    list: 1000,
    retail: 800,
    savings: 200,
    pct_savings: 20
  },

  details: {
    title: "Mr. Smith goes to Washington",
    director: "Frank Capra",
    actor: [ "James Stewart" , "Jean Arthur" ],
    genre: "Drama",
    number_of_discs: 1,
    issue_date: "Dec 9 2008",
    original_release_date: "1939",
    disc_format: "DVD",
    rating: "NR",
    alternate_formats: [ 'VHS', 'Bluray' ],
    run_time: "129",
    studio: "Sony Pictures",
    language: "English",
    format: [ "Black & White", "Closed-captioned", "Full Screen", "DVD", "Subtitled", "NTSC" ],
    aspect_ratio: "1.33:1",
    award: { oscar: 1, oscar_nomination: 10 }
  },
});

db.products.save( {
  sku: "00e8da9f",
  type: "Film",
  title: "It's a Wonderful Life",
  description: "George Bailey has so many problems he is thinking about ending it all – and it’s Christmas! As the angels discuss George, we see his life in flashback. As George is about to jump from a bridge, he ends up rescuing his guardian angel, Clarence. Clarence then shows George what his town would have looked like if it hadn’t been for all of his good deeds over the years. Will Clarence be able to convince George to return to his family and forget suicide?",
  asin: "B000HEWEJO",

  shipping: {
    weight: 6,
    dimensions: {
      width: 10,
      height: 10,
      depth: 1
    },
  },

  pricing: {
    list: 1200,
    retail: 900,
    savings: 300,
    pct_savings: 25
  },

  details: {
    title: "It's a Wonderful Life",
    director: "Frank Capra",
    actor: [ "James Stewart", "Donna Reed", "Lionel Barrymore" ],
    writer: [ "Frank Capra",  "Albert Hackett", "Frances Goodrich", "Jo Swerling", "Michael Wilson" ],
    genre: "Drama",
    number_of_discs: 1,
    issue_date: "Oct 31 2006",
    original_release_date: "1947",
    disc_format: "DVD",
    rating: "NR",
    alternate_formats: [ 'VHS', 'Bluray' ],
    run_time: "130",
    studio: "Paramount Pictures",
    language: "English",
    format: [ "Black & White", "Closed-captioned", "Full Screen", "DVD", "Subtitled", "NTSC" ],
    aspect_ratio: "1.33:1",
    award: { oscar_nomination: 5 }
  },
});

db.order.save( {
 order_number: 120931,
 customer_number: 12312,
 items: [
  { sku: "00e8da9f",
    type: "Film",
    title: "It's a Wonderful Life",
    description: "George Bailey has so many problems he is thinking about ending it all – and it’s Christmas! As the angels discuss George, we see his life in flashback. As George is about to jump from a bridge, he ends up rescuing his guardian angel, Clarence. Clarence then shows George what his town would have looked like if it hadn’t been for all of his good deeds over the years. Will Clarence be able to convince George to return to his family and forget suicide?",
    asin: "B000HEWEJO",

    shipping: {
      weight: 6,
      dimensions: {
        width: 10,
        height: 10,
        depth: 1
      },
    },

    pricing: {
      list: 1200,
      retail: 900,
      savings: 300,
      pct_savings: 25
    },

    details: {
      title: "It's a Wonderful Life",
      director: "Frank Capra",
      actor: [ "James Stewart", "Donna Reed", "Lionel Barrymore" ],
      writer: [ "Frank Capra",  "Albert Hackett", "Frances Goodrich", "Jo Swerling", "Michael Wilson" ],
      genre: "Drama",
      number_of_discs: 1,
      issue_date: "Oct 31 2006",
      original_release_date: "1947",
      disc_format: "DVD",
      rating: "NR",
      alternate_formats: [ 'VHS', 'Bluray' ],
      run_time: "130",
      studio: "Paramount Pictures",
      language: "English",
      format: [ "Black & White", "Closed-captioned", "Full Screen", "DVD", "Subtitled", "NTSC" ],
      aspect_ratio: "1.33:1",
      award: { oscar_nomination: 5 }
    } 
  },
  { sku: "00e8da9f",
    type: "Film",
    title: "Mr. Smith goes to Washington",
    description: "A naive man is appointed to fill a vacancy in the US Senate. His plans promptly collide with political corruption, but he doesn't back down.",
    asin: "B001GLX6UI",

    shipping: {
      weight: 6,
      dimensions: {
        width: 10,
        height: 10,
        depth: 1
      },
    },

    pricing: {
      list: 1000,
      retail: 800,
      savings: 200,
      pct_savings: 20
    },

    details: {
      title: "Mr. Smith goes to Washington",
      director: "Frank Capra",
      actor: [ "James Stewart" , "Jean Arthur" ],
      genre: "Drama",
      number_of_discs: 1,
      issue_date: "Dec 9 2008",
      original_release_date: "1939",
      disc_format: "DVD",
      rating: "NR",
      alternate_formats: [ 'VHS', 'Bluray' ],
      run_time: "129",
      studio: "Sony Pictures",
      language: "English",
      format: [ "Black & White", "Closed-captioned", "Full Screen", "DVD", "Subtitled", "NTSC" ],
      aspect_ratio: "1.33:1",
      award: { oscar: 1, oscar_nomination: 10 }
    },
  }
]
}
  );
