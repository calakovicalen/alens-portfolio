import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [t] = useTranslation("global");

  useEffect(
    function () {
      if (!showModal) return;

      const timer = setTimeout(() => {
        setShowModal(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    },
    [showModal]
  );

  function submitHandler(e) {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setInvalidInput(true);
    } else {
      setInvalidInput(false);
      setShowModal(true);
    }
  }

  return (
    <section id="contact" className="form-container">
      <div className="form-container__heading">
        <h2>{t("form.h2")}</h2>
        <p>{t("form.paragraph")}</p>
      </div>

      <form className="form" onSubmit={submitHandler}>
        <input
          className={`form__input ${
            invalidInput && name.length <= 0 ? "form__input--invalid" : ""
          }`}
          placeholder={t("form.name")}
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
        />
        <div className="label-placeholder">
          {invalidInput && name.length <= 0 && (
            <label className="form__label">{t("form.form-name")}</label>
          )}
        </div>
        <input
          className={`form__input ${
            invalidInput && email.length <= 0 ? "form__input--invalid" : ""
          }`}
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
        />
        <div className="label-placeholder">
          {invalidInput && email.length <= 0 && (
            <label className="form__label">{t("form.form-email")}</label>
          )}
        </div>
        <textarea
          className={`form__textarea ${
            invalidInput && message.length <= 0 ? "form__textarea--invalid" : ""
          }`}
          placeholder={t("form.message")}
          value={message}
          onChange={e => setMessage(e.target.value)}
          type="text"
        />
        <div className="label-placeholder">
          {invalidInput && message.length <= 0 && (
            <label className="form__label">{t("form.form-message")}</label>
          )}
        </div>
        <Button>{t("form.button")}</Button>
      </form>
      {showModal && <Modal name={name} email={email} message={message} />}
    </section>
  );
}

export default Form;
