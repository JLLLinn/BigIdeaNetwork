angular.module('starter.services', [])

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    var chats = [{
      project: "Wage Shareholder Proxy Fights",
      taskChats: [{
        id: 0,
        name: 'Research past successful and failed shareholder resolutions on pay equity and produce research report',
        message: ['Is it ready yet?','I just got the data we want','That is really good news.','We can now start to implement.','yes definitely'],
        lastText: 'How is the research going so far?',
        face: 'img/ben.png'
      }, {
        id: 1,
        name: 'Initiate letter-writing campaign to state treasurers in all 50 states to advocate for shareholder resolutions concerning pay equity',
        message: ['Is it ready yet?','I just got the data we want','That is really good news.','We can now start to implement.','yes definitely'],
        lastText: 'We should discuss this with the professor',
        face: 'img/max.png'
      }, {
        id: 2,
        name: 'Circulate petition on pay equity to Fortune 500 companies',
        message: ['Is it ready yet?','I just got the data we want','That is really good news.','We can now start to implement.','yes definitely'],
        lastText: 'Ok so I will meet you at 3pm',
        face: 'img/adam.jpg'
      }]
    }, {
      project: "Advocate Pay Transparency",
      taskChats: [{
        id: 3,
        name: 'Collect data from companies that already publish this data',
        message: ['Is it ready yet?','I just got the data we want','That is really good news.','We can now start to implement.','yes definitely'],
        lastText: 'You on your way?',
        face: 'img/adam.jpg'
      }, {
        id: 4,
        name: 'Generate mail merge document for all corporate diversity officers in the Fortune 500',
        message: ['Is it ready yet?','I just got the data we want','That is really good news.','We can now start to implement.','yes definitely'],
        lastText: 'Did you find the website useful?',
        face: 'img/perry.png'
      }, {
        id: 5,
        name: 'Formulate media campaign to publicize this project',
        message: ['Is it ready yet?','I just got the data we want','That is really good news.','We can now start to implement.','yes definitely'],
        lastText: 'Did you contact the media company?',
        face: 'img/adam.jpg'
      }]
    }]

    ;

    return {
      all: function() {
        return chats;
      },
      remove: function(project_chat, chat) {
        project_chat = chats[chats.indexOf(project_chat)];
        project_chat.taskChats.splice(project_chat.taskChats.indexOf(chat), 1);
      },
       get: function(chatId) {
         for (var i = 0; i < chats.length; i++) {
          for (var j=0; j<chats[i].taskChats.length; j++){
           if (chats[i].taskChats[j].id === parseInt(chatId)) {
             return chats[i].taskChats[j];
           }
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
      ideas: []
    }, {
      id: 0,
      category: 'Arts & Humanities',
      ideas: []
    }, {
      id: 0,
      category: 'Beauty',
      ideas: []
    }, {
      id: 0,
      category: 'Business & Finance',
      ideas: []
    }, {
      id: 0,
      category: 'Politics & Government',
      ideas: []
    }, {
      id: 0,
      category: 'Education & Reference',
      ideas: []
    }, {
      id: 0,
      category: 'Travel',
      ideas: []
    }, {
      id: 0,
      category: 'Environment Protection',
      ideas: []
    }, {
      id: 1,
      category: 'Healthcare Reform',
      ideas: [{
        name: "Bring down the price of life-saving drugs",
        projects: [{
          name: "Lobbying campaign to allow importation of drugs from Canada"
        }]
      }, {
        name: "Make the “minute-clinic” model ubiquitous",
        projects: [{
          name: "Launch 24/7 minute clinic on the UNC campus"
        }]
      }]
    }, {
      id: 2,
      category: 'Political Reform',
      ideas: [{
        name: "Eliminate corporate donations from federal elections",
        projects: [{
          name: "Letter-writing campaign to top 50 news papers"
        }]
      }, {
        name: "Support Michael Bloomberg for President",
        projects: [{
          name: "Organize house party for Draft Bloomberg 2016"
        }]

      }]
    }, {
      id: 3,
      category: 'Environmental Justice',
      ideas: [{
        name: "Clean up Carolina",
        projects: [{
          name: "Clean-up of Ninth Street in Durham, NC"
        }]
      }, {
        name: "Expand access to clean water",
        projects: [{
          name: "Volunteer to hand out filters in Flint, Michigan"
        }]

      }]
    }, {
      id: 4,
      category: 'Language Arts',
      ideas: [{
        name: "Teach 1 million people to speak Chinese",
        projects: [{
          name: "Build a Chinese-English mobile dictionary for kids"
        }]
      }]
    }, {
      id: 5,
      category: 'Gender Equality',
      ideas: [{
        name: "End the gender pay gap by 2020",
        projects: [{
          id:1,
          name: "Wage shareholder proxy fights to make companies disclose pay scales by gender",
          faces: [{
            url: "img/ben.png"
          }, {
            url: "img/max.png"
          }, {
            url: "img/adam.jpg"
          }]
        }, {
          name: "Advocate Pay Transparency",
          id:2,
          faces: [{
            url: "img/max.png"
          }, {
            url: "img/adam.jpg"
          }, {
            url: "img/ben.png"
          }]
        }, {
          name: "Salary negotiation workshops",
          id:3,
          faces: [{
            url: "img/adam.jpg"
          }, {
            url: "img/ben.png"
          }, {
            url: "img/max.png"
          }]
        }]
      }, {
        name: "Achieve a goal of having 50% of CS graduates be women by 2030",
        projects: [{
          name: "Be a tutor for high schoolers taking the AP exam in CS",
          faces: [{
            url: "img/mike.png"
          }, {
            url: "img/mike.png"
          }, {
            url: "img/mike.png"
          }]
        }, {
          name: "Increase the Influence of Woman in Comp Science",
          faces: [{
            url: "img/perry.png"
          }, {
            url: "img/perry.png"
          }, {
            url: "img/perry.png"
          }]
        }]

      }, {
        name: "Pass a local ordinance against discrimination in every city in Illinois",
        projects: [{
          name: "Meetup to discuss strategy this Friday",
          faces: [{
            url: "img/max.png"
          }, {
            url: "img/max.png"
          }, {
            url: "img/max.png"
          }]
        }, {
          name: "Another project for against discrimintion",
          faces: [{
            url: "img/ben.png"
          }, {
            url: "img/ben.png"
          }, {
            url: "img/ben.png"
          }]
        }]

      }]
    }, {
      id: 6,
      category: 'LGBT Rights',
      ideas: [{
        name: "Pass a local ordinance against discrimination in every city in Illinois",
        projects: [{
          name: "Meetup to discuss strategy this Friday"
        }]
      }]
    }, {
      id: 7,
      category: 'Build a Company',
      ideas: [{
        name: "Build the next great search engine",
        projects: [{
          name: "Make a prototype for a startup competition"
        }]
      }]
    }, {
      id: 8,
      category: 'Food and Beverage',
      ideas: [{
        name: "Educate college students about wines",
        projects: [{
          name: "Teach a class to NC State seniors once a week this spring"
        }]
      }]
    }, {
      id: 9,
      category: 'Agriculture',
      ideas: [{
        name: "Increase agricultural yields 10X in 10 years",
        projects: [{
          name: "Debug drone operating systems codes"
        }]
      }]
    }, {
      id: 10,
      category: 'Global Education',
      ideas: [{
        name: "Achieve 100% world literacy in 50 years",
        projects: [{
          name: "Send a book to 1 child every week for 1 year"
        }]
      }]
    }, {
      id: 11,
      category: 'K-12 Education',
      ideas: [{
        name: "Get more students to study arts in middle school",
        projects: [{
          name: "Design mobile ad campaign targeting middle-schoolers to get them interested in the arts"
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
      },
      search_category: function(category_contains_string) {
        var matched_ideas = new Array();
        for (var i = 0; i < ideas.length; i++) {
          if (ideas[i].category.toLowerCase().indexOf(category_contains_string.toLowerCase()) > -1) {
            matched_ideas.push(ideas[i]);
          }
        }
        return matched_ideas;
      }

    };
  })
  .factory('Project', function() {
    var project = {
      projectname: "Wage shareholder proxy fights",
      projectDescription:"Help advance corporate resolutions on pay equity inside leading companies",
      projectnameEnabled: false,
      progress_list: [{
        name: "Research",
        detail: "Research past successful and failed shareholder resolutions on pay equity and produce research report",
        projectEnabled: "False",
        slide: false,
        display: false
      },{
        name: "Initiate letter-writing campaign",
        detail: " Initiate letter-writing campaign to state treasurers in all 50 states to advocate for shareholder resolutions concerning pay equity",
        projectEnabled: "False",
        slide: false,
        display: false
      },{
        name: "Circulate petition",
        detail: "  Circulate petition on pay equity to Fortune 500 companies",
        projectEnabled: "False",
        slide: false,
        display: false
      }],
      place_list: [{
        name: "Champaign"
      }, {
        name: "Chicago"
      }, {
        name: "Taipei"
      }],
      requests: [{
        type: "Add Me",
        detail: "Smith would like to be a participant"
      }, {
        type: "Add Task",
        detail: "Interview with Users -- John"
      }]
    };
    return {
      all: function() {
        return project;
      },
      request_remove: function(request) {
        project.requests.splice(project.requests.indexOf(request), 1);
      }
    };
  })
  .factory('ParticProjects', function() {
    var projects = [
      {
        id:2,
        projectname: "Advocate pay transparency",
        projectDescription:"This project will ask every publicly list U.S. company to release their average salary by gender",
        projectnameEnabled: false,
        progress_list: [{
          name: "Collect data",
          detail: " Collect data from companies that already publish this data",
          projectEnabled: "False",
          slide: false,
          display: false
        },{
          name: "Generate document ",
          detail: " Generate mail merge document for all corporate diversity officers in the Fortune 500",
          projectEnabled: "False",
          slide: false,
          display: false
        },{
          name: "Formulate media campaign",
          detail: "Formulate media campaign to publicize this project",
          projectEnabled: "False",
          slide: false,
          display: false
        }],
        place_list: [{
          name: "Champaign"
        }, {
          name: "Chicago"
        }, {
          name: "Taipei"
        }]
      },{
        id:3,
        projectname: "Salary negotiation workshops",
        projectDescription:"Research shows that women often receive lower salaries due to differences in negotiating styles. We are organizing workshops at leading U.S. business schools to help teach women and men best practices for negotiating salaries",
        projectnameEnabled: false,
        progress_list: [{
          name: "Create curriculum",
          detail: "Create curriculum based on publicly available resources",
          projectEnabled: "False",
          slide: false,
          display: false
        },{
          name: "Record webinar",
          detail: "Record webinar to be used to deliver content",
          projectEnabled: "False",
          slide: false,
          display: false
        },{
          name: "Develop follow up survey",
          detail: "Develop follow up survey for workshop participants",
          projectEnabled: "False",
          slide: false,
          display: false
        }],
        place_list: [{
          name: "Champaign"
        }, {
          name: "Chicago"
        }, {
          name: "Taipei"
        }]
      }
    ];
    return {
      all: function() {
        return projects;
      },
      get: function(projectid) {
        console.log(projectid);
        if(typeof(projectid) == "undefined" || projectid == ""){
          projectid = 0;
        }
        for (var i = 0; i < projects.length; i++) {
          if (projects[i].id === parseInt(projectid)) {
            return projects[i];
          }
        }
        return null;
      },
    };
  })
  .factory('RandomProjects', function() {
    var projects = [{
      id:0,
      projectname: "Implement Pay Transparency",
      projectnameEnabled: false,
      progress_list: [{
        name: "Brainstorm Ideas",
        detail: "What are different types of pay transpancy? Why is it not so good right now?",
        projectEnabled: "False",
        slide: false,
        display: false
      }],
      place_list: [{
        name: "Champaign"
      }, {
        name: "Chicago"
      }, {
        name: "Taipei"
      }]
    },{
      id:1,
      projectname: "Wage shareholder proxy fights",
      projectDescription:"Help advance corporate resolutions on pay equity inside leading companies",
      projectnameEnabled: false,
      progress_list: [{
        name: "Research",
        detail: "Research past successful and failed shareholder resolutions on pay equity and produce research report",
        projectEnabled: "False",
        slide: false,
        display: false
      },{
        name: "Initiate letter-writing campaign",
        detail: " Initiate letter-writing campaign to state treasurers in all 50 states to advocate for shareholder resolutions concerning pay equity",
        projectEnabled: "False",
        slide: false,
        display: false
      },{
        name: "Circulate petition",
        detail: "  Circulate petition on pay equity to Fortune 500 companies",
        projectEnabled: "False",
        slide: false,
        display: false
      }],
      place_list: [{
        name: "Champaign"
      }, {
        name: "Chicago"
      }, {
        name: "Taipei"
      }]
    },{
      id:2,
      projectname: "Advocate pay transparency",
      projectDescription:"This project will ask every publicly list U.S. company to release their average salary by gender",
      projectnameEnabled: false,
      progress_list: [{
        name: "Collect data",
        detail: " Collect data from companies that already publish this data",
        projectEnabled: "False",
        slide: false,
        display: false
      },{
        name: "Generate document ",
        detail: " Generate mail merge document for all corporate diversity officers in the Fortune 500",
        projectEnabled: "False",
        slide: false,
        display: false
      },{
        name: "Formulate media campaign",
        detail: "Formulate media campaign to publicize this project",
        projectEnabled: "False",
        slide: false,
        display: false
      }],
      place_list: [{
        name: "Champaign"
      }, {
        name: "Chicago"
      }, {
        name: "Taipei"
      }]
    },{
      id:3,
      projectname: "Salary negotiation workshops",
      projectDescription:"Research shows that women often receive lower salaries due to differences in negotiating styles. We are organizing workshops at leading U.S. business schools to help teach women and men best practices for negotiating salaries",
      projectnameEnabled: false,
      progress_list: [{
        name: "Create curriculum",
        detail: "Create curriculum based on publicly available resources",
        projectEnabled: "False",
        slide: false,
        display: false
      },{
        name: "Record webinar",
        detail: "Record webinar to be used to deliver content",
        projectEnabled: "False",
        slide: false,
        display: false
      },{
        name: "Develop follow up survey",
        detail: "Develop follow up survey for workshop participants",
        projectEnabled: "False",
        slide: false,
        display: false
      }],
      place_list: [{
        name: "Champaign"
      }, {
        name: "Chicago"
      }, {
        name: "Taipei"
      }]
    }
  ];
    return {
      all: function() {
        return projects;
      },
      get: function(projectid) {
        console.log(projectid);
        if(typeof(projectid) == "undefined" || projectid == ""){
          projectid = 0;
        }
        for (var i = 0; i < projects.length; i++) {
          if (projects[i].id === parseInt(projectid)) {
            return projects[i];
          }
        }
        return null;
      },
    };
  })
  .factory('CreateProjects', function() {
    var project = {
      projectname: "",
      projectnameEnabled: false,
      progress_list: [{
        name: "Brainstorm Ideas",
        detail: "Think about WHAT?",
        projectEnabled: "False",
        slide: false,
        display: false
      }],
      place_list: [{
        name: "Champaign"
      }]
    };
    return {
      all: function() {
        return project;
      }
    };
  });
