using Backend.API.DTO;
using BusinessLogic.Services;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllUsers()
    {
        var users = await _userService.GetAllUsersAsync();
        return Ok(users);
    }

    [HttpPost]
    public async Task<IActionResult> AddUser([FromBody] CreateUserDto dto)
    {
        await _userService.CreateNewUserAsync(dto.Fio, dto.Position, dto.Phone);
        return Created();
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetUserById([FromRoute] int id)
    {
        var user = await _userService.GetUserByIdAsync(id);
        return Ok(user);
    }

    [HttpPatch]
    public async Task<IActionResult> UpdateUser([FromBody] UpdateUserDto user)
    {
        await _userService.UpdateUserAsync(user.Id, user.Fio, user.Position, user.Phone);
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteUser([FromRoute] int id)
    {
        await _userService.DeleteUserAsync(id);
        return Ok();
    }

    [HttpPatch("landmarks/{id:int}")]
    public async Task<IActionResult> UpdateUserLandmarks([FromRoute] int id, [FromBody] UpdateLandmarksDto dto)
    {
        Console.WriteLine(id);
        await _userService.UpdateUserLandmarks(id, dto.Landmarks);
        return NoContent();
    }
}