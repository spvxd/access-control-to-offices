using Backend.API.DTO;
using BusinessLogic.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LogController : ControllerBase
{
    private readonly ILogService _logService;

    public LogController(ILogService logService)
    {
        _logService = logService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllLogsAsync()
    {
        var log = await _logService.GetAllLogsAsync();
        return Ok(log);
    }

    [HttpPost]
    public async Task<IActionResult> CreateNewLogAsync(CreateLogDto log)
    {
        await _logService.CreateNewLogAsync(log.UserId, log.CabinetId, log.Status, log.Photo);
        return Created();
    }
}