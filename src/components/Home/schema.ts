import * as yup from 'yup';

export interface ContactDetailsModel {
  name: string;
  email: string;
  phone_number: string;
  company_name: string;
}

export const contactDetailsSchema = () =>
  yup.object({
    name: yup.string().required('This entry is required').max(255, 'Up to 255 characters allowed'),
    email: yup
      .string()
      .email('This is not a valid email')
      .required('This entry is required')
      .max(255, 'Up to 255 characters allowed'),
    phone_number: yup
      .string()
      .required('This entry is required')
      .max(255, 'Up to 35 characters allowed'),
    company_name: yup
      .string()
      .required('This entry is required')
      .max(255, 'Up to 255 characters allowed'),
  });
