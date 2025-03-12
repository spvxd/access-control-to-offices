using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories;

public class CabinetRepository : ICabinetRepository
{
    private readonly AppDbContext _context;

    public CabinetRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task CreateNewCabinetAsync(string number)
    {
        var cabinet = new Cabinet
        {
            Number = number
        };
        await _context.Cabinets.AddAsync(cabinet);
        await _context.SaveChangesAsync();
    }

    public async Task<List<Cabinet>> GetAllCabinetsAsync()
    {
        var cabinets = await _context.Cabinets.AsNoTracking().ToListAsync();
        return cabinets;
    }

    public async Task<List<Cabinet>> GetUserCabinetsAsync(int id)
    {
        var cabinets = await _context.UserCabinets
            .Where(uc => uc.UserId == id)
            .Select(uc => uc.Cabinet)
            .ToListAsync();
        return cabinets;
    }
    
    public async Task<User?> GetUserWithCabinetsAsync(int userId)
    {
        return await _context.Users
            .Include(u => u.UserCabinets)
            .ThenInclude(uc => uc.Cabinet)
            .FirstOrDefaultAsync(u => u.Id == userId);
    }

    public async Task<List<Cabinet>> GetCabinetsByNumbersAsync(List<string> cabinetNumbers)
    {
        return await _context.Cabinets
            .Where(c => cabinetNumbers.Contains(c.Number))
            .ToListAsync();
    }
    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}