import {useState} from 'react'

function Contact() {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form handling logic here (e.g., API call or email service)
    console.log(formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  return (
    <div  className='h-screen py-5 flex justify-center w-screen overflow-hidden'>
      <div className='w-[50%] bg-[#2a2930]  rounded-md text-zinc-200 px-10 py-5 '>
        <h1 className='text-4xl my-2 text-center font-bold text-zinc-200'>Contact Us</h1>
        <p className='text-center text-zinc-400'> Have questions or suggestions? Drop us a message below.</p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div >
            <label className="block mb-2 text-md font-medium" >Name</label>
          <input type="text"  className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-[#6556cd]" placeholder='Name' name="name"  />
          </div>
          <div>
            <label  className="block mb-2 text-md font-medium" >Email</label>
          <input type="email" name="email" placeholder='Email' className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-[#6556cd]" />
          </div>
           <div>
            <label className="block mb-2 text-md font-medium" >Subject</label>
          <input type="text" name="subject" placeholder='Subject' className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-[#6556cd]" />
          </div>
           <div>
            <label  className="block mb-2 text-md font-medium">Message</label>
           <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 h-20 resize-none bg-zinc-700 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-[#6556cd]"
              placeholder="Write your message here..."
            />          </div>
             <button
            type="submit"
            className="px-6 py-2 bg-[#6556cd] rounded hover:bg-[#5042ac] duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact