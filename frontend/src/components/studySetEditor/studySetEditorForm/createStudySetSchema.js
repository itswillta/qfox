import * as yup from 'yup';

export default yup.object().shape({
  title: yup.string().required("Study set's title is required."),
  viewPermission: yup.string().required('View permission is required.'),
  editPermission: yup.string().required('Edit permission is required')
  // terms: yup.array().of(yup.object().shape({
  //   term: yup.string().required('The term must be specified.'),
  //   definition: yup.string().required("The term's definition is required.")
  // }))
});
