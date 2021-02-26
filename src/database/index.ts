import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      schema:
        process.env.NODE_ENV === "test"
          ? "test-api-email"
          : defaultOptions.database,
    })
  );
};
