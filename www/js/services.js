angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Ideas', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var ideas = [{
    id: 0,
    category: 'Poverty Alleviation',
    ideas:[{
      name:"Eradicate poverty among the elderly in Illinois",
      projects:[{
        name:"Poverty Action Hackathon"
      }]
    },{
      name:"Connect low-income Americans to government services",
      projects:[{
        name:"Build the “Connector App” for accessing social services"
      }]
    }]
  }, {
    id: 1,
    category: 'Healthcare Reform',
    ideas:[{
      name:"Bring down the price of life-saving drugs",
      projects:[{
        name:"Lobbying campaign to allow importation of drugs from Canada"
      }]
    },{
      name:"Make the “minute-clinic” model ubiquitous",
      projects:[{
        name:"Launch 24/7 minute clinic on the UNC campus"
      }]
    }]
  }, {
    id: 2,
    category: 'Political Reform',
    ideas:[{
      name:"Eliminate corporate donations from federal elections",
      projects:[{
        name:"Letter-writing campaign to top 50 news papers"
      }]
    },{
      name:"Support Michael Bloomberg for President",
      projects:[{
        name:"Organize house party for Draft Bloomberg 2016"
      }]

    }]
  }, {
    id: 3,
    category: 'Environmental Justice',
    ideas:[{
      name:"Clean up Carolina",
      projects:[{
        name:"Clean-up of Ninth Street in Durham, NC"
      }]
    },{
      name:"Expand access to clean water",
      projects:[{
        name:"Volunteer to hand out filters in Flint, Michigan"
      }]

    }]
  }, {
    id: 4,
    category: 'Language Arts',
    ideas:[{
      name:"Teach 1 million people to speak Chinese",
      projects:[{
        name:"Build a Chinese-English mobile dictionary for kids"
      }]
    }]
  }, {
    id: 5,
    category: 'Gender Equality',
    ideas:[{
      name:"End the gender pay gap by 2020",
      projects:[{
        name:"Wage shareholder proxy fights to make companies disclose pay scales by gender"
      }]
    },{
      name:"Achieve a goal of having 50% of CS graduates be women by 2030",
      projects:[{
        name:"Be a tutor for high schoolers taking the AP exam in CS"
      }]

    }]
  }, {
    id: 6,
    category: 'LGBT Rights',
    ideas:[{
      name:"Pass a local ordinance against discrimination in every city in Illinois",
      projects:[{
        name:"Meetup to discuss strategy this Friday"
      }]
    }]
  }, {
    id: 7,
    category: 'Build a Company',
    ideas:[{
      name:"Build the next great search engine",
      projects:[{
        name:"Make a prototype for a startup competition"
      }]
    }]
  }, {
    id: 8,
    category: 'Food and Beverage',
    ideas:[{
      name:"Educate college students about wines",
      projects:[{
        name:"Teach a class to NC State seniors once a week this spring"
      }]
    }]
  }, {
    id: 9,
    category: 'Agriculture',
    ideas:[{
      name:"Increase agricultural yields 10X in 10 years",
      projects:[{
        name:"Debug drone operating systems codes"
      }]
    }]
  }, {
    id: 10,
    category: 'Global Education',
    ideas:[{
      name:"Achieve 100% world literacy in 50 years",
      projects:[{
        name:"Send a book to 1 child every week for 1 year"
      }]
    }]
  }, {
    id: 11,
    category: 'K-12 Education',
    ideas:[{
      name:"Get more students to study arts in middle school",
      projects:[{
        name:"Design mobile ad campaign targeting middle-schoolers to get them interested in the arts"
      }]
    }]
  }];

  return {
    all: function() {
      return ideas;
    },
    get: function(ideaId) {
      for (var i = 0; i < ideas.length; i++) {
        if (ideas[i].id === parseInt(ideaId)) {
          return ideas[i];
        }
      }
      return null;
    }
  };
})

;
