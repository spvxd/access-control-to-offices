using Backend.API.DTO;
using BusinessLogic.Services;
using DataAccess.Models;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Backend.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CabinetController : ControllerBase
{
    private readonly ICabinetService _cabinetService;

    public CabinetController(ICabinetService cabinetService)
    {
        _cabinetService = cabinetService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllCabinets()
    {
        var cabinets = await _cabinetService.GetAllCabinetsAsync();
        return Ok(cabinets);
    }
    [HttpPost]
    public async Task<IActionResult> CreateCabinet([FromBody] Cabinet cabinet)
    {
        await _cabinetService.CreateNewCabinetAsync(cabinet.Number);
        return Created();
    }
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetUserCabinets([FromRoute] int id)
    {
        var userCabinets = await _cabinetService.GetUserCabinetsAsync(id);
        return Ok(userCabinets);
    }
   
    [HttpPost("assign-cabinets")]
    public async Task<IActionResult> AssignCabinets([FromBody] CabinetDto dto)
    {
        bool result = await _cabinetService.AssignCabinetsAsync(dto.UserId, dto.CabinetNumbers);
        if (!result)
            return BadRequest("Ошибка: пользователь не найден или кабинеты отсутствуют");

        return Ok("Кабинеты успешно обновлены");
    }
}