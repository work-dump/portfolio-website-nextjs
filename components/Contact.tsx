"use client";
import { sendEmail } from "@/action/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useRef } from "react";
import toast from "react-hot-toast";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const refForm = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact My</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:lagoalekhandro@gmail.com">
          lagoalekhandro@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={refForm}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully ");
          refForm.current?.reset();
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="rounded-lg h-14 px-4 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
