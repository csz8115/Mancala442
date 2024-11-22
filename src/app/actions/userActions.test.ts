const { createUser, deleteUser } = require('./userActions');

test('createUser should return a user object', () => {
    const user = createUser('John Doe', 'john@example.com');
    expect(user).toEqual({ name: 'John Doe', email: 'john@example.com' });
});

test('deleteUser should return a success message', () => {
    const message = deleteUser(1);
    expect(message).toBe('User deleted successfully');
});