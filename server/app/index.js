import faker from "faker";

console.log(faker.name.findName());

const data = Array.from({ length: 500 }, () => ({
  name: faker.name.findName(),
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(),
}));

console.log(data);
