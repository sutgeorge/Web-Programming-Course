var filterLog = ["None"];

function displayUsersByName(users) {
    var listOfUsers = [];
    if (!users.length) {
        $("#container").html("<h2> There is no user with this name... </h2>");
        return;
    }

    users.forEach(user => {
        let userHtml =  "Name: " + user.name + "<br/>" + 
                        "Username: " + user.username + "<br/>" + 
                        "Password: " + user.password + "<br/>" +
                        "Date of birth: " + user.dateOfBirth+ "<br/>" +
                        "Role: " + user.role + "<br/>" +
                        "E-mail: " + user.email + "<br/><hr>";
        listOfUsers.push(userHtml);
    });

    logLastFilterPattern("name");

    $("#container").html(listOfUsers);
    $("#name").val("");
}


function displayUsersByRole(users) {
    var listOfUsers = [];
    if (!users.length) {
        $("#container").html("<h2> There is no user with this role... </h2>");
        return;
    }

    users.forEach(user => {
        let userHtml =  "Name: " + user.name + "<br/>" + 
                        "Username: " + user.username + "<br/>" + 
                        "Password: " + user.password + "<br/>" +
                        "Date of birth: " + user.dateOfBirth+ "<br/>" +
                        "Role: " + user.role + "<br/>" +
                        "E-mail: " + user.email + "<br/><hr>";
        listOfUsers.push(userHtml);
    });

    logLastFilterPattern("role");

    $("#container").html(listOfUsers);
    $("#role").val("");
}

function addedUserMessage() {
    list = ["<h1>User added.</h1>"];
    console.log("push html to the list.");
    $("#container").html(list);
}


function removedUserMessage() {
    list = ["<h1>User removed.</h1>"];
    console.log("push html to the list.");
    $("#container").html(list);
}


function updatedUserMessage() {
    list = ["<h1>User updated.</h1>"];
    console.log("push html to the list.");
    $("#container").html(list);
}


$(document).ready(function() {
    $("#showUsersByName").click(function() {
        console.log(`Beginning the request of users with the name ${$('#name').val()}...`);
        $.getJSON(
            "controller.php",  
            { requestedAction: "getUserByName", name: $('#name').val() }, 
            displayUsersByName
        );
    });
});


$(document).ready(function() {
    $("#showUsersByRole").click(function() {
        $.getJSON(
            "controller.php",  
            { requestedAction: "getUserByRole", role: $('#role').val() }, 
            displayUsersByRole
        );
    });
});


$(document).ready(function() {
    $("#addUser").click(function() {
        $.getJSON(
            "controller.php",  
            {   
                requestedAction: "addUser", 
                name: $('#name').val(),  
                username: $('#username').val(),  
                password: $('#password').val(),  
                dateOfBirth: $('#dateOfBirth').val(),  
                role: $('#role').val(),  
                email: $('#email').val() 
            }, 
            addedUserMessage 
        );
    });
});


$(document).ready(function() {
    $("#updateUser").click(function() {
        console.log("You clicked the button...");
        $.getJSON(
            "controller.php",
            {requestedAction: "updateUser", username: $('#username').val(), password: $('#password').val()}, 
            updatedUserMessage
        );
    });
});


$(document).ready(function() {
    $("#removeUser").click(function() {
        $.getJSON(
            "controller.php",
            {requestedAction: "removeUser", email: $('#email').val()}, 
            removedUserMessage
        );
    });
});

function logLastFilterPattern(elementId) {
    if (filterLog.length != 0) {
        $("#filterHistory").html(filterLog);
        filterLog = [];
    }
    filterLog.push(document.getElementById(elementId).value);
    console.log(filterLog);
}