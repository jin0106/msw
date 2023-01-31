import { faker } from "@faker-js/faker";

export default {
    userId: faker.datatype.uuid(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    registeredAt: faker.date.past(),
};
