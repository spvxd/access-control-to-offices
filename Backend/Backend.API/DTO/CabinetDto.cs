using DataAccess.Models;

namespace Backend.API.DTO;

public record CabinetDto(int UserId, List<string> CabinetNumbers);