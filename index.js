
class FeatureToggle {
    constructor( featureName, isEnabled,userGroupAccess){
       this.featureName=featureName;
       this.isEnabled=isEnabled;
       this.userGroupAccess=userGroupAccess;
    }
    
    }
    FeatureToggle.prototype.canAccess=function(userRole){
     if(userGroupAccess.contains(userRole)){
        userGroupAccess.forEach(individualaccess=> {
      switch(individualaccess){
        case 1: "Admin"
        console.log("access granted");
        break;
        case 2:"developer";
        console.log("access denied");
        break;
     }
        
     })};
     }
    FeatureToggle.prototype.toggleFeature=function(flag){
    }
 const FeatureToggle= new feature1("update","true",["Admin","developer","observer"]);
 console.log( feature1.canAccess());
 console.log( feature1.toggleFeature());

class  TimeLog {
    constructor( freelancerName, projectDetails,logs){
       this.freelancerName=freelancerName;
       this.projectDetails=projectDetails;
       this.logs=logs;
    }
    
    }
    TimeLog.prototype.totalearnings=function(){
     }
    TimeLog.prototype.filterlogs=function(){
       this.logs.date.filter(dates=>dates>=4)
    }
    TimeLog.prototype.totalhourlywork=function(){
    if(this.projectDetails.hoursworked>=40){
        return true
    }
    else{
        return false
    }
    }
 const TimeLog= new timelog1("eyeru",[{name:"awet",hoursweekly:9}],[{name:"milen",hoursworked:5}]);
 console.log( timelog1.totalearnings());
 console.log( timelog1.filterlogs());
 console.log( timelog1.totalhourlywork());
 


