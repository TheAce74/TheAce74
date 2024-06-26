import { useAppContext } from "@/context/AppContext";
import { useFetch } from "@/hooks/useFetch";
import { useToast } from "@/hooks/useToast";
import { FormEvent, ReactNode, memo, useRef } from "react";
import { InView } from "react-intersection-observer";

type ContactProps = {
  title: string;
  icon: ReactNode;
};

function Contact({ title, icon }: ContactProps) {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const telRef = useRef<HTMLInputElement | null>(null);
  const budgetRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const { post } = useFetch();
  const { setSection } = useAppContext();
  const { customToast, dismiss } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [name, email, phone, budget, message] = [
      nameRef.current?.value,
      emailRef.current?.value,
      telRef.current?.value,
      budgetRef.current?.value,
      messageRef.current?.value,
    ] as string[];
    customToast("Sending message...", {
      type: "info",
    });
    const response = await post("https://aceserver.onrender.com/contact", {
      name,
      email,
      phone,
      budget,
      message,
    });
    if (response.success) {
      dismiss();
      customToast("Message sent");
      if (
        nameRef.current &&
        emailRef.current &&
        telRef.current &&
        budgetRef.current &&
        messageRef.current
      ) {
        nameRef.current.value = "";
        emailRef.current.value = "";
        telRef.current.value = "";
        budgetRef.current.value = "";
        messageRef.current.value = "";
      }
    } else {
      dismiss();
      customToast("Message not sent, try again", {
        type: "error",
      });
    }
  };

  return (
    <InView
      as="section"
      className="contact"
      aria-label="contact"
      id="contact"
      onChange={(inView) => {
        if (inView) {
          setSection(5);
        }
      }}
    >
      <p className="id">
        <span>{icon}</span>
        <span>{title}</span>
      </p>
      <h2 className="contact__heading">
        Ready to embark on this adventure together? Let&apos;s make some{" "}
        <span>frontend magic!</span>
      </h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Full Name <span className="important">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your full name"
            required
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="email">
            Email Address <span className="important">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            required
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="tel">
            Phone Number <span className="optional">(optional)</span>
          </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Your phone number"
            ref={telRef}
          />
        </div>
        <div>
          <label htmlFor="budget">
            Budget <span className="optional">(optional)</span>
          </label>
          <input
            type="text"
            name="budget"
            id="budget"
            inputMode="numeric"
            placeholder="Your budget in dollars"
            ref={budgetRef}
          />
        </div>
        <div>
          <label htmlFor="message">
            Message <span className="important">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Write your message here..."
            required
            ref={messageRef}
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </InView>
  );
}

export default memo(Contact);
