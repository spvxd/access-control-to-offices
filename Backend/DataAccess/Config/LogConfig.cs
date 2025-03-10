using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.Config;

public class LogConfig : IEntityTypeConfiguration<Log>
{
    public void Configure(EntityTypeBuilder<Log> builder)
    {
        builder.HasKey(x => x.Id);
        builder.HasOne(l => l.User).WithMany().HasForeignKey(l => l.UserId).OnDelete(DeleteBehavior.SetNull);
        builder.HasOne(l => l.Cabinet).WithMany().HasForeignKey(l => l.CabinetId).OnDelete(DeleteBehavior.SetNull);
        builder.Property(l => l.DateTime).HasDefaultValueSql("CURRENT_TIMESTAMP");
    }
}