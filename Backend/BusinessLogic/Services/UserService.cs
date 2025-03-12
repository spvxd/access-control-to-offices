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
        return await _userRepository.GetAllUsersAsync();
    }

    public async Task<User> GetUserByIdAsync(int id)
    {
        return await _userRepository.GetUserByIdAsync(id);
    }

    public async Task CreateNewUserAsync(string fullname, string position, string phone)
    {
        await _userRepository.CreateNewUserAsync(fullname, position, phone);
    }

    public async Task UpdateUserAsync(int id, string fullname, string landmarks, string position, string phone)
    {
        await _userRepository.UpdateUserAsync(id, fullname, landmarks, position, phone);
    }

    public async Task DeleteUserAsync(int id)
    {
        await _userRepository.DeleteUserAsync(id);
    }
}