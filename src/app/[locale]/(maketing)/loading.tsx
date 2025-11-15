import { Grid } from 'ldrs/react';

const Loading = () => {
  return (
    <div className='animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm'>
      <Grid size='60' speed='1.5' color='black' />
    </div>
  );
};

export default Loading;
