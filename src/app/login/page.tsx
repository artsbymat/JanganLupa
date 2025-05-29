import { Google } from '@/components/icons/Google';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex max-w-xl mx-auto h-screen bg-[#F4F7FA]">
      <div className="flex flex-col w-full">
        <Image
          src="/assets/login.svg"
          width={900}
          height={900}
          alt="logo"
          className="mx-auto h-[70%]"
        />
        <div className="rounded-t-[100%_50px] h-[30%] bg-white p-8">
          <h1 className="text-4xl font-bold mt-2 mb-8">Login</h1>
          <div className="w-full flex justify-center">
            <Button
              className="font-semibold"
              variant="primary"
              icon={<Google fontSize={20} />}
            >
              Login with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
