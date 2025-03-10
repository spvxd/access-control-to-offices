using DataAccess.Models;

namespace BusinessLogic.Services;

public interface IUserService
{
    public Task<List<User>> GetAllUsersAsync();
    public Task<User> GetUserByIdAsync();
    public Task CreateNewUserAsync();
    public Task UpdateUserAsync();
    public Task DeleteUserAsync();
}