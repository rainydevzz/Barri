declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN: string;
            DB_URL: string;
            OWNERS: string;
            DBL: string;
            DEV_SERVER: string;
            JOIN_HOOK: string;
        }
    }
}

export {};
