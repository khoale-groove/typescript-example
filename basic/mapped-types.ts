// mapped types

type ContactDetails = { [K in 'name' | 'email']: string };

interface Form<T> {
  errors: { [K in keyof T]: string };
}

const form: Form<{ name: string; email: string }> = {
  errors: {
    email: '',
    name: '',
  },
};
