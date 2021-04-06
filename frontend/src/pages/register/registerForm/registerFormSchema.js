import * as yup from 'yup';

export default yup.object().shape({
  username: yup.string().required('Username is required.'),
  name: yup.string().required('Name is required.'),
  password: yup.string().required('Password is required.')
});
