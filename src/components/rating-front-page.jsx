import { useState } from "react";
import star from "../assets/Star.svg";
import SubmittedState from "./submitted-state";
// import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const RatingFrontPage = () => {
  const [rating, setRating] = useState(0);
  const [haveValue, setHaveValue] = useState(false);
  const toast = useToast();
  const handleSubmit = () => {
    if (rating >= 1) {
      toast({
        title: "Thanks you.",
        description: "Have a nice day",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setHaveValue(true);
    } else {
      toast({
        title: "required.",
        description: "please rate your number.",
        status: "error",
        duration: 9000,
        isClosable: false,
      });
      setHaveValue(false);
    }
  };
  const ratingFeedback = [
    {
      id: 1,
      number: 1,
    },
    {
      id: 2,
      number: 2,
    },
    {
      id: 3,
      number: 3,
    },
    {
      id: 4,
      number: 4,
    },
    {
      id: 5,
      number: 5,
    },
  ];
  return (
    <>
      {!haveValue && (
        <div className="w-[25.75rem] h-[26rem] m-auto mt-[16rem] rounded-[1.875rem] bg-[#232A34] max-sm:w-[20.4375rem] max-sm:h-[22.5rem]  max-sm:rounded-[0.9375rem] font-overpass">
          <div className="mx-10 py-10 space-y-6 max-sm:mx-6 max-sm:py-7 ">
            <div className="w-[3rem] h-[3rem] rounded-full bg-[#262E38]  shadow-2xl py-4 max-sm:w-[2.5rem] max-sm:h-[2.5rem] max-sm:py-3">
              <img
                className="w-[1.04669rem] h-[1rem] m-auto max-sm:w-[1rem] max-sm:h-[0.9rem] "
                src={star}
                alt=""
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-white text-[1.75rem] font-[700] max-sm:text-[1.5rem]">
                How did we do?
              </h1>
              <p
                className="text-[#969FAD] text-[0.9375rem] font-[400] leading-[1.5rem]
                    max-sm:text-[0.875rem]">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="flex gap-5 max-sm:gap-4">
              <div className="flex gap-5 max-sm:gap-4 ">
                {ratingFeedback?.map((item) => (
                  <div
                    key={ratingFeedback?.id}
                    onClick={() => {
                      setRating(item?.id);
                    }}>
                    <div
                      className={`${
                        rating === item?.number ? "bg-[#7C8798] text-white" : ""
                      } w-[3.1875rem] h-[3.1875rem] rounded-full bg-[#262E38]  shadow-2xl py-4 
                  hover:bg-[#FC7614] hover:text-white max-sm:w-[2.5rem] max-sm:h-[2.5rem] max-sm:py-3] text-center text-[#7C8798]`}>
                      {item?.number}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="w-[21.3125rem] bg-[#FC7614] text-center rounded-[1.3125rem]  m-auto
          hover:bg-white max-sm:w-[17.4375rem]">
            <button
              onClick={handleSubmit}
              className="text-white text-[0.9375rem] font-[700] w-full
              py-[11px] tracking-[0.125rem] useState hover:text-[#FC7614]
              max-sm:text-[]0.875rem">
              {" "}
              Submit
            </button>
          </div>
        </div>
      )}

      {haveValue && <SubmittedState starts={rating} />}
    </>
  );
};

export default RatingFrontPage;
