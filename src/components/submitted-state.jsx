import payment from "../assets/Online payment_Two Color(1) 2.svg";

const SubmittedState = ({ starts }) => {
  return (
    <div
      className="w-[25.75rem] h-[26rem] m-auto mt-[16rem] rounded-[1.875rem] bg-[#232A34] font-overpass
    max-sm:w-[20.4375rem] max-sm:h-[22.5rem]">
      <div className="mx-10 py-10 space-y-6 max-sm:mx-6 max-sm:py-7  ">
        <div className="space-y-6">
          <img
            className="w-[10.125rem] h-[6.75rem] m-auto max-sm:w-[9rem] max-sm:h-[6rem]"
            src={payment}
            alt=""
          />
          <div
            className="w-[12.0625rem] h-[2rem] rounded-[1.40625rem] bg-[#262E38] m-auto
           max-sm:w-[10.5rem] max-sm:h-[2rem] ">
            <p className="w-[9.625rem] h-[1.5rem] text-[#FC7614] text-[0.9375rem] m-auto py-1 text-center max-sm:text-[0.875rem]">
              You selected out {starts} of 5
            </p>
          </div>
        </div>
        <div className="space-y-3 text-center">
          <h1 className="text-white text-[1.75rem] font-[700] max-sm:text-[1.5rem]">
            Thank you!
          </h1>
          <p
            className="text-[#969FAD] text-[0.9375rem] font-[400] leading-[1.5rem]  
          max-sm:leading-[1.375rem] max-sm:text-[0.875rem]">
            e appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmittedState;
