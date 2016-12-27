exports.add = (a, b) => a + b;

exports.square = (x) => x * x;

exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};