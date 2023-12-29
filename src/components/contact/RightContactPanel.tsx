"use client";

import { Button, Textarea } from "@nextui-org/react";
import Icons from "../common/Icons";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../ui/use-toast";
import axios, { AxiosError } from "axios";

const RightContactPanel = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const { toast } = useToast();

  const { mutate: sendEmail } = useMutation({
    mutationFn: async () => {
      await axios.post("/api/mail/send", { name, email, subject, message });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        toast({
          title: "Error on sending email",
          description: errorMessage,
          variant: "destructive",
        });
      }
    },
    onSuccess: () => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      toast({
        title: "Email sent",
        description:
          "I have received your message and will reply as soon as possible.",
        variant: "success",
      });
    },
  });

  return (
    <div className="mx-2 px-4 bg-inherit mb-4">
      <Textarea
        variant="flat"
        placeholder="Your name"
        size="lg"
        radius="full"
        className="mt-4 mb-6"
        classNames={{
          inputWrapper:
            "bg-clr-grey-5 border-none data-[hover=true]:bg-clr-grey-5 group-data-[focus=true]:bg-clr-grey-5",
          input: "text-white",
        }}
        isRequired
        minRows={1}
        maxRows={2}
        value={name}
        onValueChange={(value) => setName(value)}
      />
      <Textarea
        variant="flat"
        placeholder="Your email"
        size="lg"
        radius="full"
        className="my-6"
        classNames={{
          inputWrapper:
            "bg-clr-grey-5 border-none data-[hover=true]:bg-clr-grey-5 group-data-[focus=true]:bg-clr-grey-5",
          input: "text-white",
        }}
        isRequired
        minRows={1}
        maxRows={2}
        value={email}
        onValueChange={(value) => setEmail(value)}
      />
      <Textarea
        variant="flat"
        placeholder="Subject"
        size="lg"
        radius="full"
        className="my-6"
        classNames={{
          inputWrapper:
            "bg-clr-grey-5 border-none data-[hover=true]:bg-clr-grey-5 group-data-[focus=true]:bg-clr-grey-5",
          input: "text-white",
        }}
        isRequired
        minRows={2}
        maxRows={5}
        value={subject}
        onValueChange={(value) => setSubject(value)}
      />
      <Textarea
        variant="flat"
        placeholder="Message"
        size="lg"
        radius="full"
        className="my-6"
        classNames={{
          inputWrapper:
            "bg-clr-grey-5 border-none data-[hover=true]:bg-clr-grey-5 group-data-[focus=true]:bg-clr-grey-5",
          input: "text-white",
        }}
        isRequired
        minRows={6}
        value={message}
        onValueChange={(value) => setMessage(value)}
      />
      <div className="flex justify-end">
        <Button
          className="bg-clr-secondary text-clr-white"
          size="lg"
          onClick={() => sendEmail()}
        >
          Send <Icons.Send />
        </Button>
      </div>
    </div>
  );
};

export default RightContactPanel;
