var userId="";
function getEmployeeDetail(){
    $.ajax({
        url:'http://localhost:5000/employee'+userId,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            document.getElementById("fname").value = data.FirstName;
            document.getElementById("lname").value = data.LastName;
            document.getElementById("nname").value = data.FirstName;
            document.getElementById("email").value = data.Email;
            document.getElementById("location").value = data.Location;
            document.getElementById("exp").value = data.PastExperience;
            document.getElementById("designation").value = data.Designation;
            document.getElementById("division").value = data.Department;
            document.getElementById("DOB").value = data.DateOfBirth;
            document.getElementById("DOJ").value = data.DateOfJoining;


        }
    });
    $.ajax({
        url: Url,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            for(i=0; i<data.length;i++){
                $('#skills').append(
                    '<tr><td>' + data[i].Name+
                    '</td><td>' + data[i].Category 
                    '</tr>'
                );
            }
        }
    });
    $.ajax({
        url: Url,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            for(i=0; i<data.length;i++){
                $('#project').append(
                    '<tr><td>' + data[i].Name+
                    '</td><td>' + data[i].start_date+ 
                    '<td>' + data[i].tenure+
                    '</td><td>' + data[i].Status
                    '</tr>'
                );
            }

        }
    });
}
function updatedetails(){
    var first_name= validateData(document.getElementById("fname").value);
    var last_name= validateData(document.getElementById("lname").value);
    var nick_name= validateData(document.getElementById("nname").value);
    var location= validateData(document.getElementById("location").value);
    var email= document.getElementById("email").value;
    var designation = validateData(document.getElementById("designation").value);  
    var experience = validateData(document.getElementById("exp").value);
    var division = validateData(document.getElementById("division").value);
    var dob = validateData(document.getElementById("DOB").value);
    var doj = validateData(document.getElementById("DOJ").value);
    var password = validateData(document.getElementById("pwd").value);
    var dataToSend={
        "FirstName": first_name,
        "LastName": last_name,
        "Location": location,
        "Email": email,
        "Designation": designation,
        "PastExperience": experience,
        "Department" :division,
        "DateOfBirth":dob,
        "DateofJoining":doj,
        "Password":password
    }
    $.ajax({
        url: '',
        data: dataToSend,
        type:'PUT',
        dataType:'json',
        success:function(res){
            console.log(res);
            alert("table updated");
        }
    });
}
function dropdown(){
    var node = document.getElementById("skilldrop");
    for(i=0;i<drop.length;i++){ 
        var op = new Option();
        op.value = drop[i].skill;
        op.text = drop[i].skill;
        node.options.add(op); 
    }
}


$(document).ready(function () {
    var selectedSkills = "";
    $('.selectbox').select2({
        placeholder: 'Select a skill'
    });
    $.ajax({
        type: 'GET',
        url: '',  
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                $("#skilldrop").append(
                    '<option value="' + data[i].name + '">' + data[i].name + '</option>' 
                );
            }       
        }
    });
}

                  $("#select2dropdown").on("select2:select select2:unselect", function(e){
    selectedSkills = $(this).val();
    console.log(selectedSkills);
});
function skillupdate(){
    var newskilldata = {    
        "skills" : array.concat($("#skilldrop").val()) 
    };
    console.log(newskilldata);
    $.ajax({
        type: 'PUT',
        url: ''+localStorage.getItem("Id"),    
        data: newskilldata,
        success: function (data) {
            refresh();
        },
        error: function(err){
            console.log(err);
        }
    })
}

function updateEmployee(){
    $.ajax({
        url:'http://localhost:5000/employee/update/'+userId,
        type: 'PATCH',
        dataType: 'json',
        success: function(data){
            document.getElementById("fname").value = data.FirstName;
            document.getElementById("lname").value = data.LastName;
            document.getElementById("nname").value = data.FirstName;
            document.getElementById("email").value = data.Email;
            document.getElementById("location").value = data.Location;
            document.getElementById("exp").value = data.PastExperience;
            document.getElementById("designation").value = data.Designation;
            document.getElementById("division").value = data.Department;
            document.getElementById("DOB").value = data.DateOfBirth;
            document.getElementById("DOJ").value = data.DateOfJoining;
        }
    });
}