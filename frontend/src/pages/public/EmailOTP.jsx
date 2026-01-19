import React from 'react'

export default function EmailOTP() {
  return (
    <>
      <body class="bg-gray-100 flex items-center justify-center min-h-screen">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h1 class="text-2xl font-bold mb-4">Verify OTP</h1>
    <p class="mb-6">Enter the OTP sent to your email: <span class="font-bold text-blue-600">123456</span></p>

    <form action="p" method="POST">
      <div class="mb-4">
        <input type="text" name="otp" placeholder="Enter OTP" required
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        </input>
      </div>
      <button type="submit" name="verify"
                class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300">
                Verify OTP
            </button>
    </form>

    <form action="" method="POST" class="mt-4">
      <button type="submit" name="resend"
                class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Resend OTP
            </button>
    </form>

    <p class="text-sm text-gray-500 mt-4">
      OTP expires in <span id="countdown">90</span> seconds.
    </p>
  </div>

  
</body>
    </>
  )
}




