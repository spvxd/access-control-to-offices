using System.Text.Json.Serialization;

namespace DataAccess.Models;

public class Cabinet
{
    public int Id { get; set; }
    public string Number { get; set; }
    
    [JsonIgnore]
    public List<UserCabinet> UserCabinets { get; set; } = [];
}