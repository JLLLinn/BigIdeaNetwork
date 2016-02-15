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
        name:"Chile HOPE Project"
      },
      {
        name:"Another Chile Education Project"
      }
    ],
    participating_project_list:[
      {
        name:"Help Blind Photographers"
      },
      {
        name:"Corn4CHAMPAIGN"
      }
    ],
    educations:["UIUC", "Huazhong University", "CU Boulder"],
    skills_endorsements:[
    {
      skill:"Comp.Sci.",
      endorsements:3
    }, 
    {
      skill:"Proj. Management",
      endorsements:18
    }],
  };

  return {
    all: function() {
      return account;
    }
  };
});