import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useBookingForm = () => {
  const schema = yup.object().shape({
    from: yup.string().required(),
    to: yup.string().required(),
    departureDate: yup.date().required(),
    // returnDate: yup.date(),
    adult: yup.number().min(1).required(),
    child: yup.number().min(0),
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
