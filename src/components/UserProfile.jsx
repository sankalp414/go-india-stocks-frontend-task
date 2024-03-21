import Image from 'next/image';

const UserProfile = ({ src, className }) => {
  return (
    <Image
      src={src}
      alt='user'
      width={100}
      height={100}
      className={`rounded-full ${className}`}
    />
  );
};

export default UserProfile;
