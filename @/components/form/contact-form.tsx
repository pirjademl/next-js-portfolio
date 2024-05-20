"use client";
import { FC } from "react";
import { Form } from "../ui/form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Textarea, Button } from "../ui";
import { useToast } from "../ui/use-toast";
export type ContactFormProps = {};
type inputs = {
  firstName: string;
  lastName: string;
  email: string;
  query: string;
};
export const ContactForm: FC<ContactFormProps> = () => {
  const url = process.env.NEXT_PUBLIC_API_SEND;
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();
  const onSubmit: SubmitHandler<inputs> = async (data) => {
    try {
      const res = await fetch(url!, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast({
          title: "Email send successfully",
          description: "thank you for your query !!!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="px-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2">
        <Input
          {...register("firstName", { required: true })}
          placeholder="John"
        />
        <Input
          {...register("lastName", { required: true })}
          placeholder="Doe"
        />
      </div>
      <Input
        {...register("email", { required: true })}
        placeholder="Domain@mail.com"
        type="email"
      />
      <Textarea
        {...register("query", { required: true })}
        placeholder="Enter your query Here"
      />
      <Button variant={"outline"}> Submit</Button>
    </Form>
  );
};
