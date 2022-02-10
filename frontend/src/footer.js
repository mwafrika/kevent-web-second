import {
  FaBeer,
  FaTwitter,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
const footer = () => {
  return (
    <section className='flex w-full h-80 md:h-auto  lg:h-auto xl:h-auto bg-slate-600 xxxs:h-auto xxs:h-auto xs:h-auto overflow-x-hidden p-5 xxxs:flex-col xs:flex-col  xxxs:justify-center xs:justify-center xxxs:items-center xxs:flex-col xxs:justify-center xxs:items-center md:flex-col'>
      <div className='w-4/5 mx-auto py-auto flex flex-row py-10 xxxs:flex-col xs:flex-col xxxs:justify-center xxxs:gap-y-5 xxs:flex-col xxs:justify-center xxs:gap-y-5 xs:gap-y-5'>
        <div className='w-80 h-30'>
          <h2 className=' text-white font-bold text-lg mb-3'>Services</h2>
          <ul className='flex flex-col list-none'>
            <li>
              <a href='#' className='text-slate-300 font-medium'>
                Web design
              </a>
            </li>
            <li>
              <a href='#' className='text-slate-300 font-medium'>
                Web development
              </a>
            </li>
            <li>
              <a href='#' className='text-slate-300 font-medium'>
                Hosting
              </a>
            </li>
          </ul>
        </div>
        <div className='w-80 h-30'>
          <h2 className=' text-white font-bold text-lg mb-3'>A propos</h2>
          <ul>
            <li>
              <a href='#' className='text-slate-300 font-medium'>
                Entreprise
              </a>
            </li>
            <li>
              <a href='#' className='text-slate-300 font-medium'>
                Web development
              </a>
            </li>
            <li>
              <a href='#' className='text-slate-300 font-medium'>
                Hosting
              </a>
            </li>
          </ul>
        </div>
        <div className='w-96 h-30 xxxs:h-auto xxxs:w-11/12 xxs:h-auto xs:h-auto xxs:w-11/12 xs:w-full'>
          <h2 className=' text-white font-bold text-lg mb-3'>Kevent</h2>
          <p className='text-slate-300 font-medium break-words'>
            lPraesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
            ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
            lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
          </p>
        </div>
      </div>
      <div className='flex flex-row mx-auto my-0 w-full justify-center gap-8 pb-5 xxs:gap-8 xxs:pb-5 xxs:justify-center'>
        <FaTwitter className='text-white hover:text-indigo-500 text-3xl cursor-pointer' />
        <FaFacebookF className='text-white hover:text-indigo-500 text-3xl cursor-pointer' />
        <FaInstagram className='text-white hover:text-indigo-500 text-3xl cursor-pointer' />
      </div>
      <h3 className='text-slate-400 text-center font-medium'>kevent@2022</h3>
    </section>
  );
};

export default footer;
