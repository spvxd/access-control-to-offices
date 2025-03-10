using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.Config;

public class UserCabinetConfig : IEntityTypeConfiguration<UserCabinet>
{
    public void Configure(EntityTypeBuilder<UserCabinet> builder)
    {
        builder.HasKey(uc => new
        {
            uc.UserId, uc.CabinetId
        });
        builder.HasOne(uc => uc.User).WithMany(u => u.UserCabinets).HasForeignKey(uc => uc.UserId);
        builder.HasOne(uc => uc.Cabinet).WithMany(c => c.UserCabinets).HasForeignKey(uc => uc.CabinetId);
    }
}