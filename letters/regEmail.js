module.exports = (email) => {
  return {
    to: email,
    subject: "Регистрация в Портале РКСИ",
    html: ` <h2>Ваша заявка была принята!<h2>
            <p>После подтверждения - Вам будет открыт доступ!</p>
            <p>Данное письмо не требует ответа.</p>
    `
  }
};