

$(document).ready(function () {
    //////////////////////////////////////
    ///Enter Add Subject Page
    ///Created Date  :
    ///Updated Date : 20-10-2017
    ///Created      :Abu
    //////////////////////////////////////
    $('#add-subject').on('click',function () {
        $("#loading_gif").show();
        var objSubParant=document.getElementById('subjectParant').value;
        $.ajax({
            url:"/syllabus/course/sem/branch/addsubj/"+objSubParant,
            method:"get",
            data:{

            },
            success:function (data,txtStataus,jqXHR) {
                console.log(objSubParant.value+" view page enterd");
                $("#loading_gif").hide();
                $("#body").html(data);
            }
        });
    });
    //////////////////////////////////////
    ///enter Add Course
    ///Created Date  :
    ///Updated Date : 20-10-2017
    ///Created      :Abu
    //////////////////////////////////////
    $('#add-course').on('click',function () {
        $('#loading_gif').show();
        $.ajax({
            url:"/syllabus/course/new",
            method:"get",
            data:{

            },
            success:function (data,txtStataus,jqXHR) {
                console.log("create page enterd");
                //console.log(data);
                $("#loading_gif").hide();
                $("#body").html(data);
                $("#items li").css("background-color","transparent");
                $("#view-syllabus").css("background-color","#18a39c");

                $("#items a").css("color","black");
                $("#view-syllabus a").css("color","#fff");
            }
        });

    });
    //////////////////////////////////////
    ///View Syllabus
    ///Created Date  :
    ///Updated Date : 20-10-2017
    ///Created      :Abu
    //////////////////////////////////////
    $('#view-syllabus').on('click',function () {
        $("#loading_gif").show();
        $.ajax({
            url:"/syllabus/course/view",
            method:"GET",
            data:{

            },
            success:function (data,txtStataus,jqXHR) {
                console.log("succes");
                console.log(data);
                $("#loading_gif").hide();
                $("#body").html(data);
                $("#items li").css("background-color","transparent");
                $("#view-syllabus").css("background-color","#18a39c");

                $("#items a").css("color","black");
                $("#view-syllabus a").css("color","#fff");
            }
            //$("#items li").css("background-color","transparent");
            //$("#view-syllabus").css("background-color","#18a39c");
        });

    });
    //////////////////////////////////////
    ///Root Menu for Syllabus
    ///Created Date  :26-10-2017
    ///Updated Date : 26-10-2017
    ///Created      :Abu
    //////////////////////////////////////
    $('#rootsyllabus').on('click',function () {
        console.log("Syllabus");
        $("#loading_gif").show();
        $.ajax({
            url:"/syllabus/course/view",
            method:"GET",
            data:{

            },
            success:function (data,txtStataus,jqXHR) {
                console.log("succes");
                console.log(data);
                $("#loading_gif").hide();
                $("#body").html(data);

            }
            //$("#items li").css("background-color","transparent");
            //$("#view-syllabus").css("background-color","#18a39c");
        });
    })
    //////////////////////////////////////
    ///Root Menu for Course
    ///Created Date  :26-10-2017
    ///Updated Date : 26-10-2017
    ///Created      :Abu
    //////////////////////////////////////
    $('#rootcourse').on('click',function () {
        //var objSubParant=document.getElementById('subjectParant').value;
        var objcourse=document.getElementById('rootcourse').innerHTML;
        console.log(objcourse);
        $("#loading_gif").show();
        $.ajax({
            url:"/syllabus/course/sem/"+objcourse,
            method:"get",
            data:{

            },
            success:function (data,txtStataus,jqXHR) {
                console.log(objcourse.value+" Viw page enterd");
                $("#loading_gif").hide();
                $("#body").html(data);
            }

        });
    });
    //////////////////////////////////////
    ///Root Menu for Sem
    ///Created Date  :26-10-2017
    ///Updated Date : 26-10-2017
    ///Created      :Abu
    //////////////////////////////////////
    $('#rootsem').on('click',function () {
        var objcourse=document.getElementById('rootcourse').innerHTML;
        var objsem=document.getElementById('rootsem').innerHTML;
        $("#loading_gif").show();
        $.ajax({
            url:"/syllabus/course/sem/branch/"+objcourse+"_"+objsem,
            method:"get",
            data:{

            },
            success:function (data,txtStataus,jqXHR) {
                console.log(objsem+" view page enterd");
                $("#loading_gif").hide();
                $("#body").html(data);
            }

        });
    })
});
//////////////////////////////////////
///View Child of Course
///Created Date  :
///Updated Date : 20-10-2017
///Created      :Abu
//////////////////////////////////////
function parantCourse(objCourse){
    //console.log(objCourse.value);
    $("#loading_gif").show();
    $.ajax({
        url:"/syllabus/course/sem/"+objCourse.value,
        method:"get",
        data:{

        },
        success:function (data,txtStataus,jqXHR) {
            console.log(objCourse.value+" Viw page enterd");
            $("#loading_gif").hide();
            $("#body").html(data);
        }

    });

}
//////////////////////////////////////
///View Child of Sem
///Created Date  :
///Updated Date : 20-10-2017
///Created      :Abu
//////////////////////////////////////
function parantSem(objSem) {
    var course=document.getElementById('ParantCourse').value;
    $("#loading_gif").show();
    $.ajax({
        url:"/syllabus/course/sem/branch/"+course+"_"+objSem.value,
        method:"get",
        data:{

        },
        success:function (data,txtStataus,jqXHR) {
            console.log(objSem.value+" view page enterd");
            $("#loading_gif").hide();
            $("#body").html(data);
        }

    });
}
//////////////////////////////////////
///View Child of Branch
///Created Date  :
///Updated Date : 20-10-2017
///Created      :Abu
//////////////////////////////////////
function parantbranch(objBranch) {
    var brancch=document.getElementById('branchParant').value;
    $("#loading_gif").show();
    $.ajax({
        url:"/syllabus/course/sem/branch/subj/"+brancch+"_"+objBranch.value,
        method:"get",
        data:{

        },
        success:function (data,txtStataus,jqXHR) {
            console.log(objBranch.value+" view page enterd");
            $("#loading_gif").hide();
            $("#body").html(data);
        }

    });
}
//////////////////////////////////////
///Entering Edit Course
///Created Date  :
///Updated Date : 20-10-2017
///Created      :Abu
//////////////////////////////////////
function editCourse(objButton) {
    console.log(objButton.value);
    $("#loading_gif").show();
    $.ajax({
        url:"/syllabus/course/"+objButton.value,
        type: "get",
        data: {
            //date:$('button').val()
        },
        success:function (data,txtStataus,jqXHR) {
            console.log("Edit page enterd");
            //console.log(data);Ceated
            $("#loading_gif").hide();
            $("#body").html(data);
            $("#items li").css("background-color","transparent");
            $("#view-syllabus").css("background-color","#18a39c");

            $("#items a").css("color","black");
            $("#view-syllabus a").css("color","#fff");
        }

    });
}
//////////////////////////////////////
///Update Course Name
///Created Date  :
///Updated Date : 20-10-2017
///Created      :Abu
///Updated      :Abu
//////////////////////////////////////
function doeditCourse(){
    $("#loading_gif").show();
    var objCourse=document.getElementById('hiddencourse').value;
    var editedCourse=document.getElementById('txtCourse').value;
    //console.log(coursename);
    $.ajax({
        url:"/syllabus/course/"+objCourse,
        method:"POST",
        data: {
            newcoursename:editedCourse
        },
        success:function(data,txtStataus,jqXHR){
            $("#status").empty().text(data);
        }
    });

}
//////////////////////////////////////
///Download PDF
///Created Date  :
///Updated Date : 20-10-2017
///Created      :Abu
///                     not Compleated
//////////////////////////////////////
function dnldpdf(SubjectName) {
    $("#loading_gif").show();
    var course=document.getElementById('rootcourse').innerHTML;
    //console.log(course);
    var sem=document.getElementById('rootsem').innerHTML;
    var branch=document.getElementById('branch').innerHTML;
    var subject=SubjectName.value;
    $.ajax({
        url:"/syllabus/course/sem/branch/subj/download/"+subject,
        type:'get',
        data:{
            course:course,
            sem:sem,
            branch:branch,
            subject:subject
        },
        success:function (data) {
            $("#loading_gif").hide();
            window.open("/syllabus/course/sem/branch/subj/download/"+subject+"?course="+course+"&sem="+sem+"&branch="+branch+"&subject="+subject);


        }
    });

}
//////////////////////////////////////
///Button Rest
///Created Date  :
///Updated Date : 20-10-2017
///Created      :Abu
//////////////////////////////////////
function btnReset() {
    alert("Reset All Course Details");
    clearCourse();
}
//////////////////////////////////////
///PDF Uploading Loader For CLient Side
///Created Date  :
///Updated Date : 20-10-2017
///Created      :Abu
//////////////////////////////////////
function pdfloader(pesnt) {
    var objloder = document.getElementById("myBar");
    var width = pesnt;
    var id = setInterval(frame,0);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            console.log(width);
            objloder.style.width = pesnt + '%';
            objloder.innerHTML = pesnt * 1  + '%';
        }
    }
}
//////////////////////////////////////
///Create Course (add course /add semester/add Branch/
///Created Date  :10-10-2017
///Updated Date : 06-11-2017
///Created      :Abu
//////////////////////////////////////
function docr() {
    $("#loading_gif").show();
    //var i,x,y;
    /* Loader not working */
    //debugger
    $("#status").empty().text("Course Creating...");
    var objCourse=document.getElementById('txtCourse').value.trim();
    $.ajax({
        url:"/syllabus/course/new",
        method:"post",
        data:{
            course:objCourse

        },success:function (data) {
            if(data!='Course Alredy Exists') {
                for (var i = 0; i < $('#semTable input.semobj').length; i++) {
                    var sem = $('#semTable input.semobj')[i].value.trim();
                    $.ajax({
                        url: "/syllabus/course/sem/new",
                        method: "post",
                        data: {
                            course: objCourse,
                            sem: sem
                        },
                        success: function (data) {
                            //debugger;
                            for (var x = 0; x < $('#semTable input.semobj').length; x++) {
                                var objsem = $('#semTable input.semobj')[x].value.trim();
                                //debugger;
                                for ( var y = 0; y < $('#brTable input.semobj').length; y++) {
                                    var br = $('#brTable input.semobj')[y].value.trim();
                                    //var ansbr = br.replace(/(^[\s]+|[\s]+$)/g, '');
                                    //alert(br);
                                    $.ajax({
                                        url: "/syllabus/course/sem/branch/new",
                                        method: "post",
                                        data: {
                                            course: objCourse,
                                            sem: objsem,
                                            branch: br
                                        },
                                        success: function (respone, txtStataus, jqXHR) {
                                        }

                                    });

                                }

                            }

                            if($('#semTable input.semobj').length==x&&$('#brTable input.semobj').length==y){
                                clearCourse();
                            }
                        }

                    });
                }
                $("#status").empty().text(data);
                alert("Course Created Succesfully");
            }
            else{
                $("#status").empty().text(data);
            }

        }
    });
}
//////////////////////////////////////
///Function For All Text Field and Table
///Created Date  :10-10-2017
///Updated Date : 20-10-2017
///Created      :Abu
//////////////////////////////////////
function clearCourse(){
    $('#txtCourse').val("");
    $("#loading_gif").hide();
    $('#sem-first-tahbleRow').val("");
    $('#semTable tr.classgenrow').remove();
    $('#brTable tr.classgenrow').remove();
    $('#br-first-tahbleRow').val("");
}
//////////////////////////////////////
///Search Syllabus
///Created Date  :26-10-2017
///Updated Date : 26-10-2017
///Created      :Abu
//////////////////////////////////////
function BindControls() {
    $.ajax({
        url:"/syllabus/find",
        type:"get",
        data:{},
        success:function (data) {
            //var syllabus = [];
            var syllabus=data;
            //console.log(syllabus);
            $('#tbserch').autocomplete({
                source: syllabus,
                minLength: 0,
                scroll: true
            }).focus(function() {
                $(this).autocomplete("search", "");

            });
        }
    });

}