
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess; 
}


FeatureToggle.prototype.canAccess = function(userRole) {
    if (!this.isEnabled) {
        return false;
    }
    return this.userGroupAccess.includes(userRole);
};

FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag;
};


const newfeature = new FeatureToggle('Dashboard', false, ['betaTesters', 'admins']);
newfeature.toggleFeature(true);


function simulateAccessIfElse(userRole) {
    if (newfeature.canAccess(userRole)) {
        console.log(`access granted`);
    } else {
        console.log(`access denied`);
    }
}


function simulateAccess(userRole) {
    switch(userRole) {
        
        case 'admins':
            if (newfeature.canAccess(userRole)) {
                console.log(`access granted`);
            } else {
                console.log(`access denied`);
            }
            break;
        default:
            console.log(`access denied`);
    }
}


simulateAccess('betaTesters');   
simulateAccess('admins');         
function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails; 
    this.logs = logs;
}

TimeLog.prototype.calculateTotalEarnings = function() {
    let totalHours = 0;
    for (let log of this.logs) {
        totalHours += log.hoursWorked;
    }
    return totalHours * this.projectDetails.hourlyRate;
};


TimeLog.prototype.filterLogsByDateRange = function(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return this.logs.filter(log => {
        const logDate = new Date(log.date);
        return logDate >= start && logDate <= end;
    });
};


TimeLog.prototype.isWeeklyHoursExceeding = function() {
    let totalHours = 0;
    for (let log of this.logs) {
        totalHours += log.hoursWorked;
    }
    if (totalHours > 40) {
        return true;
    } else {
        return false;
    }
};


const exampleLogs = [
    {date: '2025-05-19', hoursWorked: 10},
    {date: '2025-05-16', hoursWorked: 6},
    {date: '2025-05-11', hoursWorked: 4},
    {date: '2025-05-12', hoursWorked: 1},
];

const timeLogone = new TimeLog('James ', {name: 'backendassignment', hourlyRate: 40}, exampleLogs);

console.log( timeLogone.calculateTotalEarnings());
console.log(timeLogone.filterLogsByDateRange('2024-09-13', '2025-10-09'));
console.log(timeLogone.isWeeklyHoursExceeding());





function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
}

Order.prototype.computeTotalCost = function() {
    return this.items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
};

Order.prototype.updateStatus = function(paymentReceived) {
    this.status = paymentReceived ? "Paid" : "waiting";
};

Order.prototype.categorizeUrgency = function() {
    switch (this.status) {
        case "waiting":
            return "not yet";
        case "Paid":
            return "continue";
      }
};


const orderone = new Order({ name: "James", email: "James@gmail.com" }, [{ productName: "Laptop", quantity: 6, unitPrice: 5000 }], "waiting");
console.log(orderone.computeTotalCost()); 
orderone.updateStatus(true);
console.log(orderone.categorizeUrgency()); 



class Employee{
constructor(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics; 
    this.feedback = feedback ;
}
}

Employee.prototype.AverageScore = function() {
    const performance = this.performanceMetrics;
    const scores = Object.values(performance);
    if (points.length === 0) return 0;
    
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};


Employee.prototype.Performance = function() {
    const avgScore = this.AverageScore();

    if (avgScore >= 8) {
        return 'Excellent';
    } else if (avgScore >= 6) {
        return 'very good';
    } else if (avgScore >= 4) {
        return 'good';
    } else {
        return 'needs improvement';
    }
};


Employee.prototype.addFeedback = function(newFeedback) {
    const performanceLevel = this.classiPerformance();

    
    if (performanceLevel === 'Poor') {
        this.feedback.push('needsImprovement: ' + newFeedback);
    } else if (performanceLevel === 'good') {
        this.feedback.push('Do practicce more: ' + newFeedback);
    } else {
        this.feedback.push('Excellent! ' + newFeedback);
    }
};

const employ = new Employee(
    500,
    'Milen',
    { communication: 8, efficiency: 9, reliability: 5 },
    []
);

console.log( employ.calculateAverageScore()); 
console.log(employ.classifyPerformance()); 

employ.addFeedback('good job');
console.log(employ.feedback);



class Course{
constructor (title, instructor, students) {
    this.title = title;
    this.instructor = instructor;
    this.students = students;     
}
}

Course.prototype.getCompletedStudents = function() {
    return this.students
        .filter(student => student.completionStatus === true)
        .map(student => student.name);
};


Course.prototype.countStudentsByExpertise = function(expertise) {
    if (this.instructor.expertise === expertise) {
        return this.students.length;
    } else {
        return 0;
    }
};


Course.prototype.instructorMessage = function() {
    if (this.students.length > 5) {
        return `Instructor ${this.instructor.name} teaches ${this.students.length} students.`;
    } else {
        return `Instructor ${this.instructor.name} teaches ${this.students.length} students.`;
    }
};


const instructor = { name: 'James', expertise: 'Backend' };
const students = [
    { name: 'Eyeru', completionStatus: true },
    { name: 'Milen', completionStatus: false },
    { name: 'Awet', completionStatus: true },
    { name: 'Meaza', completionStatus: true },
    
];

const course = new Course('Django', instructor, students);

console.log(course.getCompletedStudents()); 

console.log(course.countStudentsByExpertise('Backend')); 

console.log(course.instructorMessage()); 
