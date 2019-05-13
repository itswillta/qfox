import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Class name is required.')
});
