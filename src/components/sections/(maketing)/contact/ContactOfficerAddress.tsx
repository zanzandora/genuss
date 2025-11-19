import { PinIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const ContactOfficerAddress = () => {
  const tFooter = useTranslations('footer.hotelAddress.offices');

  return (
    <div id='office-addresses' className='mx-auto mt-20 max-w-6xl'>
      <h1 className='mb-6 text-center text-h2 uppercase sm:mb-8 lg:mb-10'>
        {tFooter('title')}
      </h1>
      <div className='grid w-full grid-cols-1 gap-8 text-paragraph-m font-normal sm:grid-cols-2 sm:gap-16'>
        <div>
          <div className='space-y-4 py-4'>
            <h2 className='-ml-2 flex text-h3'>
              <PinIcon className='mr-2' />
              {tFooter('cities.hanoi.name')}
            </h2>
            <div className='space-y-2'>
              <div className='tracking-normal'>
                {tFooter('cities.hanoi.offices.office1')}
              </div>
              <div className='tracking-normal'>
                {tFooter('cities.hanoi.offices.office2')}
              </div>
            </div>
          </div>

          <div className='space-y-4 py-4'>
            <h2 className='-ml-2 flex text-h3'>
              <PinIcon className='mr-2' />
              {tFooter('cities.hochiminh.name')}
            </h2>
            <div className='tracking-normal'>
              {tFooter('cities.hochiminh.offices.office1')}
            </div>
          </div>

          <div className='space-y-4 py-4'>
            <h2 className='-ml-2 flex text-h3'>
              <PinIcon className='mr-2' />
              {tFooter('cities.haiphong.name')}
            </h2>
            <div className='space-y-2'>
              <div className='tracking-normal'>
                {tFooter('cities.haiphong.offices.office1')}
              </div>
              <div className='tracking-normal'>
                {tFooter('cities.haiphong.offices.office2')}
              </div>
              <div className='tracking-normal'>
                {tFooter('cities.haiphong.offices.office3')}
              </div>
            </div>
          </div>

          <div className='space-y-4 py-4'>
            <h2 className='-ml-2 flex text-h3'>
              <PinIcon className='mr-2' />
              {tFooter('cities.quangninh.name')}
            </h2>
            <div className='space-y-2'>
              <div className='tracking-normal'>
                {tFooter('cities.quangninh.offices.office1')}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='space-y-4 py-4'>
            <h2 className='-ml-2 flex text-h3'>
              <PinIcon className='mr-2' />
              {tFooter('cities.bacninh.name')}
            </h2>
            <div className='space-y-2'>
              <div className='tracking-normal'>
                {tFooter('cities.bacninh.offices.office1')}
              </div>
            </div>
          </div>

          <div className='space-y-4 py-4'>
            <h2 className='-ml-2 flex text-h3'>
              <PinIcon className='mr-2' />
              {tFooter('cities.ninhbinh.name')}
            </h2>
            <div className='space-y-2'>
              <div className='tracking-normal'>
                {tFooter('cities.ninhbinh.offices.office1')}
              </div>
              <div className='tracking-normal'>
                {tFooter('cities.ninhbinh.offices.office2')}
              </div>
              <div className='tracking-normal'>
                {tFooter('cities.ninhbinh.offices.office3')}
              </div>
            </div>
          </div>

          <div className='space-y-4 py-4'>
            <h2 className='-ml-2 flex text-h3'>
              <PinIcon className='mr-2' />
              {tFooter('cities.hungyen.name')}
            </h2>
            <div className='space-y-2'>
              <div className='tracking-normal'>
                {tFooter('cities.hungyen.offices.office1')}
              </div>
              <div className='tracking-normal'>
                {tFooter('cities.hungyen.offices.office2')}
              </div>
              <div className='tracking-normal'>
                {tFooter('cities.hungyen.offices.office3')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOfficerAddress;
