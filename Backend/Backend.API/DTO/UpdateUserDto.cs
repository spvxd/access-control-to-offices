namespace Backend.API.DTO;

public record UpdateUserDto(int Id, string Fullname, string Landmarks, string Position, string Phone);