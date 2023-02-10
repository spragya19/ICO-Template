import React from 'react'

const Contact = () => {
  return (
    <section className=" py-10 contact mt-22 pb-20" id="contact">
    <div className="container mx-auto px-3  " id="contact">
      <div class=" items-center">
        <div
          className="text-[white]  justify-center items-center  ml-10 md:mb-0 "
          data-aos="zoom-in"
        >
          <p className=" text-[#374574] text-5xl font-semibold text-center mt-28 ">
           Get In Touch
          </p>
         
        </div>
      </div>
      <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div ><p className='text-[#637097]'>Any question? Reach out to us and we’ll get back to you shortly.</p>
  <ul class="list-none">
 
 <li className='text-[#637097] mt-6'>+44 0123 4567</li> 
<li className='text-[#637097] mt-6'>info@company.com</li>
<li className='text-[#637097] mt-6'>oin us on Telegram</li>
</ul>
  </div>
 
  <div class="col-span-2"></div>
  
</div>
    
    </div>
  </section>
  )
}

export default Contact