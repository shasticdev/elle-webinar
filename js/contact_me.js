// first_name: Alvaro
// last_name: Alday
// email: dev@shastic.com
// organization: shastic
// source: landingi_LOS_webinar_July
// event_name: SMS Integrations with MeridianLink
// event_time: 11:00 am PT, 2:00 pm ET
// event_date: July 18, 2019
// event_link: https://zoom.us/wc/182568956/join
// event_dialin: 1-669-900-6833
// event_meeting_id: 182-568-956
// event_host: Landry Yoder
// event_link_2: https://zoom.us/j/182568956
// _name_: 
// _uid: sLqfL63Hh3a6h6qRN6b2uTsoMGcHcxEF
// _redirect: 

$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var first_name = $("input#first_name").val();
            var last_name = $("input#last_name").val();
            var email = $("input#email").val();
            var organization = $("input#organization").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://hooks.zapier.com/hooks/catch/2966969/ze5jcx/",
                type: "POST",
                data: {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    organization: organization,
                    event_name: "SMS Integrations with MeridianLink",
                    event_time: "11:00 am PT, 2:00 pm ET",
                    event_date: "July 18, 2019",
                    event_link: "https://zoom.us/wc/182568956/join",
                    event_dialin: "1-669-900-6833",
                    event_meeting_id: "182-568-956",
                    event_host: "Landry Yoder",
                    event_link_2: "https://zoom.us/j/182568956"
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
