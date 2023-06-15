import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
`;
