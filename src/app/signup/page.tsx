import Logo from "@/components/logo/Logo";
import SignupContainer from "@/features/signup/SignupContainer";
import SignupSideBanner from "@/features/signup/SignupSideBanner";

const page = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[70%,30%] h-screen ">
      <main className="grid grid-flow-row grid-rows-[auto_1fr] w-full h-full overflow-y-auto">
        <header className="w-full h-fit mt-10 px-8 sm:px-14 pb-5">
          <Logo />
        </header>
        {/* Form Section */}
        <SignupContainer />
      </main>
      <SignupSideBanner />
    </div>
  );
};

export default page;
