function Contact() {
    return (
        <>
      
                <div className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center mb-8" style={{color:"black"}}>Contact Us</h2>
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h3 style={{color:"black"}} className="text-xl font-bold mb-4">Get in Touch</h3>
                            <span className="mb-4" style={{color:"black"}}>
                                We&apos d love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                            </span>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <h3 className="text-xl font-bold mb-4" style={{color:"black"}}>Contact Info</h3>
                            <span className="mb-2" style={{color:"black"}}>
                                <i className="fas fa-map-marker-alt mr-2" style={{color:"black"}}></i>Thazhe Kottakkal, Kottakkal, Kerala 676503
                            </span>
                            <span className="mb-2">
                                <i style={{color:"black"}} className="fas fa-phone-alt mr-2"></i ><span style={{color:"black"}}>
                                     9990099950
                                </span>
                               
                            </span>
                            <span className="mb-2" style={{color:"black"}}>
                                <i className="fas fa-envelope mr-2"></i>info@smazio.com
                            </span>
                            <h3 style={{color:"black"}} className="text-xl font-bold mt-8 mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
}

export default Contact;
