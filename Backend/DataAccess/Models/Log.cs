namespace DataAccess.Models;

public class Log
{
    public int Id { get; set; }
    public int? UserId { get; set; }
    public User? User { get; set; }
    public int? CabinetId { get; set; }
    public Cabinet? Cabinet { get; set; }
    public DateTime DateTime { get; init; } = DateTime.UtcNow;
    public string Status { get; set; }
    public string Photo { get; set; }
}