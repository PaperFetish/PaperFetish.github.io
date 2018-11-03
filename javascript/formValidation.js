function validateContactForm() {

    if (document.forms["contactForm"]["firstname"].value == "" && document.forms["contactForm"]["lastname"].value == "" && document.forms["contactForm"]["email"].value == "" && document.forms["contactForm"]["inquiry"].value == "") {
        alert("Please fill all boxes");
        return false;
    }
    else if (document.forms["contactForm"]["firstname"].value == "" || document.forms["contactForm"]["lastname"].value == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (document.forms["contactForm"]["email"].value == "") {
        alert("Email must be filled out");
        return false;
    }
    else if (document.forms["contactForm"]["inquiry"].value == "") {
        alert("Please write an inquiry in the inquiry box");
        return false;
    } else if ((document.forms["contactForm"]["inquiry"].value).length < 50 || (document.forms["contactForm"]["inquiry"].value).length > 1000) {
        alert("Please write an inquiry more than 50 characters and less than 1000 characters");
        return false;
    } else {
        alert("Thank you for your feedback.");
    }
}

function validateSubscriptionForm() {
    if (document.forms["subscriptionForm"]["email"].value == "") {
        alert("Email must be filled out");
        return false;
    }
    else
    {
        alert("Thank you for subscribing to our newsletter, you will receive emails on our upcoming deals!");
    }
}