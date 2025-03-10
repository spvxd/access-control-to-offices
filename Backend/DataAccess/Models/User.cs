namespace DataAccess.Models;

public class User
{
    public int Id { get; set; }
    public string Fio { get; set; }
    public string Landmarks { get; set; }
    public string Position { get; set; }
    public string Phone { get; set; }
    public List<UserCabinet> UserCabinets { get; set; } = [];
}