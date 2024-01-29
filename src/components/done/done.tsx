"use client";
// Import statements
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

// Component
export const Done = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center md:p-16">
      <div className="p-[16px] flex flex-col items-center justify-center">
        {/* Image Section */}
        <img width={500} src="/done.png" alt="done" />

        {/* Title */}
        <h4 className="text-center text-2xl font-bold">Thank you!</h4>

        {/* Main Content */}
        <p className="mt-3.5 text-center">
          Your application has been received, and we appreciate your interest in
          our services.
          <br />
          <span className="text-center">
            We will contact you as soon as possible
          </span>
        </p>

        {/* Additional Information */}
        <p className="mt-4 text-sm text-center">
          In the meantime, please feel free to visit our website to explore more
          about our services and the various funding solutions we offer. For
          immediate assistance or questions, visit our Help Center at{" "}
          <a href="https://tgiscalme.com/contact">tgiscalme.com/contact</a>.
        </p>

        {/* Back Button */}
        <Button
          onClick={() => router.back()}
          className="mt-5"
          color="red"
          variant="outlined"
        >
          Back
        </Button>
      </div>
    </div>
  );
};
