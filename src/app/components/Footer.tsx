function Footer() {
    return ( <>
    <footer className="bg-green-600 text-white py-16">
   <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div className="text-center md:text-left mb-8 md:mb-0">
     <h1 className="text-2xl font-bold">
      smazio
     </h1>
     <p className="text-sm">
      Smile Designers
     </p>
     <p className="mt-4 max-w-md">
      A passionate group of dentists working together to spread happiness all over the world through smazio! We started our journey together in 2013
     </p>
     <button className="mt-4 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
      ABOUT US
     </button>
    </div>
    <div className="text-center md:text-left">
     <h2 className="text-xl font-bold mb-4">
      Contact info:
     </h2>
     <p>
      Thazhe Kottakkal, 
     </p>
     
  
     <p>
     Kottakkal, Kerala 676503
     </p>
     <p className="mt-4">
      9990099950
     </p>
    </div>
   </div>
  </footer></> );
}

export default Footer;