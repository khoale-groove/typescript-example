// mapped types

// type ContactDetails = { [K in 'name' | 'email']: string };
type ContactDetails = { name: string; email: string };

interface Form<T> {
  errors: { [K in keyof T]: string };
}

const form: Form<ContactDetails> = {
  // errors: {
  //   email: '',
  //   name: '',
  // },
  errors: {
    name: '',
    email: '',
  },
};

const contact: ContactDetails = {
  name: 'name',
  email: 'email',
};
