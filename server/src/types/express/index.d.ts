// file path Module-14-Lock-N-Board/server/src/types/express/index.d.ts

declare namespace Express {
  interface Request {
    user?: {
      username: string;
    };
  }
}