using DataAccess.Models;

namespace BusinessLogic.Services;

public interface IUserService
{
    public Task<List<User>> GetAllUsersAsync();
    public Task<User> GetUserByIdAsync(int id);
    public Task CreateNewUserAsync(string fullname, string landmarks, string position, string phone);
    public Task UpdateUserAsync(int id, string fullname, string landmarks, string position, string phone);
    public Task DeleteUserAsync(int id);
}