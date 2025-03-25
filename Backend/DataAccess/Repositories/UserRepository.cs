using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories;

public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<User>> GetAllUsersAsync()
    {
        return await _context.Users
            .Include(u => u.UserCabinets)
            .ThenInclude(uc => uc.Cabinet)
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<User?> GetUserByIdAsync(int id)
    {
        return await _context.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == id) ??
               throw new Exception("User not found");
    }


    public async Task CreateNewUserAsync(string fullname, string position, string phone)
    {
        var user = new User
        {
            Fio = fullname,
            Position = position,
            Phone = phone
        };
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateUserAsync(int id, string fullname,  string position, string phone)
    {
        await _context.Users
            .Where(u => u.Id == id).ExecuteUpdateAsync(s =>
                s.SetProperty(u => u.Fio, fullname)
                    .SetProperty(u => u.Position, position)
                    .SetProperty(u => u.Phone, phone));
    }

    public async Task DeleteUserAsync(int id)
    {
        await _context.Users.Where(u => u.Id == id)
            .ExecuteDeleteAsync();
    }

    public async Task UpdateUserLandmarks(int id, string landmarks)
    {
        await _context.Users.Where(u => u.Id == id).ExecuteUpdateAsync(s =>
            s.SetProperty(u => u.Landmarks, landmarks
            ));
    }
}