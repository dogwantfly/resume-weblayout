

function App() {
  return (
    <>
      <main className="py-40">
        <section className='container mx-auto'>
        <h1 className='text-9xl leading-tight drop-shadow'>VITO</h1>
        <img className="d-block mx-auto" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week1/vito.png?raw=true" alt="vito" />

        <h2 className='xl:w-1/2 ms-auto text-9xl leading-tight'>RESUME</h2>
        </section>
       
        <div className="bg-secondary py-12">
          <section className="container mx-auto">
          <p className='xl:w-1/2 ms-auto text-3xl'>
          {"I'm Vito, a UI Designer with 5+ years of experience. I create visually appealing interfaces for web and mobile apps. Proficient in Sketch, Adobe XD, Figma, HTML, CSS, and JavaScript. I enjoy collaborating with others to create high-quality products."}
        </p>
          </section>
        
        </div>
        <section className="container mx-auto pt-20">
        <ul className='xl:w-1/2 text-2xl grid gap-y-2'>
          <li>
            <h3 className='border-b-[3px] border-b-primary text-primary text-3xl mb-4'>
              Vito Evans
            </h3>
            <ul>
              <li>456 Walnut Avenue, Someville, USA</li>
              <li>
                <a href="tel:++1 123 456 7890" className='hover:text-primary'>+1 123 456 7890</a>
              </li>
              <li>
                <a href="mailto:info@hexschool.com" className='hover:text-primary'>info@hexschool.com</a>
              </li>
              <li>
                <a href="www.infohexschool.com" className='hover:text-primary'>www.infohexschool.com</a>
              </li>
            </ul>
          </li>
          <li>
            <h3 className='border-b-[3px] border-b-primary text-primary text-3xl mb-4'>
              Education
            </h3>
            <ul className='text-2xl grid gap-y-4'>
              <li>
                <time className='text-gray-400 text-xl'>
                  2014-2018
                </time>
                <p>
                Bachelor of Science in Business Administration, University of California, Los Angeles
                </p>
              </li>
              <li>
                <time className='text-gray-400 text-xl'>
                  2012-2014
                </time>
                <p>
                Associate of Arts in Graphic Design, San Francisco State University
                </p>
              </li>
              <li>
                <time className='text-gray-400 text-xl'>
                  2008-2012
                </time>
                <p>High School Diploma, Lincoln High School</p>
              </li>
            </ul>
          </li>
          <li>
            <h3 className='border-b-[3px] border-b-primary text-primary text-3xl mb-4'>
              Work
            </h3>
            <ul className='text-2xl grid gap-y-4'>
              <li>
                <time className='text-gray-400 text-xl'>
                  2018-2021
                </time>
                <p>
                Marketing Manager, ABC Company
                </p>
              </li>
              <li>
                <time className='text-gray-400 text-xl'>
                  2016-2018
                </time>
                <p>
                Sales Associate, XYZ Corporation
                </p>
              </li>
              <li>
                <time className='text-gray-400 text-xl'>
                  2014-2016
                </time>
                <p>
                Customer Service Representative, QRS Inc.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h3 className='border-b-[3px] border-b-primary text-primary text-3xl mb-4'>
              Awards
            </h3>
            <ul className='text-2xl grid gap-y-3'>
              <li>
                Best in Show Award, National Advertising Awards, 2020
              </li>
              <li>
                Honorable Mention, International Design Competition, 2019
              </li>
              <li>
                {"People's Choice Award, Local Art Exhibition, 2018"}
              </li>
            </ul>
          </li>
        </ul>
        </section>
        
      </main>
      <footer className="flex items-center justify-center bg-black py-16">
        <ul className='flex gap-x-10'>
          <li>
            <a className="hover:drop-shadow-lg" href="#">
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week1/fb.png?raw=true" alt="facebook" />
            </a>
          </li>
          <li>
            <a className="hover:drop-shadow-lg" href="#">
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week1/instagram.png?raw=true" alt="instagram" />
            </a>
          </li>
          <li>
            <a className="hover:drop-shadow-lg" href="#">
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023week1/line.png?raw=true" alt="line" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
