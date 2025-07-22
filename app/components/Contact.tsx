export default function Contact() {
  return (
    <div id="contact" className="w-full h-screen py-16 px-6 bg-blue-50 text-center">
      <h2 className="text-2xl font-bold mb-4">Vamos conversar?</h2>
      <p className="mb-6">Entre em contato para tirar dúvidas ou solicitar um orçamento.</p>
      <a
        href="mailto:seuemail@gmail.com"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Fale comigo
      </a>
    </div>
  );
}
