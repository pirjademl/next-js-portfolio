import { FC } from "react";

export interface EmailTemplateProps {
  firstname: string;
  lastname: string;
  email: string;
  query: string;
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  firstname,
  lastname,
  email,
  query,
}) => {
  return (
    <html>
      <head>
        <title>Magdum Pirjade </title>
      </head>
      <body>
        <h1>Hey you got a query</h1>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{query}</p>
        <p>From {email}</p>
      </body>
    </html>
  );
};
