module.exports = (email) => {
  return {
    to: email,
    subject: "Портал РКСИ",
    html: ` <h2>Активация аккаунта!<h2>
            <p>Ваш аккаунт активирован, теперь можете пользоваться Порталом!</p>
            <p>Данное письмо не требует ответа.</p>
    `
  }
};