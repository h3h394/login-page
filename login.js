const loginContainer = document.querySelector('.loginContainer'),
      createAccount = document.querySelector('.createAccount');


createAccount.addEventListener('click', () => {
    loginContainer.innerHTML = `
    <div class="signupPage">
    <h2>Signup</h2>
    <div class="row">
    <i class="fas fa-user fa-lg"></i>
    <input type="text" name="Name" placeholder="Name">
    </div>
    <div class="row">
        <i class="fas fa-user fa-lg"></i>
        <input type="text" name="Username" placeholder="Username">
    </div>
    <div class="row">
        <i class="fas fa-lock fa-lg"></i>
        <input type="password" name="Password" placeholder="Password">
    </div>
    <div class="row">
        <i class="fas fa-envelope fa-lg"></i>
        <input type="email" name="Email" placeholder="Email">
    </div>
    <div class="row">
    <button class="signupBtn btn">Sign Up</button>
    </div>
    </div>
    `;
    loginContainer.style.background = 'rgba(27, 13, 104, 0.38)';
});