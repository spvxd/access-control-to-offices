using System.Text.Json.Serialization;

namespace DataAccess.Models;

public class UserCabinet
{
    public int UserId { get; set; }
    [JsonIgnore]
    public User User { get; set; }

    public int CabinetId { get; set; }
    public Cabinet Cabinet { get; set; }
}