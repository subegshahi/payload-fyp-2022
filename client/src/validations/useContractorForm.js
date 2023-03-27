import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useContractorForm = () => {
  const schema = yup.object().shape({
    airlinesName: yup.string().required(),
    from: yup.string().required(),
    to: yup.string().required(),
    takeoffTime: yup.string().required(),
    landingTime: yup.string().required(),
    flightDuration: yup.string().required(),
    totalPassengerSeat: yup.number().required(),
    fare: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, errors };
};
