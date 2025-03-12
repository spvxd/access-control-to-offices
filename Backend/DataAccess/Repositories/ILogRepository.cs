using DataAccess.Models;

namespace DataAccess.Repositories;

public interface ILogRepository
{
    public Task<List<Log>> GetAllLogsAsync();
    public Task CreateNewLogAsync(int userId, int cabinetId, string status, string photo);
}