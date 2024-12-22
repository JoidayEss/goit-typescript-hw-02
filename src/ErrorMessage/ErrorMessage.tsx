import React from 'react';
import { ErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <p style={{ color: "red", textAlign: "center" }}>{message}</p>
);

export default ErrorMessage;
