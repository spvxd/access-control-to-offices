using DataAccess.Config;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }
    public DbSet<Cabinet> Cabinets { get; set; }
    public DbSet<UserCabinet> UserCabinets { get; set; }
    public DbSet<Log> Logs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UserConfig());
        modelBuilder.ApplyConfiguration(new CabinetConfig());
        modelBuilder.ApplyConfiguration(new UserCabinetConfig());
        modelBuilder.ApplyConfiguration(new LogConfig());
        base.OnModelCreating(modelBuilder);
    }
}