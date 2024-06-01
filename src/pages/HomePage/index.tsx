import Slider from "../../components/Slider";
import ProductList from "../../components/ProductList";
import SubscribeNewsletterForm from "../../components/SubcribeNewsletterForm";

const HomePage = () => {
  return (
    <>
      <Slider></Slider>
      <section className='section_one_wrapper'>
        <div className='sections section_one flex py-[50px]'>
          <div className='section_one_img flex-full'>
            <img src='/images/category-img-1.jpg' alt='' />
          </div>
          <div className='section_one_content flex-full'>
            <div className='section_subtitle'>Our Services</div>
            <h2 className='section_title'>Responsive &amp; Professional</h2>
            <p className='section_desc'>
              We go the extra mile on every project. The value we provide
              clients comes from our level of skill and performance, as well as
              our knowledge and professionalism. Rest assured, we put the same
              level of energy into every project we take on.
            </p>
            <div className='section_about_hotline'>
              <strong className='hotline_title'>Call us today</strong>
              <strong className='hotline_number'>
                <i className='fa fa-phone'></i> 1900-111000
              </strong>
              <p className='section_desc'>
                We're available 24/7, 365 days a year.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='section_two_wrapper'>
        <div className='sections section_two'>
          <h2 className='section_title text-center'>What We Offer</h2>
          <ul className='homeproduct clearfix' id='_loadList'>
            <li>
              <img
                className='photo'
                alt='Lighting Upgrades'
                src='/images/lighting-upgrades-thumb-G3.jpg'
              />
              <div className='content'>
                <h3>
                  <a href='lighting-upgrades' title='Lighting Upgrades'>
                    Lighting Upgrades
                  </a>
                </h3>
                <p className='section_desc'>
                  Electrical panel maintenance, therefore, should be part of
                  your regular routine.
                </p>
                <div className='section_btn'>
                  <a
                    className='readmore'
                    href='lighting-upgrades'
                    title='Lighting Upgrades'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <img
                className='photo'
                alt='Electrical repairs'
                src='/images/electrical-repairs-thumb-G1.jpg'
              />
              <div className='content'>
                <h3>
                  <a href='electrical-repairs' title='Electrical repairs'>
                    Electrical repairs
                  </a>
                </h3>
                <p className='section_desc'>
                  Electrical repairs should always be handled by a professional
                  electrician
                </p>
                <div className='section_btn'>
                  <a
                    className='readmore'
                    href='electrical-repairs'
                    title='Electrical repairs'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <img
                className='photo ls-is-cached lazyloaded'
                alt='Surge Protection'
                src='/images/surge-protection-thumb-G4.jpg'
              />
              <div className='content'>
                <h3>
                  <a href='surge-protection' title='Surge Protection'>
                    Surge Protection
                  </a>
                </h3>
                <p className='section_desc'>
                  An electrical surge can happen for a number of reasons,
                  including lightning strikes.
                </p>
                <div className='section_btn'>
                  <a
                    className='readmore'
                    href='surge-protection'
                    title='Surge Protection'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <ProductList></ProductList>
      <SubscribeNewsletterForm></SubscribeNewsletterForm>
    </>
  );
};

export default HomePage;
