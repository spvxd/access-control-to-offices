using DataAccess.Models;

namespace DataAccess.Repositories;

public interface IUserRepository
{
    public Task<List<User>> GetAllUsersAsync();
    public Task<User> GetUserByIdAsync();
    public Task CreateNewUserAsync(User user);
    public Task UpdateUserAsync(User user);
    public Task DeleteUserAsync(User user);
}