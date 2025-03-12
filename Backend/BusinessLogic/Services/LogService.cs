using DataAccess.Models;
using DataAccess.Repositories;

namespace BusinessLogic.Services;

public class LogService : ILogService
{
    private readonly ILogRepository _logRepository;

    public LogService(ILogRepository logRepository)
    {
        _logRepository = logRepository;
    }

    public async Task<List<Log>> GetAllLogsAsync()
    {
        return await _logRepository.GetAllLogsAsync();
    }

    public async Task CreateNewLogAsync(int userId, int cabinetId, string status, string photo)
    {
        await _logRepository.CreateNewLogAsync(userId, cabinetId, status, photo);
    }
}