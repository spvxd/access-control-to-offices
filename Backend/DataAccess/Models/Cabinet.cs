namespace DataAccess.Models;

public class Cabinet
{
    public int Id { get; set; }
    public string Number { get; set; }
    public List<UserCabinet> UserCabinets { get; set; } = [];
}