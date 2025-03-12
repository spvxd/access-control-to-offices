namespace Backend.API.DTO;

public record CreateLogDto(int UserId, int CabinetId, string Status, string Photo);