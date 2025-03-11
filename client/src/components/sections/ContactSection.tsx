import { FormEvent, useState } from "react";

export const ContactSection = () => {

  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', subject: '', message: '' });

  const handleChange = (e: any) => {

    const { name , value} = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/server/contact/', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if(response.ok) {
        alert('Message envoyé avec succès !');
        setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '' });
      }else {
        const errorText = await response.text();
        console.error('Erreur serveur:', errorText);
        throw new Error(`Erreur serveur: ${response.status} - ${errorText}`);
      }
      
    } catch (error) {
      console.error('Erreur réseau:', error);
    }

  };

  return (
    <section className="contact" id="contact" onSubmit={handleSubmit}>
      <h2 className="heading">
        Me <span>Contacter!</span>
      </h2>

      <form >
        <div className="input-box">
          <input
            type="text"
            name="firstname"
            placeholder="Votre nom"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Votre prénom"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Votre adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Le sujet de votre message (facultatif)"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          id=""
          cols={30}
          rows={10}
          placeholder="Écrivez votre message ici.."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" value="Envoyer votre message" className="btn" />
      </form>
    </section>
  );
};
