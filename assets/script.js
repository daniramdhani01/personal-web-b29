function submitForm() {
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if (name == '') {
        alert('input name')
    }
    else if (email == '') {
        alert('input email')
    }
    else if (phone == '') {
        alert('input phone number')
    }
    else if (subject == '') {
        alert('Choose Subject')
    }
    else if (message == '') {
        alert('input message')
    }
    else {

        // console.log(`Name: ${name}`)
        // console.log(`Email: ${email}`)
        // console.log(`Phone: ${phone}`)
        // console.log(`Subject: ${subject}`)
        // console.log(`Message: ${message}`)

        // ********** */ send email *********
        let emailReceiver = 'banghaji@gmail.com'
        let a = document.createElement('a')
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, ${message}. you can contact me on ${phone}`
        a.click()

        // let dataObject = {
        //     name: name,
        //     email: email,
        //     phoneNumber: phone,
        //     subject: subject,
        //     message: message
        // }
        // console.log(dataObject)
    }
    document.getElementById("input-name").value = ""
    document.getElementById("input-email").value = ""
    document.getElementById("input-phone").value = ""
    document.getElementById("input-subject").value = ""
    document.getElementById("input-message").value = ""
}