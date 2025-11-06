import RoomCard from '@/components/common/RoomCard';

const RoomCards = () => {
  return (
    <section className='relative mx-auto max-w-6xl'>
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-h1'>Our room</h2>
        <p className='mx-auto max-w-2xl text-paragraph-m'>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of soul.
        </p>
      </div>

      <div className='mb-8 grid gap-6 md:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, i) => (
          <RoomCard key={i} />
        ))}

        <RoomCard sizeCard='large' />
      </div>
    </section>
  );
};

export default RoomCards;
