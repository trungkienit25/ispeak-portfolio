import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: 'ot45kkke',
    dataset: 'production',
    apiVersion: "2023-12-09",
    useCdn: false,
};

const client = createClient(config);

export default client;