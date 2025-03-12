using DataAccess.Models;

namespace BusinessLogic.Services;

public interface ICabinetService
{
    public Task CreateNewCabinetAsync(string number);
    public Task<List<Cabinet>> GetAllCabinetsAsync();
    public Task<List<Cabinet>> GetUserCabinetsAsync(int id);
    public Task<bool> AssignCabinetsAsync(int UserId, List<string> CabinetNumbers);
}