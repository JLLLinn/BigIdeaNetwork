angular.module('starter.accountService', [])

.factory('Account', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var account = {
    username : "Jiaxin Lin",
    firstname: "Jiaxin",
    lastname: "Lin",
    occupation:"VP @ Awesome Inc",
    origination:"CS Student from UIUC",
    idea:"Mitigate Indigenours Conflicts Through Education in Chile",
    idea_project_list:[
      {
        name:"Wage shareholder proxy fights"
      }
    ],
    participating_project_list:[
      {
        id:2,
        name:"Advocate pay transparency"
      },
      {
        id:3,
        name:"Salary negotiation workshops"
      }
    ],
    educations:["UIUC", "Huazhong University", "CU Boulder"],
    skills_endorsements:[
    {
      skill:"Computer Science",
      endorsements:3
    },
    {
      skill:"Project Management",
      endorsements:18
    }],
  };

  return {
    all: function() {
      return account;
    }
  };
});
