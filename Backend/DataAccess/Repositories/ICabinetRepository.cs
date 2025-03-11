using DataAccess.Models;

namespace DataAccess.Repositories;

public interface ICabinetRepository
{
    public Task CreateNewCabinetAsync(string number);
    public Task<List<Cabinet>> GetAllCabinetsAsync();
    public Task<List<Cabinet>> GetUserCabinetsAsync(int id);
    public Task<User?> GetUserWithCabinetsAsync(int userId);
    public Task<List<Cabinet>> GetCabinetsByNumbersAsync(List<string> cabinetNumbers);
    public Task SaveChangesAsync();
}