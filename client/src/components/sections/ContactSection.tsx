import { FormEvent, useState } from "react";
import PanelComponent from "../utils/Panel";

export const ContactSection = () => {

  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; title: string; description: string } | null>(null);

  const closeNotification = () => {
    setNotification(null);
  };

  const handleChange = (e: any) => {

    const { name , value} = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault();
    setLoading(true);
    setNotification(null);

    try {
      const response = await fetch('/api/contact/', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if(response.ok) {
        setNotification({
          type: 'success',
          title: 'Merci de m\'avoir contacté !',
          description: 'Votre message a été envoyé avec succès, Vous recevrez une réponse dès que possible.',
        });
      } else if (data.emailExists) {
        setNotification({
            type: 'error',
            title: 'L\'adresse e-mail existe déjà',
            description: 'L\'email que vous avez fourni est déjà enregistré. Veuillez en utiliser un autre.',
        });
    } else {
        // const errorText = await response.text();
        // console.error('Server error:', response);
        setNotification({
          type: 'error',
          title: 'Erreur',
          description: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.',
        });
      }
      
    } catch (error) {
      console.error('Network error:', error);
      setNotification({
        type: 'error',
        title: 'Problème de réseau',
        description: 'Une erreur réseau est survenue. Veuillez vérifier votre connexion et réessayer.',
      });
    } finally {
      setFormData({ firstname: '', lastname: '', email: '', subject: '', message: '' });
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact" onSubmit={handleSubmit}>
      <h2 className="heading">
        Me <span>Contacter!</span>
      </h2>

      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}

{notification && (
        <div className="overlay">
          <PanelComponent
            type={notification.type}
            title={notification.title}
            description={notification.description}
            onClose={closeNotification}
          />
        </div>
      )}

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
