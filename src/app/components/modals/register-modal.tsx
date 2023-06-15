"use client";

import useRegisterModal from "@/app/hooks/use-register-modal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { AiFillGithub } from "react-icons/ai"
// import { FcGoogle } from "react-icons/fc"
import Heading from "../heading";
import Input from "../inputs/input";
import Modal from "./modal";

export default function RegisterModal() {
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    try {
      axios
        .post("/api/register", data)
        .then(() => {
          registerModal.onClose();
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subTitle="Create an account!" />

      <Input />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
