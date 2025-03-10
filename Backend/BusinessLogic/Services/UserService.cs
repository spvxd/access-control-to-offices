using DataAccess.Models;
using DataAccess.Repositories;

namespace BusinessLogic.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<List<User>> GetAllUsersAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<User> GetUserByIdAsync()
    {
        throw new NotImplementedException();
    }

    public async Task CreateNewUserAsync()
    {
        throw new NotImplementedException();
    }

    public async Task UpdateUserAsync()
    {
        throw new NotImplementedException();
    }

    public async Task DeleteUserAsync()
    {
        throw new NotImplementedException();
    }
}