using DataAccess.Models;

namespace BusinessLogic.Services;

public interface ILogService
{
    public Task<List<Log>> GetAllLogsAsync();
    public Task CreateNewLogAsync(int userId, int cabinetId, string status, string photo);
}