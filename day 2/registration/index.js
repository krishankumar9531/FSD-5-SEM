if (typeof document === 'undefined') {
    console.log('This file uses browser form elements. Open index.html in a web browser.');
} else {
    const form = document.getElementById('registrationForm');
    const password = document.getElementById('Password');
    const confirmPassword = document.getElementById('Confirm_Password');
    const message = document.getElementById('message');
    const userDetails = document.getElementById('userDetails');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        message.textContent = '';

        const name = document.getElementById('Name').value.trim();
        const email = document.getElementById('Email').value.trim();
        const branch = document.getElementById('Branch').value.trim();
        const course = document.getElementById('Course').value.trim();
        const section = document.getElementById('Section').value.trim();

        if (!name || !email || !branch || !course || !section || !password.value || !confirmPassword.value) {
            message.textContent = 'Please fill in every field.';
            return;
        }

        if (password.value !== confirmPassword.value) {
            message.textContent = 'Password and confirm password must match.';
            return;
        }

        const user = {
            name: name,
            email: email,
            branch: branch,
            course: course,
            section: section
        };

        document.getElementById('outputName').textContent = user.name;
        document.getElementById('outputEmail').textContent = user.email;
        document.getElementById('outputBranch').textContent = user.branch;
        document.getElementById('outputCourse').textContent = user.course;
        document.getElementById('outputSection').textContent = user.section;
        userDetails.hidden = false;
        message.textContent = 'Registration submitted successfully.';
        console.log(user);
    });
}
