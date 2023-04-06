const regex = () => ({

  email_on_change: /^[^\s@`']*@*[^\s@`']*(\.+[^\s@`']+)*$/,
  email: /^[^\s@`']+@[^\s@`']+(\.+[^\s@`']+)+$/,

  text_on_change: /^[^`"']*$/,
  text: /^[^`"']+$/,

  number_on_change: /^[0-9]+$/,
  number: /^[0-9]+$/,

  // password_on_change: /^[0-9]+$/,
  password: /^[^`']{8,}$/,

})

export { regex }
