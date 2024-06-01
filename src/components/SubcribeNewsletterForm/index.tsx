/* eslint-disable no-useless-escape */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const emailRule =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup.number().positive().integer().required(),
    email: yup.string().matches(emailRule).required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function SubscribeNewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <section className='section_two_wrapper'>
      <div className='sections section_form'>
        <h2 className='section_title text-center'>
          Subscribe to Our Newsletter
        </h2>
        <p className='section_desc text-center'>
          Do not want to miss news, updates, note and any offer on our products,
          then please subscriber to our mailling list.
        </p>
        <form
          className='subscribe_form flex'
          action=''
          method='GET'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name")}
            placeholder='Your name'
            style={{
              paddingLeft: "10px",
              paddingTop: "3px",
              paddingBottom: "3px",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "3px",
              appearance: "none",
              fontSize: "73%",
              width: "179px",
              height: "auto",
            }}
          />
          <p>{errors.name?.message}</p>

          <input
            {...register("phone")}
            placeholder='Your Mobile phone'
            style={{
              paddingLeft: "10px",
              paddingTop: "3px",
              paddingBottom: "3px",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "3px",
              appearance: "none",
              fontSize: "73%",
              width: "179px",
              height: "auto",
            }}
          />
          <p>{errors.phone?.message}</p>

          <input
            {...register("email")}
            placeholder='Your email address'
            className='input'
            style={{
              paddingLeft: "10px",
              paddingTop: "3px",
              paddingBottom: "3px",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "3px",
              appearance: "none",
              fontSize: "73%",
              width: "179px",
              height: "auto",
            }}
          />
          <p>{errors.email?.message}</p>
          <button type='submit' className='button'>
            <i className='fa fa-envelope-o'></i> Subscribe email list
          </button>
        </form>
      </div>
    </section>
  );
}
