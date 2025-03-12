using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories;

public class LogRepository : ILogRepository
{
    private readonly AppDbContext _context;

    public LogRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<Log>> GetAllLogsAsync()
    {
        return await _context.Logs.AsNoTracking().ToListAsync();
    }

    public async Task CreateNewLogAsync(int userId, int cabinetId, string status, string photo)
    {
        var log = new Log
        {
            UserId = userId,
            CabinetId = cabinetId,
            Status = status,
            Photo = photo
        };
        await _context.Logs.AddAsync(log);
        await _context.SaveChangesAsync();
    }
}