
let default_msg = {
      status_code : 400,
      custom_msg : 'Bad Request',
      type : 'default_msg'
}

let no_data_found = {
      status_code : 400,
      custom_msg : 'No data found',
      type : 'no_data_found'
}

let invalid_credentials = {
      status_code : 400,
      custom_msg : 'Inavalid login details',
      type : 'invalid_credentials'
}

let invalid_password = {
      status_code : 400,
      custom_msg : 'password entered is incorrect.',
      type : 'invalid_password'
}

let unauthorized = {
      status_code : 400,
      custom_msg : 'you are not authorized to perform this action.',
      type : 'unauthorized'
}

let data_already_exists = {
      status_code : 400,
      custom_msg : 'This phone number or email address, alreday exists.',
      type : 'data_already_exists'
}

let email_already_exists = {
      status_code : 400,
      custom_msg : 'This email address alreday exists, Please try again.',
      type : 'email_already_exists'
}

let phone_no_already_exists = {
      status_code : 400,
      custom_msg : 'This phone number alreday exists Please try again.',
      type : 'phone_no_already_exists'
}

let invalid_otp = {
      status_code : 400,
      custom_msg : 'Invalid OTP',
      type : 'invalid_otp'
}

let otp_not_verified = {
      status_code : 400,
      custom_msg : 'OTP not verified',
      type : 'otp_not_verified'
}

let invalid_project_id = {
      status_code : 400,
      custom_msg : 'invalid project id provided',
      type : 'invalid_project_id'
}

let invalid_task_id = {
      status_code : 400,
      custom_msg : 'invalid task id provided',
      type : 'invalid_task_id'
}

let invalid_referal_code = {
      status_code : 400,
      custom_msg : 'invalid referal code provided',
      type : 'invalid_referal_code'
}

let min_withdraw_amount = {
      status_code : 400,
      custom_msg : 'your wallet amount in greater than minimum withdraw amount',
      type : 'min_withdraw_amount'
}

export {
      default_msg,
      no_data_found,
      invalid_credentials,
      invalid_password,
      unauthorized,
      data_already_exists,
      email_already_exists,
      phone_no_already_exists,
      invalid_otp,
      otp_not_verified,
      invalid_project_id,
      invalid_task_id,
      invalid_referal_code,
      min_withdraw_amount
}