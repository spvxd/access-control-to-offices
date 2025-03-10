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
    public IActionResult AddUser([FromBody] User user)
    {
        return Created();
    }

    [HttpPut]
    public IActionResult GetUserById([FromRoute] int id)
    {
        return Ok();
    }

    [HttpPatch]
    public IActionResult UpdateUser([FromBody] User user)
    {
        return NoContent();
    }

    [HttpDelete]
    public IActionResult DeleteUser([FromRoute] int id)
    {
        return Ok();
    }
}