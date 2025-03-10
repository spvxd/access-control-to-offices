using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.Config;

public class CabinetConfig: IEntityTypeConfiguration<Cabinet>
{
    public void Configure(EntityTypeBuilder<Cabinet> builder)
    {
       builder.HasKey(c => c.Id);
       
    }
}