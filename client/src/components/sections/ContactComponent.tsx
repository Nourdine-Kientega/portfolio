export const ContactComponent = () => {
  return (
    <section className="contact" id="contact">
        <h2 className="heading">Me <span>Contacter!</span></h2>

        <form action="#">
            <div className="input-box">
                <input type="text" name="firstname" placeholder="Votre nom" required />
                <input type="text" name="lastname" placeholder="Votre prénom" required />
            </div>
            <div className="input-box">
                <input type="email" name="email" placeholder="Votre adresse email" required />
                <input type="text" name="subject" placeholder="Le sujet de votre message (facultatif)" required />
            </div>
            <textarea name="message" id="" cols={30} rows={10} placeholder="Écrivez votre message ici.." required ></textarea>
            <input type="submit" value="Envoyer le message" className="btn" />
        </form>
    </section>
  )
};
