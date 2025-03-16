let generatedOTP = "";

function sendOTP() {
    const mobile = document.getElementById("mobile").value;

    if (mobile.length !== 10 || isNaN(mobile)) {
        document.getElementById("message").innerText = "❌ Invalid Mobile Number!";
        return;
    }

  
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    
    alert("Your OTP is: " + generatedOTP);
    document.getElementById("message").innerText = "✅ OTP Sent Successfully!";
}

function verifyOTP() {
    const enteredOTP = document.getElementById("otp").value;

    if (enteredOTP === generatedOTP) {
        document.getElementById("message").innerText = "✅ OTP Verified Successfully!";
    } else {
        document.getElementById("message").innerText = "❌ Incorrect OTP!";
    }
}