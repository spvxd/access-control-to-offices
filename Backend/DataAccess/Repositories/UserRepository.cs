using DataAccess.Models;

namespace DataAccess.Repositories;

public class UserRepository : IUserRepository
{
    public async Task<List<User>> GetAllUsersAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<User> GetUserByIdAsync()
    {
        throw new NotImplementedException();
    }

    public async Task CreateNewUserAsync(User user)
    {
        throw new NotImplementedException();
    }

    public async Task UpdateUserAsync(User user)
    {
        throw new NotImplementedException();
    }

    public async Task DeleteUserAsync(User user)
    {
        throw new NotImplementedException();
    }
}