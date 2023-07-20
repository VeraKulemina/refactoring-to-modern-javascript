
const sayHello = (name = 'World') => "Hello " + name;

const createSession = (speaker) => ({
    title: 'Modern JS!',
    speaker: speaker,
  });


const multiplier = (n = 1) => arg => n * arg;

export {
  sayHello,
  createSession,
  multiplier,
};
